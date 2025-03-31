<script>
	import { onMount } from 'svelte';

	let buttons = [
		{ text: 'Wishlist', href: '/wishlist' },
		{ text: 'Newsletter', href: '/newsletter' },
		{ text: 'Effects Wiki', href: '/wiki' },
		{ text: 'Videos', href: '/videos' },
		{ text: 'Blog', href: '/blog' },
		{ text: 'Contact', href: '/contact' }
	];

	let particles = Array.from({ length: 20 }, (_, i) => ({
		id: i,
		size: Math.random() * 3 + 1,
		speed: Math.random() * 2 + 1,
		delay: Math.random() * 5,
		x: Math.random() * 100,
		y: Math.random() * 100
	}));

	let flares = Array.from({ length: 7 }, (_, i) => ({
		id: i,
		x: Math.random() * 100,
		y: Math.random() * 100,
		size: i >= 5 ? 64 : i >= 3 ? 80 : 96, // Varied sizes for different flares
		color: [
			'linear-gradient(45deg, rgb(147, 51, 234, 0.3), rgb(236, 72, 153, 0.3))', // Purple to Pink
			'linear-gradient(45deg, rgb(239, 68, 68, 0.3), rgb(147, 51, 234, 0.3))', // Red to Purple
			'linear-gradient(45deg, rgb(236, 72, 153, 0.3), rgb(147, 51, 234, 0.3))', // Pink to Purple
			'linear-gradient(45deg, rgb(124, 58, 237, 0.3), rgb(236, 72, 153, 0.3))', // Violet to Pink
			'linear-gradient(45deg, rgb(219, 39, 119, 0.3), rgb(124, 58, 237, 0.3))', // Deep Pink to Violet
			'linear-gradient(45deg, rgb(167, 139, 250, 0.3), rgb(236, 72, 153, 0.3))', // Light Purple to Pink
			'linear-gradient(45deg, rgb(244, 114, 182, 0.3), rgb(147, 51, 234, 0.3))' // Hot Pink to Purple
		][i]
	}));

	function updateFlarePositions() {
		flares = flares.map((flare) => ({
			...flare,
			x: Math.random() * 120 - 10, // Allow slight overflow
			y: Math.random() * 120 - 10
		}));
	}

	onMount(() => {
		const interval = setInterval(updateFlarePositions, 3000);
		return () => clearInterval(interval);
	});
</script>

