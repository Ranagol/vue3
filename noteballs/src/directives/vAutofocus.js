/**
 * Below we make a custom directive in Vue3. When we open http://127.0.0.1:5173/#/, we want
 * an automatic focus to place the cursor into the 'Create new note' textarea.
 * 
 * The constant name must start with 'v'.
 * 
 * The function will take the html element (where this directive is) as argument
 */
export const vAutofocus = {
    mounted: (element) => {
        element.focus();
    }
}