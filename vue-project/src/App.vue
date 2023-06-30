<template>
  <div>
    Online: {{ online }}
  </div>
  <div>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/posts">PostsView</RouterLink>
      <RouterLink to="/postDetail">PostDetailView</RouterLink>
      <RouterLink to="/modals">ModalsView</RouterLink>
    </nav>
    <RouterView />
  </div>
</template>

<script setup>
//1. import provide
import { reactive, provide } from 'vue';
import { useOnline } from '@vueuse/core'

/**
 * This online const will change true/false depending if we are online or not.
 */
const online = useOnline()


//This is the data that we want to send to Modal.vue with provide/inject
const userData = reactive({
  name: 'Danny',
  username: 'dannyconnel'
});

/**
 * 2. This is how we use provide(). provide() must be imported first!
 * ... Aaand this is it. We just pushed our data into the provide(). So our data will now be 
 * accessable in any child component.
 * 'userData' is just a placeholder
 * userData is the actual data that we are providing
 */
provide('userData', userData);

</script>



<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}


</style>
