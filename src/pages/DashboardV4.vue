<script setup>
import { defineAsyncComponent } from "vue";
import { ref } from "vue";

const GalleryV2 = defineAsyncComponent(() => import("@/components/GalleryV2.vue"));

const showGallery = ref(false);


setTimeout(() => {

  showGallery.value = true;
}, 250)

</script>


<template>
  <h1>
    Dashboard V4
  </h1>
  <div  v-if="showGallery">
    <GalleryV2/>
  </div>
</template>