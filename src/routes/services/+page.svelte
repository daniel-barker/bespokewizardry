<script>
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import ServiceCard from './ServiceCard.svelte';
	import { services } from './serviceData';

	let isEntering = false;

	onMount(() => {
		// Only show animation if we came from the portal transition
		if ($page.url.searchParams.get('transition') === 'true') {
			isEntering = true;
			setTimeout(() => {
				isEntering = false;
			}, 2000);
		}
	});
</script>

<div class="relative min-h-screen bg-black">
	<!-- Entrance Animation -->
	{#if isEntering}
		<div class="animate-entrance fixed inset-0 z-50">
			<div class="animate-entrance-overlay absolute inset-0"></div>
			<div class="animate-entrance-vortex absolute inset-0"></div>
			<div class="animate-entrance-energy absolute inset-0"></div>
			<img
				src="/bespoke.png"
				alt="Bespoke Wizardry"
				class="animate-entrance-logo absolute top-[55%] left-[52%] h-64 w-64 -translate-x-1/2 -translate-y-1/2 transform object-contain md:h-96 md:w-96"
			/>
		</div>
	{/if}

	<div class="px-4 py-20">
		<div class="mx-auto max-w-7xl">
			<h1
				class="mystical-text mb-16 text-center font-serif text-4xl md:text-5xl"
				class:animate-fade-in={isEntering}
			>
				Services of the Arcane
			</h1>

			<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
				{#each services as service}
					<div class:animate-slide-up={isEntering}>
						<ServiceCard {service} />
					</div>
				{/each}
			</div>
		</div>
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

	.animate-entrance {
		background: black;
		animation: entranceTransition 2s ease-in-out forwards;
	}

	.animate-entrance-overlay {
		background: radial-gradient(
			circle at center,
			rgba(168, 85, 247, 0.2) 0%,
			rgba(236, 72, 153, 0.2) 50%,
			transparent 70%
		);
		animation: entranceOverlay 2s ease-in-out forwards;
	}

	.animate-entrance-vortex {
		background: repeating-conic-gradient(
			from 0deg,
			transparent 0deg 10deg,
			rgba(168, 85, 247, 0.1) 10deg 20deg
		);
		animation: entranceVortex 2s ease-in-out forwards;
	}

	.animate-entrance-energy {
		background: radial-gradient(
			circle at center,
			rgba(168, 85, 247, 0.2) 0%,
			rgba(236, 72, 153, 0.2) 50%,
			transparent 70%
		);
		animation: entranceEnergy 2s ease-in-out forwards;
	}

	.animate-fade-in {
		animation: fadeIn 1s ease-out forwards;
		opacity: 0;
	}

	.animate-slide-up {
		animation: slideUp 0.8s ease-out forwards;
		opacity: 0;
		transform: translateY(20px);
	}

	@keyframes entranceTransition {
		0% {
			opacity: 1;
			transform: scale(1.2);
		}
		50% {
			opacity: 1;
			transform: scale(1);
		}
		100% {
			opacity: 0;
			transform: scale(0.8);
		}
	}

	@keyframes entranceOverlay {
		0% {
			opacity: 1;
			transform: scale(2);
		}
		50% {
			opacity: 1;
			transform: scale(1);
		}
		100% {
			opacity: 0;
			transform: scale(0.5);
		}
	}

	@keyframes entranceVortex {
		0% {
			transform: rotate(360deg) scale(2);
		}
		50% {
			transform: rotate(180deg) scale(1);
		}
		100% {
			transform: rotate(0deg) scale(0.5);
		}
	}

	@keyframes entranceEnergy {
		0% {
			opacity: 1;
			transform: scale(2);
		}
		50% {
			opacity: 1;
			transform: scale(1);
		}
		100% {
			opacity: 0;
			transform: scale(0.5);
		}
	}

	@keyframes fadeIn {
		to {
			opacity: 1;
		}
	}

	@keyframes slideUp {
		to {
			opacity: 1;
			transform: translateY(0);
		}
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

	.animate-entrance-logo {
		animation: entranceLogo 2s ease-in-out forwards;
		filter: hue-rotate(360deg) brightness(1.2);
	}

	@keyframes entranceLogo {
		0% {
			opacity: 1;
			transform: translate(-50%, -50%) scale(2.5) rotate(360deg);
			filter: hue-rotate(360deg) brightness(1.2);
		}
		25% {
			opacity: 1;
			transform: translate(-50%, -50%) scale(2.2) rotate(270deg);
			filter: hue-rotate(270deg) brightness(1.8);
		}
		75% {
			opacity: 1;
			transform: translate(-50%, -50%) scale(1.8) rotate(180deg);
			filter: hue-rotate(180deg) brightness(1.5);
		}
		100% {
			opacity: 0;
			transform: translate(-50%, -50%) scale(0.5) rotate(0deg);
			filter: hue-rotate(0deg) brightness(1.2);
		}
	}
</style>
