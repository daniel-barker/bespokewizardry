<script lang="ts">
	import { onMount } from 'svelte';

	let cursor: HTMLDivElement;
	let cursorGlow: HTMLDivElement;
	let currentColor = 'rgba(255, 0, 128, 0.8)'; // Start with a visible pink color

	// Convert rem to pixels for calculations
	const remToPx = (rem: number) =>
		rem * parseFloat(getComputedStyle(document.documentElement).fontSize);

	onMount(() => {
		console.log('MouseEffect mounted', { cursor, cursorGlow });

		const handleMouseMove = (e: MouseEvent) => {
			if (!cursor || !cursorGlow) {
				console.warn('Cursor elements not initialized');
				return;
			}

			requestAnimationFrame(() => {
				// Get the actual size in pixels from rem values
				const rect = cursorGlow.getBoundingClientRect();
				const halfWidth = rect.width / 2;
				const halfHeight = rect.height / 2;

				cursor.style.transform = `translate(${e.clientX - halfWidth}px, ${e.clientY - halfHeight}px)`;

				const element = document.elementFromPoint(e.clientX, e.clientY);
				if (element) {
					const computedStyle = window.getComputedStyle(element);
					const backgroundColor = computedStyle.backgroundColor;
					if (backgroundColor !== 'rgba(0, 0, 0, 0)' && backgroundColor !== 'transparent') {
						currentColor = backgroundColor;
					}
				}
			});
		};

		document.addEventListener('mousemove', handleMouseMove);

		return () => {
			document.removeEventListener('mousemove', handleMouseMove);
		};
	});
</script>

<div class="pointer-events-none fixed top-0 left-0 z-[9999]" bind:this={cursor}>
	<div
		class="h-[4rem] w-[4rem] rounded-full blur-[2.5rem] transition-colors duration-200"
		style:background-color={currentColor}
		bind:this={cursorGlow}
	/>
</div>

<style>
	div {
		transform: translate(-50%, -50%);
	}
</style>
