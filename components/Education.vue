<script setup>
const props = defineProps(["title", "items"]);
</script>

<template>
  <h3>{{ title }}</h3>
  <div class="items">
    <div class="item" v-for="item in items">
      <div class="meta">
        <h4>{{ item.school }}</h4>
        <p>
          <em>{{ item.degree }}</em>
        </p>
        <p>
          <em>{{ item.field }}</em>
        </p>
        <p>{{ item.startDate }} – {{ item.endDate }}</p>
      </div>
      <ul v-if="item.details && item.details.length">
        <li v-for="detail in item.details">{{ detail }}</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.items {
  display: flex;
  flex-direction: column;
  gap: calc(var(--unit));
}

.item {
  display: flex;
  flex-direction: column;
  gap: calc(var(--unit) / 4);
}

.meta {
  display: grid;
  gap: var(--unit);
  grid-template-columns: repeat(4, 1fr);
}

ul {
  display: flex;
  flex-direction: column;
  gap: calc(var(--unit) / 4);
}

li::marker {
  content: "»  ";
}
</style>
