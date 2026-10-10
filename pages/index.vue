<template>
  <main>
    <Navbar />
    <div class="pt-20">
      <!-- HERO -->
      <div class="mx-auto max-w-6xl px-4">
        <HeroCanvas>
          <div class="grid items-center gap-10 py-10 text-left md:grid-cols-[1.1fr_0.9fr] md:py-20">
            <div>
              <p class="mb-5 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-aerospace-lime">PLAI BMD / AI & Robotics Lab</p>
              <h1 ref="titleRef" class="max-w-3xl text-5xl font-semibold leading-[0.95] tracking-[-0.06em] text-aerospace-navy opacity-0 md:text-7xl">
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
            <div class="border-l border-aerospace-accent/40 pl-6 md:pl-10">
              <p class="font-mono text-xs uppercase tracking-[0.18em] text-aerospace-lime">Current focus</p>
              <p class="mt-4 text-2xl font-medium leading-tight text-aerospace-navy">Building practical intelligence for sensors, robots, and edge devices.</p>
              <dl class="mt-8 space-y-4 border-t border-aerospace-sky pt-6 text-sm">
                <div class="flex justify-between gap-4"><dt class="text-slate-400">Role</dt><dd class="text-right font-medium text-aerospace-navy">Lecturer / Researcher</dd></div>
                <div class="flex justify-between gap-4"><dt class="text-slate-400">Signal path</dt><dd class="text-right font-medium text-aerospace-navy">Sense · Compute · Act</dd></div>
              </dl>
            </div>
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
        <div class="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div v-for="sk in site.skills" :key="sk" class="border border-aerospace-sky bg-aerospace-panel px-4 py-3 text-sm font-medium text-aerospace-navy transition-colors hover:border-aerospace-accent">
            {{ sk }}
          </div>
        </div>
      </Section>

      <!-- PROJECTS -->
      <Section id="projects" title="Lab work and experiments" subtitle="Projects that connect code to sensors, machines, and the people learning to build them.">
        <div class="grid md:grid-cols-2 gap-4">
          <ProjectCard v-for="p in site.projects" :key="p.title" v-bind="p" />
        </div>
      </Section>

      <!-- CONTACT -->
      <Section id="contact" title="Contact">
        <div class="border border-aerospace-accent bg-aerospace-panel p-8 text-center">
          <p class="text-lg text-aerospace-navy">
            Have an AI or robotics project to discuss? Reach me at <a class="font-bold text-aerospace-accent hover:underline" :href="`mailto:${site.email}`">{{ site.email }}</a>.
          </p>
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
