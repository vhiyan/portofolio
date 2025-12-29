<template>
  <main>
    <Navbar />
    <div class="pt-20">
      <!-- HERO -->
      <div class="mx-auto max-w-6xl px-4">
        <HeroCanvas>
          <div class="text-center">
            <h1
              ref="titleRef"
              class="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-aerospace-navy to-aerospace-accent opacity-0"
            >
              {{ site.name }}
            </h1>
            <p
              ref="subtitleRef"
              class="mt-3 text-lg md:text-xl text-slate-500 opacity-0"
            >
              {{ site.role }} — {{ site.tagline }}
            </p>
            <div
              ref="actionsRef"
              class="mt-6 flex items-center justify-center gap-3 opacity-0"
            >
              <button @click="downloadResume" class="px-5 py-3 text-sm font-medium rounded-2xl bg-white border border-aerospace-sky text-aerospace-navy shadow-sm hover:shadow-md transition-shadow">
                Download Resume
              </button>
              <a :href="`mailto:${site.email}`" class="px-5 py-3 text-sm font-medium rounded-2xl bg-aerospace-accent text-white shadow-lg shadow-aerospace-accent/30 hover:shadow-aerospace-accent/50 transition-shadow">
                Email Me
              </a>
            </div>
          </div>
        </HeroCanvas>
      </div>

      <!-- ABOUT -->
      <Section id="about" title="About">
        <div class="grid md:grid-cols-3 gap-6">
          <div class="md:col-span-2 rounded-2xl p-6 bg-white/60 backdrop-blur border border-aerospace-sky shadow-sm text-aerospace-text">
            <p>
              I’m an embedded software engineer focused on reliable systems, real-time comms, and robotics.
              I work across C/C++, Python, Linux services, and vehicle networks (CAN, J1939, UDS).
              Recently I’ve been exploring optimization for UAVs and scalable test frameworks.
            </p>
          </div>
          <div class="rounded-2xl p-6 bg-white/60 backdrop-blur border border-aerospace-sky shadow-sm">
            <h3 class="font-semibold text-aerospace-navy">Social</h3>
            <ul class="mt-3 space-y-2 text-sm">
              <li v-for="s in site.socials" :key="s.label">
                <a class="text-aerospace-accent hover:underline" :href="s.href" target="_blank" rel="noreferrer">{{ s.label }}</a>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      <!-- SKILLS -->
      <Section id="skills" title="Skills" subtitle="Tech I use often">
        <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          <div v-for="sk in site.skills" :key="sk" class="rounded-xl px-4 py-3 bg-white/80 border border-aerospace-sky text-sm text-aerospace-navy font-medium shadow-sm">
            {{ sk }}
          </div>
        </div>
      </Section>

      <!-- PROJECTS -->
      <Section id="projects" title="Projects" subtitle="Selected work & experiments">
        <div class="grid md:grid-cols-2 gap-4">
          <ProjectCard v-for="p in site.projects" :key="p.title" v-bind="p" />
        </div>
      </Section>

      <!-- CONTACT -->
      <Section id="contact" title="Contact">
        <div class="rounded-2xl p-8 bg-gradient-to-br from-aerospace-sky/50 to-white border border-aerospace-sky text-center">
          <p class="text-lg text-aerospace-navy">
            Want to build something together? Reach me at <a class="font-bold text-aerospace-accent hover:underline" :href="`mailto:${site.email}`">{{ site.email }}</a>.
          </p>
        </div>
      </Section>

      <footer class="py-10 text-center text-xs text-slate-400">
        © 2024 {{ site.name }}. Built with Nuxt 3, Tailwind & TresJS.
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
