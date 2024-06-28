<script setup>
const props = defineProps(["title", "items"]);
</script>

<template>
  <h3>{{ title }}</h3>
  <div class="items">
    <div class="item" v-for="item in items">
      <div class="meta">
        <h4>{{ item.company }}</h4>
        <div class="titles">
          <p v-for="position in item.positions">
            <em>{{ position.title }}</em>
          </p>
        </div>
        <div class="dates">
          <p v-for="position in item.positions">
            {{ position.startDate }} – {{ position.endDate }}
          </p>
        </div>
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
  gap: var(--unit);
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

h4 {
  grid-column: span 2;
}

/* .titles {
  text-align: right;
}

.dates {
  text-align: right;
} */

ul {
  display: flex;
  flex-direction: column;
  gap: calc(var(--unit) / 4);
}

li::marker {
  content: "»  ";
}
</style>
