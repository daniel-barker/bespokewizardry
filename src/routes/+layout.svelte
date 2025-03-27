<script>
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';

	let { children } = $props();
</script>

<div class="min-h-screen bg-slate-900">
	<Navbar />

	<main class="pt-16">
		{@render children()}
	</main>

	<footer class="border-t border-purple-500/20 py-8">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<p class="text-center text-sm text-slate-400">
				© {new Date().getFullYear()} Bespoke Wizardry. All rights reserved.
			</p>
		</div>
	</footer>
</div>
