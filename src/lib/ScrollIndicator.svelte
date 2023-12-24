<div />

<style>
  div {
    width: 100%;
		height: calc(var(--size-0-5) / 2);
		position: fixed;
		top: 0;
		z-index: 1000;
		background-color: var(--accent);
		scale: 0 1;
		transform-origin: left;
		animation: scrollWatcher linear;
		animation-timeline: scroll(block);
	}
  
	@keyframes scrollWatcher {
    to {
      scale: 1 1;
		}
	}
  
  @media (prefers-reduced-motion) {
    div {
      opacity: 0;
    }
  }
</style>
