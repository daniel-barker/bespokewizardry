<script>
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import MouseEffect from '$lib/components/MouseEffect.svelte';
	let { children } = $props();
</script>

<div class="min-h-screen bg-slate-900">
	<Navbar />
	<MouseEffect />
	<main class="pt-16">
		{@render children()}
	</main>

	<Footer />
</div>
