<script setup>
import { RouterView } from "vue-router";
import SiteHeader from "./components/SiteHeader.vue";
</script>

<template>
  <div class="container mx-auto p-5 md:p-10 flex flex-col gap-10">
    <SiteHeader />
    <RouterView />
  </div>
</template>
