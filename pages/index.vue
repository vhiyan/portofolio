<template>
  <main>
    <Navbar />
    <div class="pt-20">
      <!-- HERO -->
      <div class="mx-auto max-w-6xl px-4">
        <HeroCanvas>
          <div class="grid min-h-[58vh] items-end gap-8 py-8 text-left md:grid-cols-[1fr_auto] md:py-14">
            <div class="max-w-3xl self-end">
              <p class="mb-5 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-aerospace-lime">PLAI BMD / AI & Robotics Lab</p>
              <h1 ref="titleRef" class="max-w-3xl text-5xl font-semibold leading-[0.92] tracking-[-0.06em] text-aerospace-navy opacity-0 md:text-8xl">
                Teaching machines to sense, decide, and move.
              </h1>
              <p ref="subtitleRef" class="mt-6 max-w-xl text-base leading-7 text-aerospace-text opacity-0 md:text-lg">
                {{ site.name }}, {{ site.role }}, explores artificial intelligence, robotics, and embedded systems through hands-on learning.
              </p>
              <div ref="actionsRef" class="mt-8 flex flex-wrap items-center gap-3 opacity-0">
                <a href="#projects" class="rounded-lg bg-aerospace-accent px-5 py-3 text-sm font-semibold text-aerospace-cloud transition-colors hover:bg-aerospace-lime">Explore the lab work</a>
                <a :href="`mailto:${site.email}`" class="rounded-lg border border-aerospace-accent px-5 py-3 text-sm font-semibold text-aerospace-navy transition-colors hover:bg-aerospace-accent hover:text-aerospace-cloud">Discuss a project</a>
              </div>
            </div>
            <aside class="hidden w-44 self-start border-l border-aerospace-accent/50 pl-4 md:block">
              <p class="font-mono text-[10px] uppercase tracking-[0.18em] text-aerospace-lime">System brief</p>
              <div class="mt-5 space-y-5 text-xs">
                <div><p class="text-slate-400">Role</p><p class="mt-1 font-medium text-aerospace-navy">Lecturer / Researcher</p></div>
                <div><p class="text-slate-400">Signal path</p><p class="mt-1 font-medium text-aerospace-navy">Sense · Compute · Act</p></div>
                <div><p class="text-slate-400">Environment</p><p class="mt-1 font-medium text-aerospace-navy">Physical world</p></div>
              </div>
            </aside>
          </div>
        </HeroCanvas>
      </div>

      <Section id="about" title="From classroom to working prototype" subtitle="The work connects AI concepts with the electronics, code, and physical constraints that make robots useful.">
        <div class="grid gap-10 md:grid-cols-[1.4fr_0.6fr]">
          <p class="max-w-2xl text-xl leading-8 text-aerospace-text md:text-2xl md:leading-9">As a lecturer at PLAI BMD, I guide learners through artificial intelligence, robotics, and embedded development. The goal is simple: turn theory into systems that can perceive their environment and respond to it.</p>
          <div class="border-t border-aerospace-navy pt-4">
            <h3 class="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Find me online</h3>
            <ul class="mt-4 space-y-3 text-sm">
              <li v-for="s in site.socials" :key="s.label"><a class="font-semibold text-aerospace-accent underline-offset-4 hover:underline" :href="s.href" target="_blank" rel="noreferrer">{{ s.label }}</a></li>
            </ul>
          </div>
        </div>
      </Section>

      <!-- SKILLS -->
      <Section id="skills" title="The working toolkit" subtitle="Technologies used to move from an idea to a functioning system.">
        <div class="grid border-l border-aerospace-sky sm:grid-cols-2 lg:grid-cols-4">
          <div v-for="(sk, index) in site.skills" :key="sk" class="group border-b border-r border-t border-aerospace-sky px-4 py-5 transition-colors hover:bg-aerospace-panel">
            <span class="font-mono text-[10px] text-aerospace-accent">{{ String(index + 1).padStart(2, '0') }}</span>
            <p class="mt-3 text-sm font-medium text-aerospace-navy">{{ sk }}</p>
          </div>
        </div>
      </Section>

      <!-- PROJECTS -->
      <Section id="projects" title="Lab work and experiments" subtitle="Projects that connect code to sensors, machines, and the people learning to build them.">
        <div class="grid gap-x-10 md:grid-cols-2">
          <div v-for="(p, index) in site.projects" :key="p.title" class="relative">
            <span class="absolute right-0 top-6 font-mono text-[10px] text-aerospace-accent">WORK {{ String(index + 1).padStart(2, '0') }}</span>
            <ProjectCard v-bind="p" />
          </div>
        </div>
      </Section>

      <!-- CONTACT -->
      <Section id="contact" title="Contact">
        <div class="grid gap-8 border border-aerospace-accent bg-aerospace-panel p-7 md:grid-cols-[1fr_auto] md:items-center md:p-10">
          <div>
            <p class="font-mono text-xs uppercase tracking-[0.18em] text-aerospace-lime">Open channel</p>
            <p class="mt-3 max-w-xl text-2xl font-medium leading-tight text-aerospace-navy md:text-3xl">Have an AI or robotics project to discuss?</p>
          </div>
          <a class="w-fit font-mono text-sm font-bold text-aerospace-accent underline decoration-aerospace-accent/50 underline-offset-8 hover:text-aerospace-lime" :href="`mailto:${site.email}`">{{ site.email }}</a>
        </div>
      </Section>

      <footer class="py-10 text-center font-mono text-xs text-slate-400">
        © 2026 {{ site.name }} · PLAI BMD · AI & Robotics
      </footer>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import anime from 'animejs';
import { site } from '~/data/site';
import { useResume } from '~/composables/useResume';

const titleRef = ref(null);
const subtitleRef = ref(null);
const actionsRef = ref(null);

const { generateResume } = useResume();

const downloadResume = () => {
  generateResume();
};

onMounted(() => {
  anime.timeline({
    easing: 'easeOutExpo',
  })
  .add({
    targets: titleRef.value,
    translateY: [20, 0],
    opacity: [0, 1],
    duration: 1200,
    delay: 200
  })
  .add({
    targets: subtitleRef.value,
    opacity: [0, 1],
    duration: 1000,
    offset: '-=800'
  })
  .add({
    targets: actionsRef.value,
    opacity: [0, 1],
    translateY: [10, 0],
    duration: 800,
    offset: '-=600'
  });
});
</script>
