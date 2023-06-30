<template>
  <div class="about">

    <h1>PostDetailView</h1>

    <!-- Here we catch the id from the url http://127.0.0.1:5173/postDetail/id2, and display it.
    The $route object in the html section is used without the 'this'. So no 'this.$route...' in html.
     -->
    <p>Display the content of post with id of {{ $route.params.id }}</p>
    
    <!-- How to access route params, ids... -->
    <div>
      <button @click="showPostId">Show post id</button>
    </div>

    <!-- How to push a user to another page -->
    <div>
      <button @click="pushUser">Push user to '/' page</button>
    </div>

    <!-- With this we can go back to the /posts url and PostsView component -->
    <p>
      <RouterLink to="/posts">Back</RouterLink>
    </p>

  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';

/**
 * ACCESSING THE ROUTE OBJECT
 * However, when accessing the $route object in the script section, then we must use it with 
 * 'this'. At least that was the case in Vue 2. That would look like this:
 * console.log('Accessing the $route object :', this.$route);
 * But, we can't do this in Vue3. Instead:
 * 1 - import { useRoute } from 'vue-router';
 * 2 - const route = useRoute();
 * 3 - alert(`The id of this post is ${route.params.id}`)
 */
const route = useRoute();

function showPostId(){
  // We defined a route variable a couple of lines above, now we use this route variable
  alert(`The id of this post is ${route.params.id}`)
}

/**
 * DOING A PUSH WITH ROUTER
 * In Vue 2 we route a user like this: this.$router.push('/posts'); 
 * This can't be done in Vue 3. Instead:
 * 1 - import { useRouter } from 'vue-router';
 * 2 - const router = useRouter();
 * 3 - router.push('/');
 */
const router = useRouter();

function pushUser(){
  router.push('/');
}
  
</script>
