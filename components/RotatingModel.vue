<template>
  <TresGroup ref="modelRef" :position="[0, 1, 0]" :scale="0.4">
    <primitive :object="scene" />
  </TresGroup>
</template>

<script setup>
import { ref, watchEffect } from 'vue';


const modelRef = ref(null);
const { scene } = await useGLTF('/drone.glb');

// Enable Shadows
watchEffect(() => {
  if (scene) {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
        if (child.material) {
          child.material.envMapIntensity = 1.0;
        }
      }
    });
  }
});

const { onLoop } = useRenderLoop();

onLoop(({ delta }) => {
  if (modelRef.value) {
    modelRef.value.rotation.y += delta * 0.3;
    // Simple floating effect
    modelRef.value.position.y = 1 + Math.sin(Date.now() * 0.001) * 0.1;
  }
});
</script>
