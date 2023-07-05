import { defineStore } from 'pinia';
import { collection, getDoc, doc, setDoc, onSnapshot, deleteDoc, updateDoc, query, orderBy, addDoc} from 'firebase/firestore';
import { db } from '@/js/firebase.js';//importing the Firestore db into our storage

/**
 * collection in Firebase = table in sql
 * document in Firebase = record in sql
 * This is our notes collection.
 */
const notesCollectionRef = collection(db, 'notes');

/**
 * This is a query.
 */
const notesCollectionQuery = query(notesCollectionRef, orderBy("date", "desc"));

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
                //We store here the notes from Firestorm
                notes: [],
            }
        },

        /**
         * The actions
         * Actions can have more than one arguments in Vue 3!
         */ 
        actions: {

            /**
             * Gets notes from Firestorm db
             * collection in Firebase = table in sql
             * document in Firebase = record in sql
             * Since we must AWAIT for Firestrom response, we also must use 'await'.
             */
            async getNotes(){

                /**
                 * This below will grab all notes from Firestrom, but it will also keep listenin
                 * for changes in notes, and trigger/sync when there is a change - automatically.
                 * 
                 * onSnapshot is a hook, belonging to Firestore. Every hook always must be also
                 * turned off at the end of the cycle.
                 * 
                 * onSnapshot watches always...
                 */
                onSnapshot(notesCollectionQuery, (querySnapshot) => {
                    let notes = [];
                    querySnapshot.forEach((doc) => {
                        
                        //We create a note object, that will be stored in the storage
                        let note = {
                            id: doc.id,
                            content: doc.data().content,
                            date: doc.data().date
                        }

                        //Pushing the note into the notes array
                        notes.push(note);
                    });

                    //Simulating 2 s waiting time
                    setTimeout(() => {
                        //Here we replace the old notes with the new, updated notes
                        this.notes = notes;
                    });

                    
                });
            },

            /**
             * Adds note to Firestorm.
             * collection in Firebase = table in sql
             * document in Firebase = record in sql
             */
            async addNote(newContent) {

                /**
                 * Here we create a date string
                 */
                let currentDate = new Date().getTime();//returns integer, but we need a string as id
                let date = currentDate.toString();//so we do toString here

                
                /**
                 * Adding the new note to all notes in Firestore.
                 * Add a new document in collection "notes" in Firestore db
                 * 
                 * Once we added this note to Firestorm, the onSnapshot will trigger, and the
                 * new note will appear in our browser.
                 */
                const docRef = await addDoc(notesCollectionRef, {
                    content: newContent,
                    date//meaning... date:date
                });
            },

            /**
             * Updates note in Firestorm.
             */
            async updateNote(id, content){

                // Set the "capital" field of the city 'DC'
                await updateDoc(doc(notesCollectionRef, id), {
                    content//this is = to content:content
                });
            },
            
            /**
             * Deletes note from Firestorm.
             * Once we deleteda note in Firestorm, the onSnapshot will trigger, and the change will
             * in our browser.
             */
            async deleteNote(idToDelete){
                await deleteDoc(doc(notesCollectionRef, idToDelete));
            },

                
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