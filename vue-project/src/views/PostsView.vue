
<template>
  	<div class="about">
		<h1>PostsView</h1>

		<ul>

			<!-- Once we click on this given RouterLink, it will lead us to http://127.0.0.1:5173/postDetail/id2 -->
			<li 
				v-for="post in posts"
				:key="post.id"
			>
			
				<RouterLink
				:to="`postDetail/${post.id}`"
				>
				{{ post.title }}
				</RouterLink>

			</li>
		</ul>
    
		<div>
			<!-- We reuse the composable counter here. We use the increaseCounter() an the counter
			from the useCounter composable.
			-->
			<button 
				@click="counter.increaseCounter(1)"
				class="counter-button"
			>
				{{ counter.count }}
			</button>
		</div>
    

  	</div>
</template>

<script setup>
import { ref } from 'vue';
//Importing Pinia store
import { useCounterStore } from '@/stores/counter.js';

//To access the Pinia store, we need to put it into a variable. This is it. 
let counter = useCounterStore();

/**
 * Here we want to use a much simpler version of the composable counter. We do not need everything.
 * We will just add here a button, it will have the composable counter inside it, and when we click
 * on the button, it will increase the counter by 1.
 */

//Here we create reactive data with ref()
const posts = ref([
  {
    id: 'id1',
    title: 'Post 1'
  },
  {
    id: 'id2',
    title: 'Post 2'
  },
  {
    id: 'id3',
    title: 'Post 3'
  }
])
</script>
