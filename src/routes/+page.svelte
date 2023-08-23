<script>
  import { slide, fade } from 'svelte/transition';
</script>


<div in:slide out:fade>
  <h1>Jason Kuffler</h1>
</div>

<style>
	* {
		background-color: black;
		display: flex;
		flex-direction: column;
		align-items: center;
		font-family: 'Courier New', Courier, monospace;
	}

  div {
    color:blanchedalmond;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  h1 {
    font-size: 5em;
    font-family: 'Courier New', Courier, monospace;
  }
</style>
