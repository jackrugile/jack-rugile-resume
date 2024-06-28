<script setup>
const props = defineProps(["name", "title"]);
</script>

<template>
  <header>
    <h1>{{ name }}</h1>
    <h2>{{ title }}</h2>
  </header>
</template>

<style scoped>
header {
  display: flex;
  flex-direction: column;
  gap: calc(var(--unit) / 2);
}
</style>
