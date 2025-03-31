<script lang="ts">
	import { auth, db } from '$lib/firebase';
	import {
		signInWithEmailAndPassword,
		signOut,
		onAuthStateChanged,
		type User
	} from 'firebase/auth';
	import { collection, addDoc, updateDoc, deleteDoc, getDocs, doc } from 'firebase/firestore';
	import { onMount } from 'svelte';

	let email = '';
	let password = '';
	let user: User | null = null;
	let error: string | null = null;

	// Test collection interface
	interface TestItem {
		id?: string;
		title: string;
		description: string;
	}

	let items: TestItem[] = [];
	let currentItem: TestItem = { title: '', description: '' };
	let isEditing = false;

	onMount(() => {
		if (auth) {
			return onAuthStateChanged(auth, (currentUser) => {
				user = currentUser;
				if (currentUser) loadItems();
			});
		}
	});

	async function loadItems() {
		if (!db) return;
		try {
			const querySnapshot = await getDocs(collection(db, 'test-collection'));
			items = querySnapshot.docs.map((doc) => ({ id: doc.id, ...(doc.data() as TestItem) }));
		} catch (e) {
			error = e instanceof Error ? e.message : 'Error loading items';
		}
	}

	async function handleSubmit() {
		if (!db) return;
		try {
			error = null;
			if (isEditing && currentItem.id) {
				const docRef = doc(db, 'test-collection', currentItem.id);
				await updateDoc(docRef, { title: currentItem.title, description: currentItem.description });
			} else {
				await addDoc(collection(db, 'test-collection'), {
					title: currentItem.title,
					description: currentItem.description
				});
			}
			currentItem = { title: '', description: '' };
			isEditing = false;
			await loadItems();
		} catch (e) {
			error = e instanceof Error ? e.message : 'Error saving item';
		}
	}

	async function deleteItem(id: string) {
		if (!db) return;
		try {
			await deleteDoc(doc(db, 'test-collection', id));
			await loadItems();
		} catch (e) {
			error = e instanceof Error ? e.message : 'Error deleting item';
		}
	}

	function editItem(item: TestItem) {
		currentItem = { ...item };
		isEditing = true;
	}

	async function login() {
		if (!auth) return;
		try {
			error = null;
			await signInWithEmailAndPassword(auth, email, password);
		} catch (e) {
			error = e instanceof Error ? e.message : 'Login failed';
		}
	}

	async function logout() {
		if (!auth) return;
		try {
			await signOut(auth);
		} catch (e) {
			error = e instanceof Error ? e.message : 'Logout failed';
		}
	}
</script>

{#if user}
	<div class="p-4">
		<div class="mb-8 flex items-center justify-between">
			<h1 class="text-2xl font-bold">Admin Dashboard</h1>
			<button on:click={logout} class="rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600">
				Logout
			</button>
		</div>

		<div class="mb-8">
			<h2 class="mb-4 text-xl font-semibold">Test Collection Manager</h2>
			{#if error}
				<div class="mb-4 rounded border border-red-400 bg-red-100 px-4 py-3 text-red-700">
					{error}
				</div>
			{/if}

			<form on:submit|preventDefault={handleSubmit} class="mb-8 space-y-4">
				<div>
					<label class="block text-sm font-medium text-gray-700">Title</label>
					<input
						type="text"
						bind:value={currentItem.title}
						class="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
						required
					/>
				</div>
				<div>
					<label class="block text-sm font-medium text-gray-700">Description</label>
					<textarea
						bind:value={currentItem.description}
						class="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
						required
					/>
				</div>
				<button type="submit" class="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
					{isEditing ? 'Update' : 'Add'} Item
				</button>
			</form>

			<div class="space-y-4">
				{#each items as item}
					<div class="rounded border p-4">
						<h3 class="font-semibold">{item.title}</h3>
						<p class="text-gray-600">{item.description}</p>
						<div class="mt-2 space-x-2">
							<button on:click={() => editItem(item)} class="text-blue-500 hover:text-blue-700">
								Edit
							</button>
							<button on:click={() => deleteItem(item.id!)} class="text-red-500 hover:text-red-700">
								Delete
							</button>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
{:else}
	<div class="flex min-h-screen items-center justify-center">
		<div class="w-96 rounded-lg bg-white p-8 shadow-md">
			<h2 class="mb-6 text-center text-2xl font-bold">Admin Login</h2>

			{#if error}
				<div class="mb-4 rounded border border-red-400 bg-red-100 px-4 py-3 text-red-700">
					{error}
				</div>
			{/if}

			<form on:submit|preventDefault={login} class="space-y-4">
				<div>
					<label class="block text-sm font-medium text-gray-700">Email</label>
					<input
						type="email"
						bind:value={email}
						class="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
						required
					/>
				</div>
				<div>
					<label class="block text-sm font-medium text-gray-700">Password</label>
					<input
						type="password"
						bind:value={password}
						class="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
						required
					/>
				</div>
				<button
					type="submit"
					class="w-full rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
				>
					Login
				</button>
			</form>
		</div>
	</div>
{/if}
