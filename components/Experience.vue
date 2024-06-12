<script setup>
const props = defineProps(["title", "items"]);
</script>

<template>
  <h3>{{ title }}</h3>
  <div class="item" v-for="item in items">
    <div class="meta">
      <h4>{{ item.company }}</h4>
      <p>
        <em>{{ item.title }}</em>
      </p>
      <p>{{ item.startDate }} – {{ item.endDate }}</p>
    </div>
    <ul>
      <li v-for="detail in item.details">{{ detail }}</li>
    </ul>
  </div>
</template>

<style scoped>
.item {
  display: flex;
  flex-direction: column;
  gap: var(--unit);
}

.meta {
  display: grid;
  gap: var(--unit);
  grid-template-columns: repeat(3, 1fr);
}

p {
  line-height: 1;
}

ul {
  display: flex;
  flex-direction: column;
  gap: calc(var(--unit) / 4);
}

li {
}
</style>
