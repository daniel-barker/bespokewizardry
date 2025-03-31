<footer class="relative border-t border-purple-500/20 py-8">
	<div class="absolute inset-0">
		<div
			class="animate-gradient-x absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-pink-500/5"
		></div>
		<div
			class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.05),transparent_70%)]"
		></div>
	</div>
	<div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<p class="text-center text-sm text-slate-400">
			<span
				class="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent"
			>
				© {new Date().getFullYear()} Bespoke Wizardry
			</span>
			<span class="mx-2">•</span>
			<span>All rights reserved.</span>
		</p>
	</div>
</footer>

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
</style>
