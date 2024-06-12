<script setup>
import data from "~/assets/data.json";
import { ref, onMounted, onUnmounted } from "vue";

const container = ref();

function scaleContainer() {
  container.value.style.transform = "translate3d(-50%, -50%, 0) scale(1)";

  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  const windowRatio = windowWidth / windowHeight;
  const containerBcr = container.value.getBoundingClientRect();
  const containerWidth = containerBcr.width;
  const containerHeight = containerBcr.height;
  const containerRatio = containerWidth / containerHeight;
  let scale = 1;

  if (windowRatio > containerRatio) {
    scale = windowHeight / containerHeight;
  } else {
    scale = windowWidth / containerWidth;
  }

  container.value.style.transform = `translate3d(-50%, -50%, 0) scale(${scale})`;
}

onMounted(() => {
  // window.addEventListener("resize", scaleContainer);
  // scaleContainer();
});

onUnmounted(() => {
  // window.removeEventListener("resize", scaleContainer);
});
</script>

<template>
  <div class="container" ref="container">
    <Header :name="data.name" :title="data.title" />
    <Contact :items="data.contact" />
    <Statement :description="data.description" />
    <Experience :title="data.experience.title" :items="data.experience.items" />
    <Education :title="data.education.title" :items="data.education.items" />
    <Skills :title="data.skills.title" :areas="data.skills.areas" />
  </div>
</template>

<style scoped>
.container {
  background-color: #fff;
  border-left: 1px dotted #ccc;
  border-right: 1px dotted #ccc;
  display: flex;
  flex-direction: column;
  gap: var(--unit);
  /* height: 11in; */
  left: 50%;
  margin: 0 auto;
  padding: 0.5in;
  /* position: absolute; */
  top: 50%;
  width: 8.5in;
}

@media print {
  .container {
    border: none;
    position: static;
    transform: none !important;
  }
}
</style>
