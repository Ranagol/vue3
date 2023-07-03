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

    </div>
</template>

<script setup>
import { useStoreNotes } from '@/stores/storeNotes';

const storeNotes = useStoreNotes();

</script>