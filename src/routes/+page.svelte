<script>
	import { elasticOut } from 'svelte/easing';
	import { fade, fly, slide } from 'svelte/transition';

	let showing = false;
</script>

<label>
	<input bind:checked={showing} type="checkbox" />
</label>

{#if showing}
	<div>
		<h1 transition:fade>Jason Kuffler</h1>
	</div>
{/if}

<style>
	div {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	h1 {
		margin-top: 9em;
		font-family: 'Courier New', Courier, monospace;
	}
</style>
