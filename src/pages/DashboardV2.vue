<script setup>
import { defineAsyncComponent } from "vue";
import { ref } from "vue";

const Gallery = defineAsyncComponent(() => import("@/components/Gallery.vue"));

const showGallery = ref(false);


setTimeout(() => {

  showGallery.value = true;
}, 250)

</script>


<template>
  <h1>
    Dashboard V2
  </h1>
  <div  v-if="showGallery">
    <Gallery/>
  </div>
</template>