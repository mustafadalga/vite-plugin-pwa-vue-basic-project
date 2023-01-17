<script setup>
import { defineAsyncComponent } from "vue";
import { ref } from "vue";

const GalleryV2 = defineAsyncComponent(() => import("@/components/GalleryV2.vue"));
const GalleryTextV2 = defineAsyncComponent(() => import("@/components/gallery-text/GalleryTextV2.vue"));

const showGallery = ref(false);


setTimeout(() => {

  showGallery.value = true;
}, 500)

</script>


<template>
  <h1>
    Profile
  </h1>
  <div  v-if="showGallery">
    <GalleryV2/>
    <GalleryTextV2/>
  </div>
</template>