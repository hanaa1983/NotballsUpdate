<template>
    <el-card>
     <el-row class="item">
      <el-col :span="24">
        <textarea 
        v-autofocus
        class="textarea"
       :value="modelValue"
       @input="$emit('update:modelValue',$event.target.value)" 
         type="textarea"
        ref="textAreaRef"
        />
      </el-col>
      </el-row>
      <slot name="buttons"/>
      <!--el-row class="item">
        <el-col :span="24" :offset="20">
          <el-button  type="primary" round>Add Note </el-button>
          
       </el-col>
      </el-row-->
    </el-card>
    
  
  </template>
  <script setup>
  import { ref } from 'vue'
  import { vAutofocus } from '@/Directeves/vAutofocus'
   const textAreaRef = ref(null)
  const props = defineProps({
    modelValue:{
        type:String,
        required:true

    }
  })
  /*
  emits
  */
 const emit = defineEmits(['update:modelValue'])
 const focusTextArea=()=>{
  textAreaRef.value.focus()
 }
 defineExpose({
  focusTextArea
 })
  
 
 </script>
  <style>
  .item{
    margin-top: 20px;
    margin-bottom: 20px;
    
  }
  .textarea{
    width: 100%;
    height:100px;
    padding :10px 
  }
  </style>
 