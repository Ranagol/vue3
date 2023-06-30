<template>
  <div class="home">

    <!-- How to use ref. -->
    <h1 ref="appTitleRef">HomeView</h1>

    <h3>{{ counter.title }}</h3>

    <!-- Decrease buttons -->
    <button @click="counter.decreaseCounter(2)" class="btn">--</button>
    <button @click="counter.decreaseCounter(1)" class="btn">--</button>

    <!-- Example how to use in html the count from Pinia store -->
    <span class="counter">{{ counter.count }}</span>

    <!-- Increase buttons -->
    <button @click="counter.increaseCounter(1)" class="btn">+</button>
    <!-- Example how to use the actions from Pinia -->
    <button @click="counter.increaseCounter(2)" class="btn">++</button>

    <!-- Example how to use the getters from Pinia. Notice that there are no () here. -->
    <p>This counter value is {{ counter.oddOrEven}}</p>

    <div class="edit">
      <h3>Edit counter title</h3>
      <input 
        v-model="counter.title"
        type="text"
      >
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue';
//Importing Pinia store
import { useCounterStore } from '@/stores/counter.js';

//To access the Pinia store, we need to put it into a variable. This is it. 
let counter = useCounterStore();


//This is how we can acces a ref html element in Vue3. The variable name must be = to ref name! 
const appTitleRef = ref(null);

</script>

<style>
.home {
  text-align: center;
  padding: 20px;
}

.btn,
.counter {
  font-size: 40px;
  margin: 10px;
}

.edit {
  margin-top: 60px;
}
</style>
