import { watch } from 'vue';//importing watch for the watcher...

/**
 * The composable is an exported function. The function must have the same name as the .js file.
 * We want a watcher function, that will count the characters in the note content, and what will
 * trigger an alert if there are more than 100 characters.
 * valueToWatch = this is the value that is watched how many characters it has
 * maxChars = the max number of allowed characted is xx for ViewStats and yy for addEditNote.
 */
export function useWatchCharacters(valueToWatch, maxChars = 100){

    /**
     * Whenever we add a letter in the input field, there will be a change in the newNote. This watcher
     * is triggered, when there is a change.
     */
    watch(valueToWatch, (newValue) => {
        if (newValue.length > maxChars) {
            alert(`Only ${maxChars} characters allowed.`);
        }
    });
}