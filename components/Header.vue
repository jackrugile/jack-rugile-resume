<script setup>
const props = defineProps(["name", "title"]);
</script>

<template>
  <h1>{{ name }}</h1>
  <h2>{{ title }}</h2>
</template>

<style scoped>
h1 {
}

h2 {
}
</style>
