<template>
    <div class="modals">
        <h1>ModalsView</h1>

        <!-- Checkbox for switching between dark modal and ordinary modal -->
        <div>
            <label>
                Show dark modal?
                <input 
                    type="checkbox"
                    v-model="showDarkModal"
                >
            </label>
        </div>

        <!-- Button for showing the modal -->
        <button @click="showModal = true">Show modal</button>

        <!-- This is how we use dynamic component. Notice the :is="Modal" part. -->
        <component
            :is="showDarkModal ? ModalDark : Modal" 
            title="My modal title via props"
            v-model="showModal"
        >

            <!-- This below will go to the unnamed slot in the child component -->
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus itaque molestiae 
                dolor numquam, quas rerum nulla? Quod numquam quaerat natus repudiandae velit at 
                doloribus, tempore blanditiis labore ex nesciunt facilis!
            </p>

        </component>
    </div>
</template>

<script setup>
// 1 - Here are importing the child component
import Modal from '@/components/Modal.vue';
import ModalDark from '@/components/ModalDark.vue';
import { ref } from 'vue';

let showDarkModal = ref(false); 
let showModal = ref(false);

</script>

<style>
.modal {
  background: beige;
  padding: 10px;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
</style>