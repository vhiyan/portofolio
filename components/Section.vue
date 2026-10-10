<template>
  <section :id="id" class="scroll-mt-28" ref="sectionRef">
    <div class="section-content mx-auto max-w-6xl px-4 py-16 opacity-0 md:py-24">
      <div class="mb-10 flex items-start justify-between gap-6 border-t border-aerospace-sky pt-4">
        <div class="flex items-baseline gap-4">
          <p class="font-mono text-xs font-semibold tracking-[0.2em] text-aerospace-accent">{{ String(id).padStart(2, '0') }}</p>
          <h2 class="text-2xl font-semibold tracking-tight text-aerospace-navy md:text-3xl">{{ title }}</h2>
        </div>
        <p v-if="subtitle" class="hidden max-w-sm text-right text-sm leading-6 text-slate-400 md:block">{{ subtitle }}</p>
      </div>
      <p v-if="subtitle" class="mb-8 text-sm leading-6 text-slate-400 md:hidden">{{ subtitle }}</p>
      <slot />
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
