import { defineStore } from 'pinia';

export const useStoreNotes = defineStore(
    // 1. argument: the name of the store
    'notes', 
    // 2. argument: an object, that contains state, actions, and getters
    {
        /**
         * The state
         * 
         */
        state: () => {
            return { 
                notes: [
                    {
                        id: 'id1',
                        content: 'lorem ipsum 1'
                    },
                    {
                        id: 'id2',
                        content: 'lorem ipsum 2'
                    }
                ],
            }
        },

        /**
         * The actions
         * Actions can have more than one arguments in Vue 3!
         */ 
        actions: {

            addNote(newContent) {

                //The new note...
                let note = {
                    
                    //To access another action in Pinia store, we must use 'this.'
                    id: this.createUniqueId(),
                    content: newContent
                };
                
                /**
                 * Adding the new note to all notes
                 * To acces a variable from the Pinia store, must use 'this.'
                 */
                this.notes.unshift(note);
                
            },
            
            createUniqueId(){
                let currentDate = new Date().getTime();//returns integer, but we need a string as id
                let id = currentDate.toString();//so we do toString here
                return id;
            },

            updateNote(id, content){
                //get the index of the note that we want to update
                let index = this.notes.findIndex(note => note.id === id)
                //we use the index to find our note, and update it ot the new content
                this.notes[index].content = content;

            },
            
            deleteNote(noteToDelete){
                this.notes = this.notes.filter( note => note.id !== noteToDelete.id );
            }
        },

        /**
         * The getters
         */
        getters: {

            /**
             * To trigger this getter in a component, you must NOT use ()!!!!
             * So trigger like this: storeNotes.getNoteContent;// no () used!!!
             * 
             * Do not forget: this getNoteContent is not a function, it is just an object property
             * that has assigned a function.
             */
            getNoteContent:  (state) => {

                /**
                 * This is how a getter can work with arguments. Here we have two AF, one inside
                 * of the other.
                 */
                return (id) => {
                    /**
                     * This creates a filtered array, that contains 1 note object. We select the
                     * one and only note with the [0], and then we select the content of the note
                     * with the 'content'.
                     */
                    return state.notes.filter(note => note.id === id)[0].content;
                }
            },

            /**
             * Returns the number of all notes.
             */
            totalNotesCount: (state) => {
                return state.notes.length;
            },

            /**
             * For every note content propery will check the number of characters, and will add it to
             * let count. This way at the end of the loop the let count will have the total number
             * of characters.
             */
            totalCharacterCount: (state) => {
                let count = 0;
                state.notes.forEach(note => {
                    count += note.content.length;
                });

                return count;
            }
        },
    }
);