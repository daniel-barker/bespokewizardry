<script lang="ts">
	import { db } from '$lib/firebase';
	import { collection, query, orderBy, onSnapshot, type Unsubscribe } from 'firebase/firestore';
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
</script>

<div class="min-h-screen bg-gradient-to-b from-purple-900 via-indigo-900 to-black p-8">
	<div class="mx-auto max-w-4xl">
		<h1
			class="mb-12 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-center text-5xl font-bold text-transparent"
		>
			✨ Magical Wishlist ✨
		</h1>

		<div class="grid gap-6">
			{#each items as item}
				<div
					class="rounded-xl border border-purple-500/30 bg-white/10 p-6 backdrop-blur-lg transition-all duration-300 hover:border-purple-500/50"
				>
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
							class="inline-flex items-center text-indigo-300 transition-colors hover:text-indigo-200"
						>
							<span class="mr-2">🔗</span> View Item
						</a>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</div>
