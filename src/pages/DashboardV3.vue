<script setup>
import { defineAsyncComponent } from "vue";
import { ref } from "vue";

const GalleryText = defineAsyncComponent(() => import("@/components/GalleryText.vue"));

const showGallery = ref(false);


setTimeout(() => {

  showGallery.value = true;
}, 250)

</script>


<template>
  <h1>
    Dashboard V3
  </h1>
  <div  v-if="showGallery">
    <GalleryText/>
  </div>
</template>