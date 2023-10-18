

<template>
  <NavBar/>
  
    <RouterView/>
    <div>
    <el-icon :size="100" :color="red">
      <Edit />
    </el-icon>
    <!-- Or use it independently without derive attributes from parent -->
    <Edit />
  </div>
 
</template>
<script setup>
 /*
 imports
 */
import NavBar from '@/components/layout/NavBar.vue'



</script>

<style>
@import 'bulma/css/bulma.min.css';
</style>

