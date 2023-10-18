<template>
    <div class="stats">
        <el-table :data="tableData" class="table" stripe style="width: 100%">
            <el-table-column prop="stat" label="Stats" width="300" />
            <el-table-column  prop="value" label="Value" width="300" />
           
        </el-table>
    </div>
    <input v-model="loveNoteBalls"
    v-autofocus
    type="text"/>
</template>
<script setup>
/*
  imports
*/
  import { ref } from 'vue'
  import { useStoreNotes } from '@/Store/StoreNotes'
  import { vAutofocus } from '@/Directeves/vAutofocus'
  import { useWatchCharecters } from '@/use/useWatchCharecters'
  /*
  store
  */
 const storeNotes=useStoreNotes()
 const tableData = [
  {
   stat : 'notesNumber',
  'value':storeNotes.totalNotesCount },

   {stat: 'charactersNumber',
  'value':storeNotes.totalNotesCharecters } 
  
]
const loveNoteBalls=ref('')
useWatchCharecters(loveNoteBalls,25)


</script>

<style scoped>
.table{
    margin-top: 20px;
}
</style>