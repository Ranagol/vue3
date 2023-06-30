<template>

    <!-- The teleport wrapper for the modal. We want our modal to behave and look as if it is
    the direct child of the body html element. This way we can avoid the harmful CSS style
    inherits from some parent html element. Because there is no parent element, when our modal
    is teleported directly into the body element. -->
    <teleport to="body">
        <!-- The modal itself-->
        <div 
            v-if="modelValue"
            class="modal-dark"
        >
            <h1>
                <!-- This is how we access props in html. We could also use props.title too. -->
                {{ props.title }}
            </h1>

            <!-- This is a simple non-named slot -->
            <slot></slot>

            <button @click="hideModal">Hide modal</button>

        </div>
    </teleport>

</template>

<script setup>

//defineProps does not need to be imported. Just simply use it. Props is an object, containing objects
let props = defineProps(
    {
        //This is for the v-model in the parent component. Similar like the 'input' with v-model in Vue 2.
        modelValue: {
            type: Boolean,
            default: false
        },

        //We are sending a props title from the parent component
        title: {
            type: String,
            default: 'No props defined.'
        }
    }
);
// Using the props in the script
console.log('title:', props.title);

const emit = defineEmits([
    'update:modelValue'
]);

/**
 * The updateModel trick, which is used to update the parents v-model from the child component.
 * What we do here: we are emitting an update:modelValue emit. The new value of the parents v-model
 * should be false. Of course, the 'update:modelValue' first must be created by the defineEmits(),
 * only after that we can actually use/emit the 'update:modelValue' emit.
 */
function hideModal(){
    emit('update:modelValue', false)
}



</script>

<style>
.modal-dark {
  background: #333;
  color: white;
  padding: 10px;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
</style>