<template>
  <div class="min-h-screen overflow-x-hidden bg-aerospace-cloud font-sans text-aerospace-text antialiased selection:bg-aerospace-accent selection:text-aerospace-cloud">
    <slot />
  </div>
</template>

<style>
/* Global scrollbar if needed */
html {
  scroll-behavior: smooth;
}

:focus-visible {
  outline: 3px solid #b8f36b;
  outline-offset: 3px;
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }

  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
</style>
