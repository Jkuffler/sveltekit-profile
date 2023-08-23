<script>
	import { slide } from 'svelte/transition';
	import { onMount } from 'svelte';
</script>

<section>
	<h2>Me and Mr. Jasper Bellzak</h2>

	<img src="src/routes/about/profile.png" alt="looks like me" />
	<p>
		Sharing my work with friends I haven't met yet | Finishing a degree in Comp Sci | Mentor at<a href="http://www.codethedream.org">codethedream.org</a>
	</p>
</section>

<style>
	a {
		color: darkorange;
	}

	a:visited {
		color: tomato;
	}
	a:hover {
		color: thistle;
	}
	* {
		background-color: black;
		display: flex;
		flex-direction: column;
		align-items: center;
		font-family: 'Courier New', Courier, monospace;
	}

	img {
		max-width: 100%;
		height: 20em;
	}

	p {
		color: blanchedalmond;
		margin-left: 3em;
		margin-right: 3em;
	}
</style>
