<template>
  <section :id="id" class="scroll-mt-28" ref="sectionRef">
    <div class="mx-auto max-w-6xl px-4 py-14 md:py-20 opacity-0 section-content">
      <h2 class="text-2xl md:text-3xl font-bold text-aerospace-navy">{{ title }}</h2>
      <p v-if="subtitle" class="mt-2 text-slate-500">{{ subtitle }}</p>
      <div class="mt-6">
        <slot />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import anime from 'animejs';

const props = defineProps({
  id: String,
  title: String,
  subtitle: String
});

const sectionRef = ref(null);
let observer = null;

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Select the content wrapper to animate its children
          const content = entry.target.querySelector('.section-content');
          if (content) {
            anime({
              targets: content.children, // Animate title, subtitle, and slot content
              translateY: [20, 0],
              opacity: [0, 1],
              duration: 800,
              delay: anime.stagger(100),
              easing: 'easeOutExpo'
            });
            // Ensure wrapper is visible
            content.style.opacity = 1; 
          }
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  if (sectionRef.value) {
    observer.observe(sectionRef.value);
  }
});

onUnmounted(() => {
  if (observer) observer.disconnect();
});
</script>
