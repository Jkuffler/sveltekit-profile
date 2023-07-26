<script>
</script>

<nav>
	<ul>
		<li><a href="/">home</a></li>
		<li><a href="/about">about</a></li>
		<li><a href="/experience">experience</a></li>
		<li>
			<a
				href="https://docs.google.com/document/d/1RvBvzJs4o3lVxu07kFWXLkd1WR5ryvmFKj_LSQCdoSM/edit?usp=sharing"
				target="_blank">resume</a
			>
		</li>
		<li><a href="/projects">projects</a></li>
	</ul>
</nav>
<slot />

<style>
	nav,
	ul {
		display: flex;
		list-style-type: none;
		gap: 2em;
		font-family: 'Courier New', Courier, monospace;
	}
</style>