<div class="relative min-h-screen overflow-hidden bg-black p-8 text-white">
	<!-- Mystical Pattern Background -->
	<div class="absolute inset-0 opacity-10">
		<svg class="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
			<defs>
				<pattern
					id="mystical-large"
					x="0"
					y="0"
					width="40"
					height="40"
					patternUnits="userSpaceOnUse"
					patternTransform="rotate(15)"
				>
					<circle cx="20" cy="20" r="0.8" fill="currentColor" class="text-purple-500" />
					<circle cx="10" cy="30" r="1.2" fill="currentColor" class="text-pink-500" />
					<circle cx="30" cy="10" r="0.6" fill="currentColor" class="text-red-500" />
				</pattern>
				<pattern
					id="mystical-medium"
					x="0"
					y="0"
					width="25"
					height="25"
					patternUnits="userSpaceOnUse"
					patternTransform="rotate(-10)"
				>
					<circle cx="12.5" cy="12.5" r="0.5" fill="currentColor" class="text-purple-400" />
					<circle cx="6" cy="18" r="0.7" fill="currentColor" class="text-pink-400" />
					<circle cx="18" cy="6" r="0.4" fill="currentColor" class="text-red-400" />
				</pattern>
				<pattern
					id="mystical-small"
					x="0"
					y="0"
					width="15"
					height="15"
					patternUnits="userSpaceOnUse"
					patternTransform="rotate(30)"
				>
					<circle cx="7.5" cy="7.5" r="0.3" fill="currentColor" class="text-purple-300" />
					<circle cx="3" cy="11" r="0.4" fill="currentColor" class="text-pink-300" />
					<circle cx="11" cy="3" r="0.2" fill="currentColor" class="text-red-300" />
				</pattern>
			</defs>
			<rect width="100" height="100" fill="url(#mystical-large)" />
			<rect width="100" height="100" fill="url(#mystical-medium)" />
			<rect width="100" height="100" fill="url(#mystical-small)" />
		</svg>
	</div>

	<!-- Floating Particles -->
	{#each particles as particle}
		<div
			class="animate-float absolute h-1 w-1 rounded-full bg-white"
			style="
				left: {particle.x}%;
				top: {particle.y}%;
				animation-delay: {particle.delay}s;
				animation-duration: {particle.speed}s;
				opacity: {particle.size * 0.3};
				transform-origin: {Math.random() * 100}% {Math.random() * 100}%;
			"
		/>
	{/each}

	<!-- Enhanced Lens Flares -->
	<div class="pointer-events-none absolute inset-0">
		{#each flares as flare, i}
			<div
				class="absolute h-{flare.size} w-{flare.size} rounded-full mix-blend-screen blur-3xl transition-all duration-[3000ms] ease-in-out"
				style="
					left: {flare.x}%;
					top: {flare.y}%;
					background: {flare.color};
					animation: pulse 4s ease-in-out infinite;
					animation-delay: {i * 0.7}s;
				"
			/>
		{/each}
	</div>

	<!-- Content -->
	<div class="relative z-10 mx-auto max-w-4xl space-y-8">
		<h1
			class="animate-gradient bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-center text-6xl font-bold text-transparent"
		>
			Bespoke Wizardry
		</h1>

		<div class="prose prose-invert max-w-none space-y-6">
			<p class="text-xl italic">"Ok… you're a wizard…"</p>
			<p class="text-xl">Indeed, I am a Wizard.</p>

			<p class="text-xl italic">"Do you believe in magic?"</p>
			<p class="text-xl">Sure, why not?</p>

			<p class="text-lg leading-relaxed">
				I didn't say it first, or best, but the difference between science and magic is largely
				understanding. If you do a thing and it works, and you know why—it's science. If you do a
				thing and it (mostly) works, and you don't know why—that's magic.
			</p>

			<p class="text-sm italic">
				Footnote: Of course, if you do a thing and it doesn't work and you don't know why… you might
				have been raised to practice a major organized religion. Call me—I can help.
			</p>

			<p class="text-lg leading-relaxed">
				The world was full of magic once, and that was good, because the other option was no magic.
				We have slowly ironed out and nailed down our magic into science, and that's also good,
				because it makes magic available to everyone. (You probably don't know how your magical
				iPhone works… I don't.)
			</p>

			<p class="text-lg leading-relaxed">
				If you were born before everyone had a cell phone, you probably understand that it's
				actually a crystal ball.
			</p>

			<p class="text-lg leading-relaxed">
				We may cycle around to a magical world again, but for now, we have very little magic left.
				Psilocybin, ayahuasca, and the numerous cacti are where it grows. We can use these tools and
				mostly achieve our goals with them, but we don't understand why—that can only be magic.
			</p>

			<p class="text-lg leading-relaxed">
				My personal experiences have left me with the certainty that there are things of great
				significance left to be discovered, much less understood—and that fills me with joy. I clap
				my hands for Tinkerbell, and I will not be the scientist who pins the last fairy to a board.
			</p>

			<p class="text-lg leading-relaxed">
				It logically follows that if I am a skilled practitioner of these not-understood magics,
				then I must be a wizard of some sort. I have a robe and hat. (Can we insert a picture, or a
				link to a picture?) I have a cauldron, wand, staff, and dagger. My familiar is a cat named
				Wizard. So yeah, it's my company and my job title—so I'm a wizard. Certified.
			</p>

			<p class="text-xl italic">"Ok, then what's General Wizardry?"</p>
			<p class="text-xl">It's magic. Definitively vague and mysterious.</p>
			<p class="text-xl">
				I don't know what you need. Many people with a lingering problem don't know what they need
				either.
			</p>
			<p class="text-xl">Be brave; give me a call.</p>
			<p class="text-lg">
				I am open and accepting of whatever spiritual practice you have if it makes you happy, and I
				do not discuss any of my own unless requested.
			</p>
		</div>

		<div class="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
			{#each buttons as button}
				<a
					href={button.href}
					class="group relative overflow-hidden rounded-lg px-8 py-4 text-center text-xl font-bold transition-all duration-300 hover:scale-105"
				>
					<div
						class="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 opacity-80 transition-opacity duration-300 group-hover:opacity-100"
					></div>
					<div
						class="absolute inset-0 bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 opacity-0 transition-opacity duration-300 group-hover:opacity-80"
					></div>
					<span class="relative z-10">{button.text}</span>
				</a>
			{/each}
		</div>
	</div>
</div>

<style>
	@keyframes gradient {
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

	@keyframes float {
		0% {
			transform: translate(0, 0) rotate(0deg) scale(1);
			opacity: 0.3;
		}
		50% {
			transform: translate(20px, 20px) rotate(180deg) scale(1.2);
			opacity: 0.6;
		}
		100% {
			transform: translate(0, 0) rotate(360deg) scale(1);
			opacity: 0.3;
		}
	}

	@keyframes pulse {
		0% {
			opacity: 0.1;
			transform: scale(1);
		}
		50% {
			opacity: 0.3;
			transform: scale(1.1);
		}
		100% {
			opacity: 0.1;
			transform: scale(1);
		}
	}

	.animate-gradient {
		background-size: 200% 200%;
		animation: gradient 15s ease infinite;
	}

	.animate-float {
		animation: float 10s ease-in-out infinite;
	}
</style>
