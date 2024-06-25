<script setup>
const props = defineProps(["items"]);
</script>

<template>
  <ul>
    <li v-for="item in items">
      <strong>{{ item.label }}:</strong> {{ item.value }}
    </li>
  </ul>
</template>

<style scoped>
ul {
  display: grid;
  gap: calc(var(--unit) / 2);
  grid-template-columns: repeat(5, 1fr);
}
</style>
