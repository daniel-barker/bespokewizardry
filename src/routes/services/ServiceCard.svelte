<script lang="ts">
	import { fade, scale } from 'svelte/transition';
	import type { ServiceDetails } from './serviceData';

	export let service: ServiceDetails;
	let isModalOpen = false;

	function openModal() {
		isModalOpen = true;
		document.body.style.overflow = 'hidden';
	}

	function closeModal() {
		isModalOpen = false;
		document.body.style.overflow = 'auto';
	}

	// Handle escape key
	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape') closeModal();
	}
</script>

<svelte:window on:keydown={handleKeydown} />

<!-- Preview Card -->
<div
	class="mystical-border group relative overflow-hidden p-8 transition-all duration-500 hover:scale-[1.02]"
	style="backdrop-filter: blur(8px);"
>
	{#if service.cardImages && service.cardImages.length > 0}
		<div class="absolute inset-0 overflow-hidden">
			<img
				src={service.cardImages[0].url}
				alt={service.cardImages[0].alt}
				class="h-full w-full object-cover opacity-20 transition-transform duration-1000 group-hover:scale-110"
			/>
		</div>
	{/if}

	<div class="relative z-10">
		<h2 class="mystical-text mb-6 font-serif text-2xl">{service.title}</h2>
		<p class="mb-6 text-slate-300">{service.shortDescription}</p>

		{#if service.tags}
			<div class="mb-6 flex flex-wrap gap-2">
				{#each service.tags as tag}
					<span
						class="rounded-full bg-purple-600/20 px-3 py-1 text-sm text-purple-200"
						style="backdrop-filter: blur(4px);">{tag}</span
					>
				{/each}
			</div>
		{/if}

		<div
			role="button"
			tabindex="0"
			on:click={openModal}
			on:keydown={(e) => e.key === 'Enter' && openModal()}
			aria-label="Service details"
			class="group relative inline-block overflow-hidden rounded-full bg-purple-600/30 px-6 py-3 text-white transition-all duration-500 hover:bg-purple-600/50"
			style="backdrop-filter: blur(4px);"
		>
			<span class="relative z-10">Learn More</span>
			<div class="animate-button-glow absolute inset-0"></div>
		</div>
	</div>
</div>

<!-- Modal -->
{#if isModalOpen}
	<div
		role="dialog"
		aria-modal="true"
		class="fixed inset-0 z-50 flex items-center justify-center p-4"
		transition:fade={{ duration: 200 }}
		on:click|self={closeModal}
		on:keydown={handleKeydown}
	>
		<!-- Backdrop -->
		<div class="absolute inset-0 bg-black/80" style="backdrop-filter: blur(8px);"></div>

		<!-- Modal Content -->
		<div
			class="mystical-modal relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-lg bg-black/80 p-8 text-white"
			transition:scale={{ duration: 300, start: 0.95 }}
		>
			<!-- Close Button -->
			<button
				type="button"
				aria-label="Close service details"
				class="absolute top-4 right-4 text-slate-400 transition-colors hover:text-white"
				on:click={closeModal}
			>
				<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M6 18L18 6M6 6l12 12"
					/>
				</svg>
			</button>

			<!-- Header -->
			<h2 class="mystical-text mb-8 font-serif text-4xl">{service.title}</h2>

			<!-- Image Gallery -->
			{#if service.modalImages && service.modalImages.length > 0}
				<div class="mb-8 grid gap-4 md:grid-cols-2">
					{#each service.modalImages as image}
						<div class="mystical-border overflow-hidden rounded-lg">
							<img
								src={image.url}
								alt={image.alt}
								class="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
							/>
							{#if image.caption}
								<p class="p-2 text-center text-sm text-slate-300">{image.caption}</p>
							{/if}
						</div>
					{/each}
				</div>
			{/if}

			<!-- Description -->
			<p class="mb-8 text-lg leading-relaxed text-slate-300">{service.fullDescription}</p>

			<!-- Benefits -->
			{#if service.benefits && service.benefits.length > 0}
				<div class="mb-8">
					<h3 class="mystical-text mb-4 text-2xl">Benefits</h3>
					<div class="grid gap-4 md:grid-cols-2">
						{#each service.benefits as benefit}
							<div class="mystical-border p-4">
								<div class="mb-2 flex items-center">
									{#if benefit.icon}
										<span class="mr-2 text-2xl">{benefit.icon}</span>
									{/if}
									<h4 class="text-lg font-semibold">{benefit.title}</h4>
								</div>
								<p class="text-slate-300">{benefit.description}</p>
							</div>
						{/each}
					</div>
				</div>
			{/if}

			<!-- What's Included -->
			{#if service.includes && service.includes.length > 0}
				<div class="mb-8">
					<h3 class="mystical-text mb-4 text-2xl">What's Included</h3>
					<ul class="grid gap-2 md:grid-cols-2">
						{#each service.includes as item}
							<li class="flex items-center text-slate-300">
								<span class="mr-2 text-purple-400">✦</span>
								{item}
							</li>
						{/each}
					</ul>
				</div>
			{/if}

			<!-- Prerequisites -->
			{#if service.prerequisites && service.prerequisites.length > 0}
				<div class="mb-8">
					<h3 class="mystical-text mb-4 text-2xl">Prerequisites</h3>
					<ul class="space-y-2">
						{#each service.prerequisites as prereq}
							<li class="flex items-center text-slate-300">
								<span class="mr-2 text-purple-400">•</span>
								{prereq}
							</li>
						{/each}
					</ul>
				</div>
			{/if}

			<!-- Pricing -->
			{#if service.pricing && service.pricing.length > 0}
				<div class="mb-8">
					<h3 class="mystical-text mb-4 text-2xl">Investment</h3>
					<div class="grid gap-4 md:grid-cols-2">
						{#each service.pricing as price}
							<div class="mystical-border p-4">
								<div class="mb-2 text-2xl font-bold">
									{price.currency}
									{price.amount}
								</div>
								{#if price.duration}
									<div class="mb-1 text-slate-400">{price.duration}</div>
								{/if}
								{#if price.description}
									<div class="text-slate-300">{price.description}</div>
								{/if}
							</div>
						{/each}
					</div>
				</div>
			{/if}

			<!-- Mystical Properties -->
			{#if service.energeticProperties || service.moonPhaseRecommendations || service.elementalAffinity}
				<div class="mb-8">
					<h3 class="mystical-text mb-4 text-2xl">Mystical Properties</h3>
					<div class="grid gap-6 md:grid-cols-3">
						{#if service.energeticProperties}
							<div>
								<h4 class="mb-2 font-semibold text-purple-300">Energetic Properties</h4>
								<ul class="space-y-1 text-slate-300">
									{#each service.energeticProperties as prop}
										<li>{prop}</li>
									{/each}
								</ul>
							</div>
						{/if}
						{#if service.moonPhaseRecommendations}
							<div>
								<h4 class="mb-2 font-semibold text-purple-300">Moon Phases</h4>
								<ul class="space-y-1 text-slate-300">
									{#each service.moonPhaseRecommendations as phase}
										<li>{phase}</li>
									{/each}
								</ul>
							</div>
						{/if}
						{#if service.elementalAffinity}
							<div>
								<h4 class="mb-2 font-semibold text-purple-300">Elemental Affinity</h4>
								<ul class="space-y-1 text-slate-300">
									{#each service.elementalAffinity as element}
										<li>{element}</li>
									{/each}
								</ul>
							</div>
						{/if}
					</div>
				</div>
			{/if}

			<!-- Call to Action -->
			<div class="mt-12 text-center">
				<a
					href={service.ctaLink || '/contact'}
					class="group relative inline-block overflow-hidden rounded-full bg-purple-600 px-8 py-4 text-lg font-medium text-white transition-all duration-500 hover:bg-purple-700"
				>
					<span class="relative z-10">{service.ctaText || 'Book a Session'}</span>
					<div class="animate-button-glow absolute inset-0"></div>
				</a>
			</div>
		</div>
	</div>
{/if}

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
		background: rgba(0, 0, 0, 0.2);
		transition: all 0.5s ease;
	}

	.mystical-border:hover {
		border-color: rgb(168 85 247 / 0.4);
		box-shadow: 0 0 20px rgba(168, 85, 247, 0.2);
	}

	.mystical-modal {
		background: linear-gradient(
			135deg,
			rgba(0, 0, 0, 0.9),
			rgba(168, 85, 247, 0.1),
			rgba(0, 0, 0, 0.9)
		);
		box-shadow: 0 0 40px rgba(168, 85, 247, 0.2);
	}

	.animate-button-glow {
		background: linear-gradient(
			45deg,
			rgba(168, 85, 247, 0.4),
			rgba(236, 72, 153, 0.4),
			rgba(59, 130, 246, 0.4)
		);
		background-size: 200% 200%;
		animation: gradientFlow 4s ease infinite;
		opacity: 0;
		transition: opacity 0.3s ease;
	}

	.group:hover .animate-button-glow {
		opacity: 1;
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
