<template>
  
  <el-dialog 
  model-value="modelValue"
    title="Delete Note?"
    width="30%"
    
  >
    <span>Are you sure you want to delete this note?</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="closeModal">Cancel</el-button>
        <el-button @click="deleteNote" type="danger">
          Delete
        </el-button>
      </span>
    </template>
   
  </el-dialog>

</template>

<script setup>

import { useStoreNotes } from '@/store/storeNotes'

/*
store
*/
const storeNotes=useStoreNotes()  
 
/*
props
*/
const props= defineProps({
  modelValue:{
      type:Boolean,
        default:false 
         },
    noteId:{
   type:String,
     required:true
    }
   })
  /* 
emits
  */
   const emit = defineEmits(['update:modelValue'])

  const closeModal=()=>{
     emit('update:modelValue',false)
 }


const deleteNote =  () =>{
  // closeModal()
   storeNotes.deleteNote(props.noteId)
   
   }
</script>
<style scoped>
.dialog-footer button{
  align-items: center;
  margin-bottom: 10px;
}
</style>

 