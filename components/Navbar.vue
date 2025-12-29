<template>
  <header ref="navRef" class="fixed top-0 inset-x-0 z-50 bg-white/70 backdrop-blur-md border-b border-aerospace-sky opacity-0">
    <div class="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
      <NuxtLink to="/" class="font-semibold tracking-tight text-aerospace-navy text-xl">
        KD<span class="text-aerospace-accent">•</span>Portfolio
      </NuxtLink>
      
      <nav class="hidden md:flex gap-6 text-sm font-medium text-aerospace-text">
        <a href="#about" class="hover:text-aerospace-accent transition-colors">About</a>
        <a href="#skills" class="hover:text-aerospace-accent transition-colors">Skills</a>
        <a href="#projects" class="hover:text-aerospace-accent transition-colors">Projects</a>
        <a href="#contact" class="hover:text-aerospace-accent transition-colors">Contact</a>
      </nav>

      <button class="md:hidden text-aerospace-navy" aria-label="Open menu" @click="isOpen = !isOpen">
        <Menu />
      </button>
    </div>

    <!-- Mobile Menu -->
    <div v-if="isOpen" class="md:hidden px-4 pb-4 space-y-2 bg-white border-t border-aerospace-sky">
      <a href="#about" class="block py-2 text-aerospace-text">About</a>
      <a href="#skills" class="block py-2 text-aerospace-text">Skills</a>
      <a href="#projects" class="block py-2 text-aerospace-text">Projects</a>
      <a href="#contact" class="block py-2 text-aerospace-text">Contact</a>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { Menu } from 'lucide-vue-next';
import anime from 'animejs';

const isOpen = ref(false);
const navRef = ref(null);

onMounted(() => {
  anime({
    targets: navRef.value,
    translateY: [-20, 0],
    opacity: [0, 1],
    duration: 1000,
    easing: 'easeOutExpo',
    delay: 100
  });
});
</script>
