<script setup>
const props = defineProps(["title", "areas"]);
</script>

<template>
  <h3>{{ title }}</h3>
  <div class="areas">
    <div class="area" v-for="area in areas">
      <h4>{{ area.title }}</h4>
      <ul>
        <li v-for="item in area.items">{{ item }}</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.areas {
  display: grid;
  gap: var(--unit);
  grid-template-columns: repeat(4, 1fr);
}

.area {
  display: flex;
  flex-direction: column;
  gap: calc(var(--unit) / 2);
}

ul {
  gap: calc(var(--unit) / 4);
}

li::marker {
  content: "»  ";
}
</style>
