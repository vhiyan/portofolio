<template>
  <TresInstancedMesh ref="meshRef" :args="[null, null, count]">
    <TresDodecahedronGeometry :args="[0.05, 0]" />
    <TresMeshBasicMaterial color="#0EA5E9" :transparent="true" :opacity="0.4" />
  </TresInstancedMesh>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import * as THREE from 'three';

const props = defineProps({
  count: { type: Number, default: 200 }
});

const meshRef = ref(null);
const dummy = new THREE.Object3D();

const particles = [];
for (let i = 0; i < props.count; i++) {
  particles.push({
    time: Math.random() * 100,
    factor: Math.random() * 100 + 20,
    speed: Math.random() * 0.01 + 0.005,
    x: (Math.random() - 0.5) * 20,
    y: (Math.random() - 0.5) * 20,
    z: (Math.random() - 0.5) * 20,
  });
}

const { onLoop } = useRenderLoop();

onLoop(({ delta }) => {
  if (!meshRef.value) return;

  particles.forEach((particle, i) => {
    let { factor, speed, x, y, z } = particle;
    
    // Update time
    particle.time += speed;
    const t = particle.time;

    // Movement
    dummy.position.set(
      x + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10,
      y + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10,
      z + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10
    );

    // Scale/Rotation
    const s = Math.cos(t);
    dummy.scale.set(s, s, s);
    dummy.rotation.set(s * 5, s * 5, s * 5);
    dummy.updateMatrix();

    meshRef.value.setMatrixAt(i, dummy.matrix);
  });
  
  meshRef.value.instanceMatrix.needsUpdate = true;
});
</script>
