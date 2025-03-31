<script lang="ts">
	import { db } from '$lib/firebase';
	import {
		collection,
		addDoc,
		deleteDoc,
		doc,
		updateDoc,
		query,
		orderBy,
		onSnapshot,
		type Unsubscribe,
		type DocumentData
	} from 'firebase/firestore';
	import { onMount } from 'svelte';

	interface WishlistItem {
		id: string;
		title: string;
		description: string;
		link?: string;
		priority: 'high' | 'medium' | 'low';
	}

	let items: WishlistItem[] = [];
	let unsubscribe: Unsubscribe;
	let newItem: Omit<WishlistItem, 'id'> = {
		title: '',
		description: '',
		link: '',
		priority: 'medium'
	};
	let editingItem: WishlistItem | null = null;

	onMount(() => {
		if (!db) return;
		const q = query(collection(db, 'wishlist'), orderBy('priority', 'desc'));
		unsubscribe = onSnapshot(q, (snapshot) => {
			items = snapshot.docs.map(
				(doc) =>
					({
						id: doc.id,
						...doc.data()
					}) as WishlistItem
			);
		});

		return () => unsubscribe();
	});

	async function handleSubmit() {
		if (!db) return;
		if (editingItem) {
			await updateDoc(doc(db, 'wishlist', editingItem.id), newItem);
		} else {
			await addDoc(collection(db, 'wishlist'), newItem);
		}
		resetForm();
	}

	async function deleteItem(id: string) {
		if (!db) return;
		if (confirm('Are you sure you want to delete this item?')) {
			await deleteDoc(doc(db, 'wishlist', id));
		}
	}

	function editItem(item: WishlistItem) {
		editingItem = item;
		newItem = { ...item };
	}

	function resetForm() {
		newItem = {
			title: '',
			description: '',
			link: '',
			priority: 'medium'
		};
		editingItem = null;
	}
</script>

<div class="min-h-screen bg-gradient-to-b from-purple-900 via-indigo-900 to-black p-8">
	<div class="mx-auto max-w-4xl">
		<h1
			class="mb-12 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-center text-5xl font-bold text-transparent"
		>
			🍄 Wishlist Admin 🍄
		</h1>

		<form
			on:submit|preventDefault={handleSubmit}
			class="mb-8 rounded-xl border border-purple-500/30 bg-white/10 p-6 backdrop-blur-lg"
		>
			<div class="space-y-4">
				<div>
					<label class="mb-2 block text-purple-200">Title</label>
					<input
						type="text"
						bind:value={newItem.title}
						required
						class="w-full rounded-lg border border-purple-500/30 bg-white/5 px-4 py-2 text-purple-100 focus:border-purple-500 focus:outline-none"
					/>
				</div>
				<div>
					<label class="mb-2 block text-purple-200">Description</label>
					<textarea
						bind:value={newItem.description}
						required
						class="w-full rounded-lg border border-purple-500/30 bg-white/5 px-4 py-2 text-purple-100 focus:border-purple-500 focus:outline-none"
						rows="3"
					></textarea>
				</div>
				<div>
					<label class="mb-2 block text-purple-200">Link (optional)</label>
					<input
						type="url"
						bind:value={newItem.link}
						class="w-full rounded-lg border border-purple-500/30 bg-white/5 px-4 py-2 text-purple-100 focus:border-purple-500 focus:outline-none"
					/>
				</div>
				<div>
					<label class="mb-2 block text-purple-200">Priority</label>
					<select
						bind:value={newItem.priority}
						class="w-full rounded-lg border border-purple-500/30 bg-white/5 px-4 py-2 text-purple-100 focus:border-purple-500 focus:outline-none"
					>
						<option value="high">High</option>
						<option value="medium">Medium</option>
						<option value="low">Low</option>
					</select>
				</div>
				<div class="flex gap-4">
					<button
						type="submit"
						class="rounded-lg bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-600 px-6 py-2 text-white transition-all hover:bg-gradient-to-l"
					>
						{editingItem ? 'Update Item' : 'Add Item'}
					</button>
					{#if editingItem}
						<button
							type="button"
							on:click={resetForm}
							class="rounded-lg bg-gradient-to-r from-gray-600 via-slate-600 to-zinc-600 px-6 py-2 text-white transition-all hover:bg-gradient-to-l"
						>
							Cancel
						</button>
					{/if}
				</div>
			</div>
		</form>

		<div class="grid gap-6">
			{#each items as item}
				<div class="rounded-xl border border-purple-500/30 bg-white/10 p-6 backdrop-blur-lg">
					<div class="flex items-start justify-between">
						<h2 class="mb-2 text-2xl font-bold text-purple-200">{item.title}</h2>
						<span
							class="rounded-full px-3 py-1 text-sm font-medium
              {item.priority === 'high'
								? 'bg-red-500/20 text-red-200'
								: item.priority === 'medium'
									? 'bg-yellow-500/20 text-yellow-200'
									: 'bg-green-500/20 text-green-200'}"
						>
							{item.priority}
						</span>
					</div>
					<p class="mb-4 text-purple-100">{item.description}</p>
					{#if item.link}
						<a
							href={item.link}
							target="_blank"
							rel="noopener noreferrer"
							class="mb-4 inline-flex items-center text-indigo-300 transition-colors hover:text-indigo-200"
						>
							<span class="mr-2">🔗</span> View Item
						</a>
					{/if}
					<div class="flex gap-4">
						<button
							on:click={() => editItem(item)}
							class="rounded-lg bg-gradient-to-r from-blue-600 via-sky-600 to-cyan-600 px-4 py-2 text-white transition-all hover:bg-gradient-to-l"
						>
							Edit
						</button>
						<button
							on:click={() => deleteItem(item.id)}
							class="rounded-lg bg-gradient-to-r from-red-600 via-rose-600 to-orange-600 px-4 py-2 text-white transition-all hover:bg-gradient-to-l"
						>
							Delete
						</button>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>
