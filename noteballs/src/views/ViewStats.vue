<template>
    <div class="stats">
        <h1>Stats</h1>

        <!-- TABLE -->
        <table class="table is-fullwidth">
            <thead>
                <tr>
                    <th>Stats</th>
                    <th>Value</th>

                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Number of all our notes</td>
                    <!-- We use the Pinia getter from storeNotes storage to display a value -->
                    <td>{{  storeNotes.totalNotesCount }}</td>
                </tr>
                <tr>
                    <td>Number of characters of all notes</td>
                    <!-- We use the Pinia getter from storeNotes storage to display a value -->
                    <td>{{ storeNotes.totalCharacterCount }}</td>
                </tr>
            </tbody>
        </table>

        <!-- INPUT FIELD -->
        <input
            v-model="comment"
            class="input"
            type="text"
            placeholder="Do you love notes?"
            v-autofocus
        />

    </div>
</template>

<script setup>
import { useStoreNotes } from '@/stores/storeNotes';
import { vAutofocus } from '@/directives/vAutofocus';//here we import our custom dir
import { useWatchCharacters } from '@/use/useWatchCharacters.js';//here we import our composable
import { ref } from 'vue';

const storeNotes = useStoreNotes();

let comment = ref('');

/**
 * The maximum of characters, after the watcher will be triggerin an alert.
 */
const maxAllowedCharacters = 50;

/**
 * Here we trigger our composable, we trigger the composable function, and we give it the newNote
 * as an argument, so it would watch this variable.
 */
useWatchCharacters(comment, maxAllowedCharacters);

</script>