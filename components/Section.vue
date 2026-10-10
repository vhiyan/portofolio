<template>
  <section :id="id" class="scroll-mt-28" ref="sectionRef">
    <div class="section-content mx-auto max-w-6xl px-4 py-16 opacity-0 md:py-24">
      <div class="grid gap-6 md:grid-cols-[0.35fr_1fr] md:gap-12">
        <div>
          <p class="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-aerospace-accent">{{ String(id).padStart(2, '0') }}</p>
          <h2 class="mt-3 text-2xl font-semibold tracking-tight text-aerospace-navy md:text-3xl">{{ title }}</h2>
        </div>
        <div>
          <p v-if="subtitle" class="max-w-2xl leading-7 text-slate-600">{{ subtitle }}</p>
          <div class="mt-8"><slot /></div>
        </div>
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
