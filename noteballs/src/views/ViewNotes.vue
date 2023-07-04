<template>
    <div class="notes">

        <!-- VIEW FROM CREATING AND LISTING NOTES - PARENT 1 -->

        <!-- CREATE NOTE COMPONENT -->
        <AddEditNote
            v-model="newNote"
            ref="addEditNoteRef"
            placeholder="Add a new note"
            label="Create a new note"
        >
            
            <!-- Notice the v-slot!!! -->
            <template v-slot:buttons>

                <!-- We are sending this button to the child component through a named slot -->
                <button 
                    @click="addNote"
                    :disabled="newNote === ''"
                    class="button is-link has-background-success"
                >
                    Create note
                </button>

            </template>
        </AddEditNote>
        
        <!-- LOOPING OUT ALL EXISTING NOTES -->
        <Note
            v-for="note in storeNotes.notes"
            :key="note.id"
            :note="note"
        ></Note>

    </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useStoreNotes } from '@/stores/storeNotes.js';
import Note from '@/components/Notes/Note.vue';
import AddEditNote from '../components/Notes/AddEditNote.vue';
import { useWatchCharacters } from '@/use/useWatchCharacters.js';//here we import our composable

const newNote = ref('');//When we use this variable, in script, we always must use newNote.value

/**
 * These are the notes from the storeNotes Pinia store. We access the notes from Pinia like this:
 * storeNotes.notes
 * storeNotes: this is the name of the Pinia store, that contains notes
 * notes: this is the name of the variable, that actually has the note objects
 */
const storeNotes = useStoreNotes();

const addEditNoteRef = ref(null);

function addNote(){

    /**
     * Here we trigger an action from Pinia store
     */
    storeNotes.addNote(newNote.value)

    //Resetting the input field
    newNote.value = '';

    /**
     * The focusTextarea() is defined in the child AddEditNote.vue component. We target this 
     * component with the help of a ref.
     */
    addEditNoteRef.value.focusTextarea();

}


/**
 * Here we trigger our composable, we trigger the composable function, and we give it the newNote
 * as an argument, so it would watch this variable.
 */
useWatchCharacters(newNote);



</script>