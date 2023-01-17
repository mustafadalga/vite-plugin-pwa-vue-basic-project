<script setup>
import { defineAsyncComponent } from "vue";
import { ref } from "vue";

const Gallery = defineAsyncComponent(() => import("@/components/Gallery.vue"));
const GalleryText = defineAsyncComponent(() => import("@/components/GalleryText.vue"));
const GalleryV2 = defineAsyncComponent(() => import("@/components/GalleryV2.vue"));
const GalleryTextV2 = defineAsyncComponent(() => import("@/components/GalleryTextV2.vue"));

const showGallery = ref(false);


setTimeout(() => {

  showGallery.value = true;
}, 500)

</script>


<template>
  <h1>
    Dashboard - 1
  </h1>
  <div  v-if="showGallery">
    <Gallery/>
    <GalleryText/>
    <GalleryV2/>
    <GalleryTextV2/>
  </div>
</template>