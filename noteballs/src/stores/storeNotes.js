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
            
            deleteNote(noteToDelete){
                this.notes = this.notes.filter( note => note.id !== noteToDelete.id );
            }
        },

        /**
         * The getters
         */
        getters: {

        },
    }
);