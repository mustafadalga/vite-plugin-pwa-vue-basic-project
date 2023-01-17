<script setup>
import { defineAsyncComponent } from "vue";
import { ref } from "vue";

const GalleryText = defineAsyncComponent(() => import("@/components/gallery-text/GalleryText.vue"));
const GalleryTextV2 = defineAsyncComponent(() => import("@/components/gallery-text/GalleryTextV2.vue"));
const GalleryTextV3 = defineAsyncComponent(() => import("@/components/gallery-text/GalleryTextV3.vue"));
const GalleryTextV4 = defineAsyncComponent(() => import("@/components/gallery-text/GalleryTextV4.vue"));
const GalleryTextV5 = defineAsyncComponent(() => import("@/components/gallery-text/GalleryTextV5.vue"));
const GalleryTextV6 = defineAsyncComponent(() => import("@/components/gallery-text/GalleryTextV6.vue"));
const GalleryTextV7 = defineAsyncComponent(() => import("@/components/gallery-text/GalleryTextV7.vue"));
const GalleryTextV8 = defineAsyncComponent(() => import("@/components/gallery-text/GalleryTextV8.vue"));
const GalleryTextV9 = defineAsyncComponent(() => import("@/components/gallery-text/GalleryTextV9.vue"));
const GalleryTextV10 = defineAsyncComponent(() => import("@/components/gallery-text/GalleryTextV10.vue"));
const GalleryTextV11 = defineAsyncComponent(() => import("@/components/gallery-text/GalleryTextV11.vue"));
const GalleryTextV12 = defineAsyncComponent(() => import("@/components/gallery-text/GalleryTextV12.vue"));
const GalleryTextV13 = defineAsyncComponent(() => import("@/components/gallery-text/GalleryTextV13.vue"));

const showGallery = ref(false);


setTimeout(() => {

  showGallery.value = true;
}, 400)

</script>


<template>
  <h1>
    Contact
  </h1>
  <div v-if="showGallery">
    <GalleryText/>
    <GalleryTextV2/>
    <GalleryTextV3/>
    <GalleryTextV4/>
    <GalleryTextV5/>
    <GalleryTextV6/>
    <GalleryTextV7/>
    <GalleryTextV8/>
    <GalleryTextV9/>
    <GalleryTextV10/>
    <GalleryTextV11/>
    <GalleryTextV12/>
    <GalleryTextV13/>
  </div>
</template>