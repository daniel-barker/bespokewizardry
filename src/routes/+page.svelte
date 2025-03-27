<script>
	import { onMount } from 'svelte';
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	import { goto } from '$app/navigation';

	let hue = tweened(0, {
		duration: 5000,
		easing: cubicOut
	});

	let isTransitioning = false;
	let isContentFading = false;
	let isContentHidden = false;

	onMount(() => {
		const animate = () => {
			hue.set(Math.random() * 360);
			setTimeout(animate, 5000);
		};
		animate();
	});

	async function handlePortalClick(e) {
		e.preventDefault();
		isContentFading = true;
		await new Promise((resolve) => setTimeout(resolve, 800));
		isContentHidden = true;
		isTransitioning = true;
		await new Promise((resolve) => setTimeout(resolve, 1000));
		goto('/services?transition=true', { replaceState: true });
	}
</script>

<div class="relative min-h-screen bg-black">
	<!-- Psychedelic Background Elements -->
	<div class="fixed inset-0 overflow-hidden">
		<div
			class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.1),transparent_50%)]"
		></div>
		<div class="absolute inset-0 bg-[url('/stars.svg')] opacity-30"></div>
		<div class="morphing-shapes"></div>
	</div>

	<!-- Transition Overlay -->
	{#if isTransitioning}
		<div class="animate-portal-transition fixed inset-0 z-50">
			<div class="animate-portal-overlay absolute inset-0"></div>
			<div class="animate-portal-vortex absolute inset-0"></div>
			<div class="animate-portal-energy absolute inset-0"></div>
		</div>
	{/if}

	<!-- Content Container -->
	<div
		class="relative z-10 transition-all duration-800"
		class:opacity-0={isContentFading}
		class:pointer-events-none={isContentFading}
		class:hidden={isContentHidden}
	>
		<!-- Hero Section -->
		<section class="relative flex min-h-screen items-center justify-center overflow-hidden">
			<div class="relative z-10 px-4 text-center">
				<h1 class="mystical-text animate-title mb-8 font-serif text-6xl md:text-8xl">
					Bespoke Wizardry
				</h1>
				<p class="animate-description mx-auto mb-12 max-w-2xl text-xl text-slate-300 md:text-2xl">
					A velvet-voiced guide through inner realms, offering pleasure-forward harm reduction and
					mystical integration.
				</p>
				<a
					href="/services"
					on:click={handlePortalClick}
					class="group relative inline-block overflow-hidden px-12 py-6 text-white transition-all duration-500 hover:scale-105"
				>
					<span class="relative z-10 text-lg font-medium tracking-wider">Begin Your Journey</span>
					<div class="animate-portal-distortion absolute inset-0"></div>
					<div class="animate-portal-geometry absolute inset-0"></div>
					<div class="animate-portal-energy absolute inset-0"></div>
				</a>
			</div>
		</section>

		<!-- Services Preview -->
		<section class="relative px-4 py-20">
			<div class="mx-auto max-w-7xl">
				<h2 class="mystical-text mb-16 text-center font-serif text-4xl md:text-5xl">
					Services of the Arcane
				</h2>

				<div class="grid gap-8 md:grid-cols-3">
					{#each [{ title: 'General Wizardry', desc: 'Personalized mystical guidance and ritual crafting for your unique journey.' }, { title: 'Harm Reduction', desc: 'Expert guidance in navigating altered states with grace and wisdom.' }, { title: 'Trip Sitting', desc: 'Compassionate presence and support during your transformative experiences.' }] as service}
						<div class="mystical-border group p-6 transition-all duration-500 hover:scale-105">
							<h3 class="mystical-text mb-4 font-serif text-xl">{service.title}</h3>
							<p class="text-slate-300">{service.desc}</p>
						</div>
					{/each}
				</div>
			</div>
		</section>

		<!-- Core Vibes -->
		<section class="relative bg-slate-900/30 px-4 py-20 backdrop-blur-sm">
			<div class="mx-auto max-w-7xl">
				<h2 class="mystical-text mb-16 text-center font-serif text-4xl md:text-5xl">Core Vibes</h2>

				<div class="grid grid-cols-2 gap-4 md:grid-cols-4">
					{#each ['Enigmatic', 'Seductive', 'Otherworldly', 'Languid', 'Hypnotic', 'Sensual', 'Mystic', 'Ritualistic'] as vibe}
						<div
							class="mystical-border group p-4 text-center transition-all duration-500 hover:scale-105"
						>
							<span class="text-slate-300">{vibe}</span>
						</div>
					{/each}
				</div>
			</div>
		</section>
	</div>
</div>

<style>
	.mystical-text {
		background: linear-gradient(
			45deg,
			rgb(253 230 138),
			rgb(168 85 247),
			rgb(236 72 153),
			rgb(59 130 246)
		);
		background-size: 300% 300%;
		-webkit-background-clip: text;
		background-clip: text;
		color: transparent;
		animation: gradientFlow 8s ease infinite;
	}

	.animate-title {
		text-shadow: 0 0 20px rgba(168, 85, 247, 0.5);
		animation: glowPulse 4s ease-in-out infinite;
	}

	.animate-description {
		text-shadow: 0 0 10px rgba(168, 85, 247, 0.3);
		animation: morphText 8s ease-in-out infinite;
	}

	.animate-button-gradient {
		background: linear-gradient(
			45deg,
			rgb(168 85 247),
			rgb(236 72 153),
			rgb(59 130 246),
			rgb(168 85 247)
		);
		background-size: 300% 300%;
		animation: gradientFlow 4s ease infinite;
		opacity: 0.8;
	}

	.animate-portal-ring {
		border: 2px solid rgba(168, 85, 247, 0.3);
		border-radius: 0.5rem;
		animation: portalRing 3s ease-in-out infinite;
	}

	.animate-portal-glow {
		background: radial-gradient(circle at center, rgba(168, 85, 247, 0.2) 0%, transparent 70%);
		animation: portalGlow 4s ease-in-out infinite;
	}

	.mystical-border {
		border: 1px solid rgb(168 85 247 / 0.2);
		border-radius: 0.5rem;
		backdrop-filter: blur(4px);
		background: rgba(0, 0, 0, 0.2);
		transition: all 0.5s ease;
	}

	.mystical-border:hover {
		border-color: rgb(168 85 247 / 0.4);
		box-shadow: 0 0 20px rgba(168, 85, 247, 0.2);
	}

	.morphing-shapes {
		position: absolute;
		inset: 0;
		background:
			radial-gradient(circle at 20% 20%, rgba(168, 85, 247, 0.1) 0%, transparent 50%),
			radial-gradient(circle at 80% 80%, rgba(236, 72, 153, 0.1) 0%, transparent 50%),
			radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%);
		animation: morphBackground 20s ease-in-out infinite;
	}

	@keyframes gradientFlow {
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

	@keyframes glowPulse {
		0%,
		100% {
			text-shadow: 0 0 20px rgba(168, 85, 247, 0.5);
		}
		50% {
			text-shadow: 0 0 30px rgba(168, 85, 247, 0.8);
		}
	}

	@keyframes morphText {
		0%,
		100% {
			transform: scale(1);
		}
		50% {
			transform: scale(1.02);
		}
	}

	@keyframes morphBackground {
		0%,
		100% {
			background-position:
				0% 0%,
				100% 100%,
				50% 50%;
		}
		50% {
			background-position:
				100% 100%,
				0% 0%,
				50% 50%;
		}
	}

	@keyframes portalRing {
		0%,
		100% {
			transform: scale(1);
			opacity: 0.3;
		}
		50% {
			transform: scale(1.05);
			opacity: 0.5;
		}
	}

	@keyframes portalGlow {
		0%,
		100% {
			opacity: 0.2;
			transform: scale(1);
		}
		50% {
			opacity: 0.4;
			transform: scale(1.1);
		}
	}

	.animate-portal-distortion {
		background: linear-gradient(
			45deg,
			rgba(168, 85, 247, 0.1),
			rgba(236, 72, 153, 0.1),
			rgba(59, 130, 246, 0.1)
		);
		clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
		animation: portalDistortion 8s ease-in-out infinite;
	}

	.animate-portal-geometry {
		background: repeating-linear-gradient(
			45deg,
			transparent,
			transparent 10px,
			rgba(168, 85, 247, 0.1) 10px,
			rgba(168, 85, 247, 0.1) 20px
		);
		animation: portalGeometry 4s linear infinite;
	}

	.animate-portal-energy {
		background: radial-gradient(
			circle at center,
			rgba(168, 85, 247, 0.2) 0%,
			rgba(236, 72, 153, 0.2) 50%,
			transparent 70%
		);
		animation: portalEnergy 2s ease-in-out forwards;
		opacity: 0;
	}

	@keyframes portalDistortion {
		0%,
		100% {
			clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
		}
		25% {
			clip-path: polygon(5% 5%, 95% 0, 100% 95%, 0 100%);
		}
		50% {
			clip-path: polygon(0 5%, 100% 5%, 95% 100%, 5% 95%);
		}
		75% {
			clip-path: polygon(5% 0, 100% 5%, 95% 95%, 0 100%);
		}
	}

	@keyframes portalGeometry {
		0% {
			background-position: 0 0;
		}
		100% {
			background-position: 40px 40px;
		}
	}

	.animate-portal-transition {
		background: black;
		animation: portalTransition 2s ease-in-out forwards;
		opacity: 0;
	}

	.animate-portal-overlay {
		background: radial-gradient(
			circle at center,
			rgba(168, 85, 247, 0.2) 0%,
			rgba(236, 72, 153, 0.2) 50%,
			transparent 70%
		);
		animation: portalOverlay 2s ease-in-out forwards;
		opacity: 0;
	}

	.animate-portal-vortex {
		background: repeating-conic-gradient(
			from 0deg,
			transparent 0deg 10deg,
			rgba(168, 85, 247, 0.1) 10deg 20deg
		);
		animation: portalVortex 2s ease-in-out forwards;
		opacity: 0;
	}

	@keyframes portalTransition {
		0% {
			opacity: 0;
			transform: scale(0.8);
		}
		50% {
			opacity: 1;
			transform: scale(1);
		}
		100% {
			opacity: 1;
			transform: scale(1.2);
		}
	}

	@keyframes portalOverlay {
		0% {
			opacity: 0;
			transform: scale(0.5);
		}
		50% {
			opacity: 1;
			transform: scale(1);
		}
		100% {
			opacity: 1;
			transform: scale(2);
		}
	}

	@keyframes portalVortex {
		0% {
			transform: rotate(0deg) scale(0.5);
		}
		50% {
			transform: rotate(180deg) scale(1);
		}
		100% {
			transform: rotate(360deg) scale(2);
		}
	}
</style>
