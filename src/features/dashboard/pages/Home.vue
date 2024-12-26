<script setup lang="ts"></script>

<template>
  <div class="container">
    <h1>Home</h1>
    <p class="description">
      Bienvenido al proyecto de prueba técnica. Este proyecto tiene como
      objetivo demostrar habilidades en el desarrollo frontend con Vue 3,
      incluyendo la gestión de rutas, estados globales, servicios, composables y
      el uso de componentes como Element Plus.
    </p>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
  padding: 20px;
  background-color: var(--background-light, #ffffff);
  color: var(--text-color-dark, #213547);
  text-align: center;
}

h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.description {
  font-size: 1.2rem;
  max-width: 600px;
  line-height: 1.6;
  color: var(--text-color-dark, #213547);
}
</style>
