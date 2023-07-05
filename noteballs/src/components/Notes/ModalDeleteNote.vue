<template>
  <div class="modal is-active p-2">
    <div class="modal-background"></div>

    <!-- MODAL STARTS HERE -->
    <div
      class="modal-card"
      ref="modalCardRef"
    >
      <!-- MODAL HEADER -->
      <header class="modal-card-head">

        <!-- The security question -->
        <p class="modal-card-title">Delete Note?</p>

        <!-- The small x on the right that can close the modal -->
        <button
          @click="closeModal"
          class="delete"
          aria-label="close"
        >
        </button>
        
      </header>

      <section class="modal-card-body">
        Are you sure you want to delete this note?
      </section>

      <footer class="modal-card-foot is-justify-content-flex-end">

        <!-- CANCEL BUTTON -->
        <button
          @click="closeModal"
          class="button"
        >
          Cancel
        </button>

        <!-- DELETE BUTTON -->
        <button
          @click="storeNotes.deleteNote(noteId)"
          class="button is-danger"
        >
          Delete
        </button>
      </footer>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { onClickOutside } from '@vueuse/core';
import { useStoreNotes } from '@/stores/storeNotes';

const props = defineProps({

  /**
   * This is a variable, that controlls whether this modal should be showed or not
   */
  modelValue: {
    type: Boolean,
    default: false
  },
  noteId: {
    type: String,
    required: true
  }
})

//Storage access
const storeNotes = useStoreNotes()

/**
 * Closes the modal. At least 3 different things are calling this function.
 * false means: please do not show the modal any more
 * Closes the modal window, by sending a false value to the parent
 */
const emit = defineEmits(['update:modelValue'])
function closeModal() {
  emit('update:modelValue', false)
}

/**
 * click outside of the modal to close the modal. This is a VueUse package.
 */
const modalCardRef = ref(null);//defining what is the modal window for VueUse
onClickOutside(modalCardRef, closeModal);//Literally: on click outside of modal close the modal.

/**
 * Keyboard control.
 * We want to also be able to close the modal window by hitting the Esc key. For this, we have to use
 * vanilla JS event listeners.
 * document - this is the  DOM. In JavaScript, the Document Object represents the HTML document 
 * loaded in the web browser. We can access, change stuff with the document object. Or use event
 * listeners.
 * 
 * Every addEventListener has automatically access to all events. The first argument is the type of
 * the event. The second argument is a callback function.
 */
onMounted(() => {//creating an event listener
  document.addEventListener('keyup', handleKeyboard);
});
onUnmounted(() => {//closing an event listener (this is mandatory!)
  document.removeEventListener('keyup', handleKeyboard);
});

function handleKeyboard(e){
  if (e.key === 'Escape') {
    closeModal();
  }
}

</script>