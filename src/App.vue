<script setup>


const url=import.meta.env.VITE_URL
</script>
<template>
  <img src="/favicon.svg" alt="PWA Logo" width="58" height="60">
  {{ url }}
  <ul>
    <li>
      <router-link to="/">Home</router-link>
    </li>
    <li>
      <router-link to="/dashboard">dashboard</router-link>
    </li>
    <li>
      <router-link to="/dashboard-v2">dashboard v2</router-link>
    </li>
    <li>
      <router-link to="/dashboard-v3">dashboard v3</router-link>
    </li>
    <li>
      <router-link to="/dashboard-v4">dashboard v4 </router-link>
    </li>
    <li>
      <router-link to="/my-insights">my-insights</router-link>
    </li>
    <li>
      <router-link to="/profile">profile</router-link>
    </li>
    <li>
      <router-link to="/contact">contact</router-link>
    </li>
  </ul>

  <router-view/>

</template>
