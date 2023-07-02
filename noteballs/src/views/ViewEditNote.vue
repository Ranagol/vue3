<template>

    <!-- VIEW FOR EDITING NOTES - PARENT 2 -->

    <!-- Edits the note -->
    <AddEditNote
        ref="addEditNoteRef"
        v-model="noteContent"
        bgColor="link"
        placeholder="Edit note"
        label="Edit note"
    >
        
        <!-- Notice the v-slot!!! -->
        <template v-slot:buttons>

            <!-- We are sending this CANCEL button to the child component through a named slot -->
            <button 
                @click="$router.back()"
                class="button is-link is-light"
            >
                Cancel
            </button>

            <!-- We are sending this SAVE button to the child component through a named slot -->
            <button 
                class="button is-link has-background-link"
                :disabled="!noteContent"
            >
                Edit note
            </button>

        </template>
    </AddEditNote>

</template>

<script setup>
import AddEditNote from '../components/Notes/AddEditNote.vue';
import { ref } from 'vue';

const noteContent = ref('');

</script>


 