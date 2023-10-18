<template>
   
    <AddEditNote
    v-model="newContent">
        <template #buttons>
            <el-row class="item">
        <el-col :span="24" :offset="20">
          <el-button 
          @click="handleSaveClicked" 
          type="primary" round>Save Note </el-button>
          
       </el-col>
      </el-row>
        </template>
    </AddEditNote>
   
</template>

<script setup>
/*
imports
*/
import { ref } from 'vue'
import AddEditNote from '@/components/Notes/AddEditNote.vue'
import { useStoreNotes } from '@/Store/StoreNotes';
import { useRoute ,useRouter } from 'vue-router'
const storeNotes=useStoreNotes()
const newContent=ref('')

const route=useRoute()
const router=useRouter()
newContent.value=storeNotes.getNoteContent(route.params.id)
const handleSaveClicked=()=>{
    storeNotes.updateNote(route.params.id,newContent.value)
    router.push('/')
}

</script>