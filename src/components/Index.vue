<template>
  <div class="index">
     <el-container>

       <el-header style="text-align: right; font-size: 12px">
         <el-dropdown>
           <i class="el-icon-setting" style="margin-right: 15px"></i>
           <el-dropdown-menu slot="dropdown">
             <el-dropdown-item>查看</el-dropdown-item>
             <el-dropdown-item>新增</el-dropdown-item>
             <el-dropdown-item>删除</el-dropdown-item>
           </el-dropdown-menu>
         </el-dropdown>
         <span>王小虎</span>
       </el-header>

        <el-main>

        </el-main>
      </el-container>
  </div>
</template>

<script>
  export default {
      name: "index",
       data(){
        return {

         }
       }
  }
</script>

<style scoped>
  .index{
    margin-top: 10px;
    background-color: yellow;
  }
  .el-container{
    margin-top: 0;
    background-color: lavender;
  }
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height:0px;
  }

</style>
