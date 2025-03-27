<script>
	import '../app.css';
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';

	gsap.registerPlugin(ScrollTrigger);

	onMount(() => {
		// GSAP animations will go here
	});
</script>

<div class="min-h-screen bg-slate-900">
	<nav class="fixed w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-purple-500/20">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="flex items-center justify-between h-16">
				<div class="flex-shrink-0">
					<a href="/" class="text-2xl font-serif mystical-text">Bespoke Wizardry</a>
				</div>
				<div class="hidden md:block">
					<div class="ml-10 flex items-baseline space-x-8">
						<a href="/services" class="text-slate-300 hover:text-purple-400 transition-colors">Services</a>
						<a href="/about" class="text-slate-300 hover:text-purple-400 transition-colors">About</a>
						<a href="/contact" class="text-slate-300 hover:text-purple-400 transition-colors">Contact</a>
					</div>
				</div>
			</div>
		</div>
	</nav>

	<main class="pt-16">
		<slot />
	</main>

	<footer class="border-t border-purple-500/20 py-8">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<p class="text-center text-slate-400 text-sm">
				© {new Date().getFullYear()} Bespoke Wizardry. All rights reserved.
			</p>
		</div>
	</footer>
</div>
