<template>
 
   <el-card class="box-card">
    <p class="card-content">
     {{ note.content }}
        </p>
       
    <el-footer>
        
        <RouterLink 
        :to="`/editnote/${note.id}`"
        type="primary"  circle >Edit</RouterLink>
        <el-button 
        class="btn"
        @click="modals.deleteNote=true"
        type="danger" round >Delete</el-button>
    
    </el-footer>
    <DeleteNote
       v-if="modals.deleteNote"
       v-model="modals.deleteNote"
       :noteId="note.id"/>
  </el-card>
  
</template>


<script setup>
import { reactive } from "vue"
import { useRouter } from "vue-router";
import DeleteNote from '@/components/Notes/DeleteNote.vue'




const props = defineProps({
    note:{
        type:Object,
        required:true
    }
})

const modals = reactive({
    deleteNote:false
   
}


)
</script>
<style scoped>
.btn{
    margin-left: 10px;
    margin-bottom: 5px;
}

.card-content{
    padding :20px
}

</style>