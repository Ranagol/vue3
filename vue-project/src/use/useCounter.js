/**
 * Composable is a function. The function should be named the same way sa the file.
 * We use the 'export' to make this function available in every component.
 */
import { nextTick, reactive, computed, watch, onMounted } from 'vue';

/**
 * Now, if we leave counterData inside the useCounter() function, then the component where this
 * composable is used will immediatelly forget the value of the current count, and it will be 
 * resetted. But if we move counterData outside of useCounter(), then that will make this 
 * counterData a global object, and it will be accessable everywhere.
 */
let counterData = reactive({
    count: 0,
    title: 'New random title'
});

export function useCounter(){
  
    /**
     * 1 - this is a getter function, that gets the counterData.count for the watcher
     * 2 - gets the old value and the new value of the counterData.count
     */
    watch(
        () => counterData.count,//1
        (newCount, oldCount) => {//2
            // console.log('newCount:', newCount);
            // console.log('oldCount:', oldCount);
            if (newCount === 5) {
            alert('You reached 5!');
        }
    });
  
    let oddOrEven = computed(() => {
        if (counterData.count % 2 === 0) {
            return 'even';
        }
        return 'odd';
    });

    //Ordinary, traditional way of creating a function
    function increaseCounter(value) {
        counterData.count = counterData.count + value;
        nextTick(() => {
            console.log('nextTick was triggered, after the DOM was updated by the increaseCounter().')
        })
    }
  
    //Storing a function in a variable
    const decreaseCounter = value => {
        counterData.count = counterData.count - value;
    }

    onMounted(() => {
        console.log('onMounted.');
    });   

    /**
     * This is a function. In order to make all stuff accessable for all components, we must return
     * this stuff. So, every composable must have a return section, where we actually return all 
     * variables and functions from the inside of the function.
     */
    return {
        counterData,
        oddOrEven,
        increaseCounter,
        decreaseCounter,
    }
}