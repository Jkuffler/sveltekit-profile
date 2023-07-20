<script>
	import { slide } from 'svelte/transition';
	import { onMount } from 'svelte';
	let showing = false;
	onMount(() => {
		showing=true;
	})
	
</script>

{#if showing}
	<div>
		<h1 transition:slide>Jason Kuffler</h1>
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