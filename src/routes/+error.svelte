<script>
	let { error } = $props();
</script>

<div class="flex min-h-screen items-center justify-center bg-slate-900">
	<div class="text-center">
		<h1 class="mystical-text mb-4 font-serif text-4xl">
			Error: {error?.message || 'Something went wrong'}
		</h1>
		<p class="mb-8 text-slate-300">We're working on fixing this issue.</p>
		<a href="/" class="text-purple-400 transition-colors hover:text-purple-300">Return Home</a>
	</div>
</div>
