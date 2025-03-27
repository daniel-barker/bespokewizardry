<script>
	import { onMount } from 'svelte';

	let isHovered = false;

	onMount(() => {
		const nav = document.querySelector('nav');
		if (nav) {
			nav.addEventListener('mousemove', (e) => {
				const rect = nav.getBoundingClientRect();
				const x = e.clientX - rect.left;
				const y = e.clientY - rect.top;
				nav.style.setProperty('--mouse-x', `${x}px`);
				nav.style.setProperty('--mouse-y', `${y}px`);
			});
		}
	});
</script>

<nav
	class="fixed z-50 w-full overflow-hidden border-b border-purple-500/20 bg-slate-900/80 backdrop-blur-md"
	style="--mouse-x: 0px; --mouse-y: 0px;"
>
	<div
		class="animate-gradient-x absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-purple-500/10"
	></div>
	<div
		class="absolute inset-0 bg-[radial-gradient(circle_at_var(--mouse-x)_var(--mouse-y),rgba(168,85,247,0.15),transparent_40%)]"
	></div>

	<div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="flex h-16 items-center justify-between">
			<div class="flex-shrink-0">
				<a
					href="/"
					class="group relative font-serif text-2xl"
					on:mouseenter={() => (isHovered = true)}
					on:mouseleave={() => (isHovered = false)}
				>
					<span class="relative z-10">
						<span class="text-[#e6d5a7]">Bespoke</span>
						<span class="text-[#a855f7]">Wizardry</span>
					</span>
					<span
						class="absolute inset-0 bg-gradient-to-r from-[#e6d5a7]/20 to-purple-500/20 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100"
					></span>
				</a>
			</div>
			<div class="hidden md:block">
				<div class="ml-10 flex items-baseline space-x-8">
					{#each ['Services', 'About', 'Contact'] as item}
						<a
							href="/{item.toLowerCase()}"
							class="group relative text-slate-300 transition-all duration-300 hover:text-purple-400"
						>
							<span class="relative z-10">{item}</span>
							<span
								class="absolute -inset-1 rounded-full bg-purple-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
							></span>
							<span
								class="absolute -inset-1 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 blur transition-opacity duration-300 group-hover:opacity-100"
							></span>
						</a>
					{/each}
				</div>
			</div>
		</div>
	</div>
</nav>

<style>
	@keyframes gradient-x {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}

	.animate-gradient-x {
		animation: gradient-x 15s ease infinite;
		background-size: 200% 200%;
	}

	.mystical-text {
		position: relative;
		color: transparent;
		background: linear-gradient(45deg, #a855f7, #ec4899, #a855f7);
		background-size: 200% auto;
		-webkit-background-clip: text;
		background-clip: text;
		text-shadow: 0 0 2px rgba(168, 85, 247, 0.3);
		animation: gradient-x 3s ease infinite;
	}

	.mystical-text::after {
		content: attr(data-text);
		position: absolute;
		left: 0;
		top: 0;
		z-index: -1;
		color: #a855f7;
		filter: blur(12px);
		opacity: 0.7;
	}
</style>
