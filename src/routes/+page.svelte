<script>
  import { slide } from 'svelte/transition';
  import { onMount } from 'svelte';
  let showing = false;
  let loopCount = 0;
  const totalLoops = 10;

  const loopAnimate = () => {
    showing = true;
    loopCount++;

    if (loopCount <= totalLoops) {
      // Increase the font size with each pass
      const fontSize = 24 + loopCount * 4;
      document.documentElement.style.setProperty('--font-size', `${fontSize}px`);

      // Wait for the animation to complete before re-triggering it
      setTimeout(() => {
        loopAnimate();
      }, 500);
    }
  };

  onMount(() => {
    loopAnimate();
  });
</script>

{#if showing}
<div>
  <h1 in:slide out:slide style="font-size: var(--font-size, 24px)">Jason Kuffler</h1>
</div>
{/if}

<style>
  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h1 {
    margin-top: 5em;
    font-family: 'Courier New', Courier, monospace;
  }
</style>
