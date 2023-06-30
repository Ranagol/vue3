<template>
    
    <div
        class="card mb-4"
    >
        <div class="card-content">
            
            <!-- NOTE CONTENT -->
            <div class="content">
                {{ note.content }}
            </div>

            <!-- NOTE LENGTH -->
            <div class="has-text-right has-text-grey-light mt-2">
                <small>{{ numberOfCharacters }} characters</small>
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
              @click.prevent="deleteNote"
              class="card-footer-item"
            >
                Delete
            </a>
        </footer>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useStoreNotes } from '@/stores/storeNotes.js';
const storeNotes = useStoreNotes();

//defineProps does not need to be imported. Just simply use it.
let props = defineProps(
    {
        //We are sending a props title from the parent component
        note: {
            type: Object,
            default: () => {}
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


</script>