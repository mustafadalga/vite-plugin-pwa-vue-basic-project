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
const GalleryTextV14 = defineAsyncComponent(() => import("@/components/gallery-text/GalleryTextV14.vue"));
const GalleryTextV15 = defineAsyncComponent(() => import("@/components/gallery-text/GalleryTextV15.vue"));
const GalleryTextV16 = defineAsyncComponent(() => import("@/components/gallery-text/GalleryTextV16.vue"));
const GalleryTextV17 = defineAsyncComponent(() => import("@/components/gallery-text/GalleryTextV17.vue"));
const GalleryTextV18 = defineAsyncComponent(() => import("@/components/gallery-text/GalleryTextV18.vue"));
const GalleryTextV19 = defineAsyncComponent(() => import("@/components/gallery-text/GalleryTextV19.vue"));
const GalleryTextV20 = defineAsyncComponent(() => import("@/components/gallery-text/GalleryTextV20.vue"));
const GalleryTextV21 = defineAsyncComponent(() => import("@/components/gallery-text/GalleryTextV21.vue"));
const GalleryTextV22 = defineAsyncComponent(() => import("@/components/gallery-text/GalleryTextV22.vue"));
const GalleryTextV23 = defineAsyncComponent(() => import("@/components/gallery-text/GalleryTextV23.vue"));
const GalleryTextV24 = defineAsyncComponent(() => import("@/components/gallery-text/GalleryTextV24.vue"));
const GalleryTextV25 = defineAsyncComponent(() => import("@/components/gallery-text/GalleryTextV25.vue"));
const GalleryTextV26 = defineAsyncComponent(() => import("@/components/gallery-text/GalleryTextV26.vue"));
const GalleryTextV27 = defineAsyncComponent(() => import("@/components/gallery-text/GalleryTextV27.vue"));
const GalleryTextV28 = defineAsyncComponent(() => import("@/components/gallery-text/GalleryTextV28.vue"));
const GalleryTextV29 = defineAsyncComponent(() => import("@/components/gallery-text/GalleryTextV29.vue"));
const GalleryTextV30 = defineAsyncComponent(() => import("@/components/gallery-text/GalleryTextV30.vue"));
const GalleryTextV31 = defineAsyncComponent(() => import("@/components/gallery-text/GalleryTextV31.vue"));
const GalleryTextV32 = defineAsyncComponent(() => import("@/components/gallery-text/GalleryTextV32.vue"));
const GalleryTextV33 = defineAsyncComponent(() => import("@/components/gallery-text/GalleryTextV33.vue"));
const GalleryTextV34 = defineAsyncComponent(() => import("@/components/gallery-text/GalleryTextV34.vue"));
const GalleryTextV35 = defineAsyncComponent(() => import("@/components/gallery-text/GalleryTextV35.vue"));
const GalleryTextV36 = defineAsyncComponent(() => import("@/components/gallery-text/GalleryTextV36.vue"));


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
    <GalleryTextV14/>
    <GalleryTextV15/>
    <GalleryTextV16/>
    <GalleryTextV17/>
    <GalleryTextV18/>
    <GalleryTextV19/>
    <GalleryTextV20/>
    <GalleryTextV21/>
    <GalleryTextV22/>
    <GalleryTextV23/>
    <GalleryTextV24/>
    <GalleryTextV25/>
    <GalleryTextV26/>
    <GalleryTextV27/>
    <GalleryTextV28/>
    <GalleryTextV29/>
    <GalleryTextV30/>
    <GalleryTextV31/>
    <GalleryTextV32/>
    <GalleryTextV33/>
    <GalleryTextV34/>
    <GalleryTextV35/>
    <GalleryTextV36/>
  </div>
</template>