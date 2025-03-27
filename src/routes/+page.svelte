<div class="relative">
	<!-- Hero Section -->
	<section
		class="relative flex min-h-screen items-center justify-center overflow-hidden"
	>
		<div class="absolute inset-0 z-0 bg-gradient-to-b from-purple-900/20 to-slate-900/80"></div>
		<div class="absolute inset-0 bg-[url('/stars.svg')] opacity-20"></div>

		<div class="relative z-10 px-4 text-center">
			<h1 class="mystical-text mb-6 font-serif text-5xl md:text-7xl">Bespoke Wizardry</h1>
			<p class="mx-auto mb-8 max-w-2xl text-xl text-slate-300 md:text-2xl">
				A velvet-voiced guide through inner realms, offering pleasure-forward harm reduction and
				mystical integration.
			</p>
			<a
				href="/contact"
				class="inline-block rounded-full bg-purple-600 px-8 py-4 text-white transition-colors hover:bg-purple-700"
			>
				Begin Your Journey
			</a>
		</div>
	</section>

	<!-- Services Preview -->
	<section class="px-4 py-20">
		<div class="mx-auto max-w-7xl">
			<h2 class="mystical-text mb-16 text-center font-serif text-3xl md:text-4xl">
				Services of the Arcane
			</h2>

			<div class="grid gap-8 md:grid-cols-3">
				<div class="mystical-border p-6">
					<h3 class="mystical-text mb-4 font-serif text-xl">General Wizardry</h3>
					<p class="text-slate-300">
						Personalized mystical guidance and ritual crafting for your unique journey.
					</p>
				</div>

				<div class="mystical-border p-6">
					<h3 class="mystical-text mb-4 font-serif text-xl">Harm Reduction</h3>
					<p class="text-slate-300">
						Expert guidance in navigating altered states with grace and wisdom.
					</p>
				</div>

				<div class="mystical-border p-6">
					<h3 class="mystical-text mb-4 font-serif text-xl">Trip Sitting</h3>
					<p class="text-slate-300">
						Compassionate presence and support during your transformative experiences.
					</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Core Vibes -->
	<section class="bg-slate-900/50 px-4 py-20">
		<div class="mx-auto max-w-7xl">
			<h2 class="mystical-text mb-16 text-center font-serif text-3xl md:text-4xl">Core Vibes</h2>

			<div class="grid grid-cols-2 gap-4 md:grid-cols-4">
				{#each ['Enigmatic', 'Seductive', 'Otherworldly', 'Languid', 'Hypnotic', 'Sensual', 'Mystic', 'Ritualistic'] as vibe}
					<div class="mystical-border p-4 text-center">
						<span class="text-slate-300">{vibe}</span>
					</div>
				{/each}
			</div>
		</div>
	</section>
</div>
