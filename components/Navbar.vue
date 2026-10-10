<template>
  <header ref="navRef" class="fixed inset-x-0 top-0 z-50 border-b border-aerospace-sky/70 bg-aerospace-cloud/95 opacity-0 backdrop-blur-sm">
    <div class="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
      <NuxtLink to="/" class="font-mono text-sm font-bold tracking-tight text-aerospace-navy">KD<span class="text-aerospace-accent">/</span>DEV</NuxtLink>
      <nav class="hidden gap-7 text-sm font-medium text-aerospace-text md:flex">
        <a v-for="item in items" :key="item.href" :href="item.href" class="transition-colors hover:text-aerospace-accent">{{ item.label }}</a>
      </nav>
      <button class="rounded-md p-2 text-aerospace-navy transition-colors hover:bg-aerospace-sky md:hidden" :aria-expanded="isOpen" aria-controls="mobile-menu" aria-label="Toggle menu" @click="isOpen = !isOpen">
        <Menu v-if="!isOpen" :size="20" /><X v-else :size="20" />
      </button>
    </div>
    <nav v-if="isOpen" id="mobile-menu" class="space-y-1 border-t border-aerospace-sky bg-aerospace-cloud px-4 pb-4 pt-2 md:hidden">
      <a v-for="item in items" :key="item.href" :href="item.href" class="block rounded-md py-3 text-aerospace-text hover:bg-aerospace-sky" @click="isOpen = false">{{ item.label }}</a>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { Menu, X } from 'lucide-vue-next';
import anime from 'animejs';

const isOpen = ref(false);
const navRef = ref(null);
const items = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

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
