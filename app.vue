<script setup>
import data from "~/assets/data.json";
</script>

<template>
  <div class="container">
    <Header :name="data.name" :title="data.title" />
  </div>
</template>

<style scoped>
.container {
  background-color: #fff;
  height: 11in;
  margin: 0 auto;
  width: 8.5in;
}
</style>
