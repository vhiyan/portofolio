<template>
  <div class="relative w-full h-[72vh] md:h-[80vh] rounded-2xl overflow-hidden ring-1 ring-aerospace-sky/50 bg-aerospace-cloud/50 backdrop-blur-sm">
    <TresCanvas v-bind="gl" shadows>
      <TresPerspectiveCamera :position="[0, 0, 5]" :fov="60" />
      <OrbitControls make-default />
      
      <!-- Lighting for Bright Aerospace Theme -->
      <TresAmbientLight :intensity="0.8" color="#E0F2FE" />
      <TresDirectionalLight
        :position="[5, 10, 5]"
        :intensity="2.0"
        color="#FFFFFF"
        cast-shadow
      />
      <TresPointLight :position="[-10, -5, -10]" :intensity="1.0" color="#0EA5E9" />
      
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
    <div class="absolute inset-0 bg-gradient-to-t from-white via-transparent to-aerospace-sky/20 pointer-events-none"></div>
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
  clearColor: '#F0F9FF',
  shadows: true,
  alpha: true,
  shadowMapType: BasicShadowMap,
  outputColorSpace: SRGBColorSpace,
  toneMapping: NoToneMapping,
};
</script>
