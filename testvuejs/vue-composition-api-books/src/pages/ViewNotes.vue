<template>
    <AddEditNote
    v-model="newNote"
    ref="AddEditNoteRef"
    >
       <template #buttons>
        <el-row class="item">
        <el-col :span="24" :offset="20">
          <el-button 
          @click="addNote" type="primary" round>Add Note </el-button>
          
       </el-col>
      </el-row>
       </template> 
    </AddEditNote>
    <div class="notes">
        <Note
         v-for="note in storeNotes.notes"
         :key= "note.id"
         :note="note"/>
         
    </div>
</template>
<script setup>
/*
imports
*/
import { ref } from 'vue'
import { useStoreNotes } from '@/Store/StoreNotes'
import Note from '@/components/Notes/Note.vue'
import AddEditNote from  '@/components/Notes/AddEditNote.vue'
import { useWatchCharecters } from '@/use/useWatchCharecters'

 const newNote=ref('')
 const AddEditNoteRef = ref(null)
/*
store
*/

const storeNotes = useStoreNotes()
const addNote = () => {
    storeNotes.addNote(newNote.value)
    newNote.value=''
    AddEditNoteRef.value.focusTextArea()


}
useWatchCharecters(newNote,100)

</script>