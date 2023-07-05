<template>
    
    <!-- ONE SINGLE NOTE DISPLAYING -->
    <div
        class="card mb-4"
    >
        <div class="card-content">
            
            <!-- NOTE CONTENT -->
            <div class="content">
                {{ note.content }}
            </div>

            <!-- NOTE LENGTH -->
            <div class="columns is-mobile  has-text-grey-light mt-2">
                <small class="column">{{ dateFormatted }}</small>
                <small class="column has-text-right">{{ numberOfCharacters }} characters</small>
            </div>

        </div>

        <!-- EDIT AND DELETE BUTTONS -->
        <footer class="card-footer">
            <RouterLink
                :to="`/editNote/${note.id}`"
                @click.prevent="editNote"
                class="card-footer-item"
            >
                Edit
            </RouterLink>

            <a
                @click.prevent="modals.deleteNote = true"
                class="card-footer-item"
            >
                Delete
            </a>


        </footer>

        <!-- This modal below is the 'Are you sure that you want to delete...? Type modal. -->
        <ModalDeleteNote
            v-if="modals.deleteNote"
            v-model="modals.deleteNote"
            :noteId="note.id"
        ></ModalDeleteNote>

    </div>
</template>

<script setup>
import { reactive, computed } from 'vue';
import { useStoreNotes } from '@/stores/storeNotes.js';
import ModalDeleteNote from '@/components/Notes/ModalDeleteNote.vue';
import { useNow, useDateFormat } from '@vueuse/core';

const storeNotes = useStoreNotes();

//defineProps does not need to be imported. Just simply use it.
let props = defineProps(
    {
        note: {
            type: Object,
            required: true
        }
    }
);

/**
 * Here we count the numbers of the note content, and we display it. There is no real reason to use
 * computed for this, this can be done much simpler, without computed. This is just a simple example
 * for the computed.
 */
let numberOfCharacters = computed(() => {
    return props.note.content.length;
});

function deleteNote(){
    storeNotes.deleteNote(props.note);
}


// MODAL FOR DELETING a note (Are you sure that you want to delete?)
const modals = reactive({
    //when we want to delete a note, than it is true, because we need the modal displayed for that
    deleteNote: false,
})


/**
 * COMPUTED FOR FORMATING DATE, USING VUEUSE DATEFORMAT
 * What we have in our note object is a timestamp string. So, from this we have to make a proper
 * date object.
 */
const dateFormatted = computed(() => {
    let date = new Date(parseInt(props.note.date));//timestamp string to int, int to date object transformation
    return useDateFormat(date,'YYYY-MM-DD HH:mm:ss').value;

})


</script>