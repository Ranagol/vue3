<template>
    <div class="card has-background-success-dark p-4 mb-5">

        <!-- ADD NEW NOT INPUT FIELD -->
        <div class="field">
            <div class="control">

                <!-- Notice that this here is a div like something, not na input field. So, we
                will need html ref to get the text from html to Vue.-->
                <textarea
                    ref="newNoteRef"
                    class="textarea"
                    placeholder="Add a new note"
                />
            </div>
        </div>

        <!-- ADD NEW NOTE BUTTON -->
        <div class="field is-grouped is-grouped-right">
            <div class="control">
                <slot name=""></slot>
            </div>
        </div>
    </div>    
</template>