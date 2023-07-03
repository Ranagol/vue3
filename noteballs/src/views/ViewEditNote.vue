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
                class="button is-link is-light mr-2"
            >
                Cancel
            </button>

            <!-- We are sending this SAVE button to the child component through a named slot -->
            <button 
                class="button is-link has-background-link"
                :disabled="!noteContent"
                @click="handleSaveClicked"
            >
                Save edited note
            </button>

        </template>
    </AddEditNote>

</template>

<script setup>
import AddEditNote from '../components/Notes/AddEditNote.vue';
import { ref } from 'vue';
import { useStoreNotes } from '@/stores/storeNotes';
import { useRoute, useRouter } from 'vue-router';

/**
 * The note content that we want to edit.
 */
const noteContent = ref('');

//We need to get the id of the note from the url. Example: http://127.0.0.1:5173/#/editNote/id1
const route = useRoute();
const router = useRouter();
const id = route.params.id;

//Accessing the storage actions, getters, state for the note content that we want to edit
const storeNotes = useStoreNotes();

/**
 * noteContent.value - /must use shitty value here, because we created the noteContent with ref('')
 * 
 * Also, this is the way how we can pass an argument into a storage getter.
 */
noteContent.value = storeNotes.getNoteContent(id);

/**
 * Saves the new, updated note.
 */
function handleSaveClicked(){
    //does the note saving
    storeNotes.updateNote(id, noteContent.value);
    //redirects the user
    router.push('/');

}


</script>


 