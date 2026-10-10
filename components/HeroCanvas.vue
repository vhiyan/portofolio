<template>
  <div class="relative h-[78vh] w-full overflow-hidden border border-aerospace-sky/70 bg-aerospace-cloud md:h-[82vh]">
    <TresCanvas v-bind="gl" shadows>
      <TresPerspectiveCamera :position="[0, 0, 5]" :fov="60" />
      <OrbitControls make-default />
      
      <!-- Cyan rim light separates robot model from dark lab canvas. -->
      <TresAmbientLight :intensity="0.45" color="#16324F" />
      <TresDirectionalLight
        :position="[5, 10, 5]"
        :intensity="1.4"
        color="#D8F6FF"
        cast-shadow
      />
      <TresPointLight :position="[-10, -5, -10]" :intensity="2.2" color="#42D9FF" />
      
      <!-- Environment -->
      <Suspense>
        <Environment preset="city" /> 
      </Suspense>

      <!-- Floating Drone -->
      <Suspense>
        <RotatingModel />
      </Suspense>

      <!-- Atmospheric Particles -->
      <!-- <AtmosphereParticles /> -->

    </TresCanvas>

    <!-- Overlay Gradients -->
    <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-aerospace-cloud via-transparent to-aerospace-sky/20"></div>
    <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div class="pointer-events-auto max-w-3xl px-6 relative z-10 w-full">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup>
import { BasicShadowMap, SRGBColorSpace, NoToneMapping } from 'three';
import { OrbitControls, Environment } from '@tresjs/cientos';

const gl = {
  clearColor: '#07111F',
  shadows: true,
  alpha: true,
  shadowMapType: BasicShadowMap,
  outputColorSpace: SRGBColorSpace,
  toneMapping: NoToneMapping,
};
</script>
