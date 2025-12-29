<template>
  <div class="min-h-screen bg-aerospace-gradient text-aerospace-text antialiased font-sans selection:bg-aerospace-accent selection:text-white overflow-x-hidden">
    <div class="fixed inset-0 pointer-events-none bg-[url('/noise.png')] opacity-[0.03]"></div>
    <slot />
  </div>
</template>

<style>
/* Global scrollbar if needed */
html {
  scroll-behavior: smooth;
}
</style>
