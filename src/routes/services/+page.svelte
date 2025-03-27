<script>
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

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

			<div class="space-y-12">
				<!-- General Wizardry -->
				<div class="mystical-border p-8" class:animate-slide-up={isEntering}>
					<h2 class="mystical-text mb-6 font-serif text-2xl">General Wizardry</h2>
					<div class="grid gap-8 md:grid-cols-2">
						<div>
							<p class="mb-4 text-slate-300">
								Personalized mystical guidance and ritual crafting for your unique journey. Each
								session is tailored to your specific needs and desires.
							</p>
							<ul class="space-y-2 text-slate-300">
								<li>• Custom ritual design</li>
								<li>• Spiritual guidance</li>
								<li>• Energy work</li>
								<li>• Sacred space creation</li>
							</ul>
						</div>
						<div class="flex items-center justify-center">
							<a
								href="/contact"
								class="inline-block rounded-full bg-purple-600 px-6 py-3 text-white transition-colors hover:bg-purple-700"
							>
								Book a Session
							</a>
						</div>
					</div>
				</div>

				<!-- Harm Reduction -->
				<div
					class="mystical-border p-8"
					class:animate-slide-up={isEntering}
					style="animation-delay: 200ms"
				>
					<h2 class="mystical-text mb-6 font-serif text-2xl">Harm Reduction</h2>
					<div class="grid gap-8 md:grid-cols-2">
						<div>
							<p class="mb-4 text-slate-300">
								Expert guidance in navigating altered states with grace and wisdom. Safety and
								well-being are our top priorities.
							</p>
							<ul class="space-y-2 text-slate-300">
								<li>• Substance education</li>
								<li>• Integration support</li>
								<li>• Risk assessment</li>
								<li>• Safety protocols</li>
							</ul>
						</div>
						<div class="flex items-center justify-center">
							<a
								href="/contact"
								class="inline-block rounded-full bg-purple-600 px-6 py-3 text-white transition-colors hover:bg-purple-700"
							>
								Learn More
							</a>
						</div>
					</div>
				</div>

				<!-- Trip Sitting -->
				<div
					class="mystical-border p-8"
					class:animate-slide-up={isEntering}
					style="animation-delay: 400ms"
				>
					<h2 class="mystical-text mb-6 font-serif text-2xl">Trip Sitting</h2>
					<div class="grid gap-8 md:grid-cols-2">
						<div>
							<p class="mb-4 text-slate-300">
								Compassionate presence and support during your transformative experiences. We create
								a safe, nurturing environment for your journey.
							</p>
							<ul class="space-y-2 text-slate-300">
								<li>• 24/7 support</li>
								<li>• Safe space creation</li>
								<li>• Emergency protocols</li>
								<li>• Integration guidance</li>
							</ul>
						</div>
						<div class="flex items-center justify-center">
							<a
								href="/contact"
								class="inline-block rounded-full bg-purple-600 px-6 py-3 text-white transition-colors hover:bg-purple-700"
							>
								Book a Sitter
							</a>
						</div>
					</div>
				</div>
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
</style>
