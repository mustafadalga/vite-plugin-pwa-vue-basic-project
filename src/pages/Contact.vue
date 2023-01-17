<script setup>
import { defineAsyncComponent } from "vue";
import { ref } from "vue";

const Gallery = defineAsyncComponent(() => import("@/components/Gallery.vue"));
const GalleryText = defineAsyncComponent(() => import("@/components/GalleryText.vue"));

const showGallery = ref(false);


setTimeout(() => {

  showGallery.value = true;
}, 500)

</script>


<template>
  <h1>
    Contact
  </h1>
  <div  v-if="showGallery">
    <Gallery/>
    <GalleryText/>
  </div>
</template>