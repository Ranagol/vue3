import { defineStore } from 'pinia';

export const useCounterStore = defineStore({
  id: 'counter', 
  //This is the Pinia state
  state: () => ({
      count: 0,
      title: 'My counter titlexxx'
  }),
  //Actions are here. They can change the state. This is input.
  actions: {
    increaseCounter(amount){
      //We use this. in store, like in Vue 2
      this.count = this.count + amount;
    },
    decreaseCounter(amount){
      this.count = this.count - amount;
    }
  },
  //
  /**
   * Getters are here. They are like computed in Vue 2. This is the store output.
   * Getters must receive the state as an argument. 
   * Getters must return something. 
   * Every getter is an object property, that stores an arrow () => {}, that return something.
   */
  getters: {
    oddOrEven: (state) => {
      if (state.count % 2 === 0) {
        return 'even';
      }
      return 'odd';
    }
  }
});

