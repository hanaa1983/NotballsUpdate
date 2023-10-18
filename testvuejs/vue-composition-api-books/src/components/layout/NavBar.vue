



<template>
 <el-header>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    :ellipsis="false"
   
  >
    <el-menu-item index="0">NoteBalls</el-menu-item>
    <div class="flex-grow" />
    <el-menu-item index="1">
      <RouterLink to="/">Notes</RouterLink></el-menu-item>
    <el-menu-item index="2"><RouterLink to="/stats">Stats</RouterLink></el-menu-item>
    
  </el-menu>
 </el-header>
</template>
<script setup>
import { ref} from 'vue'
import { RouterLink } from 'vue-router';


const activeIndex = ref('0')

</script>
<style>
.flex-grow {
  flex-grow: 1;
}
</style>