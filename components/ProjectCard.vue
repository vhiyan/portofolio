<template>
  <a
    :href="link"
    target="_blank"
    rel="noreferrer"
    ref="cardRef"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    class="block rounded-2xl p-6 bg-white/60 backdrop-blur-sm border border-aerospace-sky shadow-lg shadow-aerospace-sky/50 transition-colors"
  >
    <div class="flex items-start justify-between gap-4">
      <div>
        <h3 class="text-lg font-semibold text-aerospace-navy">{{ title }}</h3>
        <p class="text-sm text-aerospace-text mt-1">{{ summary }}</p>
      </div>
    </div>
    <div class="mt-4 flex flex-wrap gap-2">
      <span v-for="tag in tags" :key="tag" class="text-xs px-2 py-1 rounded-full bg-aerospace-sky text-aerospace-accent font-medium">
        {{ tag }}
      </span>
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
