<template>
  <a
    :href="link"
    target="_blank"
    rel="noreferrer"
    ref="cardRef"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    class="group block border-t border-aerospace-sky py-6 transition-colors hover:border-aerospace-accent"
  >
    <div class="flex items-start justify-between gap-4">
      <div>
        <h3 class="text-lg font-semibold text-aerospace-navy group-hover:text-aerospace-accent">{{ title }}</h3>
        <p class="mt-2 max-w-lg text-sm leading-6 text-aerospace-text">{{ summary }}</p>
      </div>
    </div>
    <div class="mt-5 flex flex-wrap gap-x-4 gap-y-2">
      <span v-for="tag in tags" :key="tag" class="font-mono text-xs text-slate-400">{{ tag }}</span>
    </div>
  </a>
</template>

<script setup>
import { ref } from 'vue';
import anime from 'animejs';

defineProps({
  title: String,
  summary: String,
  tags: Array,
  link: String
});

const cardRef = ref(null);

const handleMouseEnter = () => {
  anime({
    targets: cardRef.value,
    scale: 1.02,
    boxShadow: '0 10px 30px -10px rgba(14, 165, 233, 0.4)', // Bright Sky Blue Shadow
    duration: 300,
    easing: 'easeOutQuad'
  });
};

const handleMouseLeave = () => {
  anime({
    targets: cardRef.value,
    scale: 1,
    boxShadow: '0 4px 6px -1px rgba(224, 242, 254, 0.5)', // Reset to soft sky shadow
    duration: 300,
    easing: 'easeOutQuad'
  });
};
</script>
