<template>

    <!-- CREATE OR EDIT NOTE COMPONENT - CHILD -->

    <!-- In this div class we dynamically change the success class with ... So the background color
    will change because of this. 
    If the ${props.bgColor} === 'success', the background will be green. (for creating note)
    If the ${props.bgColor} === 'link', the background will be blue (for editing note)
    -->
    <div 
        class="card  p-4 mb-5"
        :class="`has-background-${props.bgColor}-dark`"
    >
        <!-- LABEL -->
        <label  
            v-if="label"
            class="label has-text-white"
        >
            {{ props.label }}
        </label>

        <!-- INPUT/EDIT FIELD -->
        <div class="field">
            <div class="control">

            <!-- Notice that this here is a div like something, not na input field. So, we
            will need html ref to get the text from html to Vue.-->
            <textarea
                ref="textareaRef"
                class="textarea"
                :placeholder="props.placeholder"
                v-model="modelValue" 
                @input="change"
                v-autofocus
            />
            <!-- v-autofocus: this is my custom directive -->

            </div>
        </div>

        <!-- BUTTON -->
        <div class="field is-grouped is-grouped-right">
            <div class="control">
                <!-- We will insert here edit or create button  -->
                <slot name="buttons"></slot>
            </div>
        </div>

    </div>    
</template>

<script setup>

import { ref } from 'vue'; 
import { vAutofocus } from '@/directives/vAutofocus';//here we import our custom dir


/**
 * Props
 */
let props = defineProps(
    {
        modelValue: {
            type: String,
            required: true,
            default: 'random default text'
        },
        bgColor: {
            type: String,
            default: 'success'
        },
        placeholder: {
            type: String,
            default: 'Type something...'
        },
        label: {
            type: String
        }
    }
);

/**
 * Emit.
 */
const emit = defineEmits(['update:modelValue']);
function change(){
    emit('update:modelValue', props.modelValue);
}

const textareaRef = ref(null);

/**
 * Focus story.
 * 1 - creating the function that will be called in the ViewNotes
 * 2 - exposing the function so it is accessable by the ViewNotes component. Because we are in the
 * script setup. So the parent cant see the focusTextarea. To solve this, we must use defineExpose(),
 * and this will expose the focusTextarea to the parent.
 * 
 * Desired result: when a new note is created, the cursor should automatically return into the 
 * textarea field.
 */
const focusTextarea = () => { //1 - creating the function that will be called in the ViewNotes
    console.log('focusTextarea***************');
    textareaRef.value.focus();
}

defineExpose({//2 - exposing the function so it is accessable by the ViewNotes component
    focusTextarea
});



</script>