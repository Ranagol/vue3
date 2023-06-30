<template>
  <div>
    <NavBar></NavBar>

    <!-- 8 step: add RouterView component to display our routes. -->
    <RouterView></RouterView>
  </div>
</template>

<script setup>
  import NavBar from "@/components/Layout/NavBar.vue";
</script>

<style>
  @import "bulma\css\bulma.min.css";
</style>
