<template>
  <div>
    <NavBar></NavBar>

    <!-- 8 step: add RouterView component to display our routes. This will always show us the 
    page (component) that we want to see.
     -->
    <RouterView></RouterView>
  </div>
</template>

<script setup>
import NavBar from "@/components/Layout/NavBar.vue";
import { onMounted } from 'vue';

onMounted(() => {
  console.log('onMounted from App.vue');
});

</script>

<style>
  @import "bulma\css\bulma.min.css";
</style>
