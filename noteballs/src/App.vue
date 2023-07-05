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
import { useStoreNotes } from '@/stores/storeNotes.js';
import { onMounted } from "vue";

const storeNotes = useStoreNotes();

/**
 * This is a hook for getting all tne notes from Firestorm into our storage. 
 */
onMounted(() => {
  storeNotes.getNotes();
});

</script>

<style>
  @import "bulma\css\bulma.min.css";
</style>
