<template>
    <div class="notes">

        <!-- <AddEditNote>
            <template v-slot:buttons>
                <button 
                    @click="addNote"
                    :disabled="newNote === ''"
                    class="button is-link has-background-success"
                >
                    Add new note
                </button>
            </template>
        </AddEditNote> -->

        <div class="card has-background-success-dark p-4 mb-5">

            <div class="field">
                <div class="control">

                    <textarea
                        v-model="newNote"
                        ref="newNoteRef"
                        class="textarea"
                        placeholder="Add a new note"
                    />
                </div>
            </div>

            <div class="field is-grouped is-grouped-right">
                <div class="control">
                    <button 
                        @click="addNote"
                        :disabled="newNote === ''"
                        class="button is-link has-background-success"
                    >
                        Add new note
                    </button>
                </div>
            </div>
        </div>
        
        <!-- DISPLAYING ALL EXISTING NOTES -->
        <Note
            v-for="note in storeNotes.notes"
            :key="note.id"
            :note="note"
        ></Note>

    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useStoreNotes } from '@/stores/storeNotes.js';
import Note from '@/components/Notes/Note.vue';
import AddEditNote from '../components/Notes/AddEditNote.vue';

const newNoteRef = ref(null);
const newNote = ref('');//When we use this variable, in script, we always must use .value

/**
 * These are the notes from the storeNotes Pinia store. We access the notes from Pinia like this:
 * storeNotes.notes
 * storeNotes: this is the name of the Pinia store, that contains notes
 * notes: this is the name of the variable, that actually has the note objects
 */
const storeNotes = useStoreNotes();

function addNote(){

    /**
     * Here we trigger an action from Pinia store
     */
    storeNotes.addNote(newNote.value)

    //Resetting the input field
    newNote.value = '';

    /**
     * 
     * When all this is done, we want our cursor to appear in the textarea with ref="newNoteRef".
     * Now for all this to work, first we had to create a reactive newNoteRef const, with false. 
     * Later this will contain the...
     */
    newNoteRef.value.focus();
}










</script>