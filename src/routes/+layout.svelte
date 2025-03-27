<script>
	import '../app.css';
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';

	let { children } = $props();
	gsap.registerPlugin(ScrollTrigger);

	onMount(() => {
		// GSAP animations will go here
	});
</script>

<div class="min-h-screen bg-slate-900">
	<nav class="fixed z-50 w-full border-b border-purple-500/20 bg-slate-900/80 backdrop-blur-md">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="flex h-16 items-center justify-between">
				<div class="flex-shrink-0">
					<a href="/" class="mystical-text font-serif text-2xl">Bespoke Wizardry</a>
				</div>
				<div class="hidden md:block">
					<div class="ml-10 flex items-baseline space-x-8">
						<a href="/services" class="text-slate-300 transition-colors hover:text-purple-400"
							>Services</a
						>
						<a href="/about" class="text-slate-300 transition-colors hover:text-purple-400">About</a
						>
						<a href="/contact" class="text-slate-300 transition-colors hover:text-purple-400"
							>Contact</a
						>
					</div>
				</div>
			</div>
		</div>
	</nav>

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
