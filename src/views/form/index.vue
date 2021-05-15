<template>
  <div class="app-container">
    <!-- <yubi-form :formConfig="myForm" />
    <div>
      --- 
    </div> -->
    <yubi-form :formConfig="SelectForm" />
    <!-- <yubi-form :formConfig="YourConfig" /> -->

    <!-- <el-input
      v-model="test"
      placeholder="请输入内容">
      <i slot="prefix" class="el-input__icon el-icon-search"></i>
    </el-input> -->
  </div>
</template>

<script>

import YubiForm from '../../components/YubiForm';
// import myForm from './myForm.config';
import { SelectForm } from './selectForm.config';

export default {
  components: {
    YubiForm
  },
  data() {

    return {
      // myForm,
      SelectForm,
      test: ''
    }
  },
  created() {
  },

  methods: {
    
  }
}

</script>

<style scoped>
.line{
  text-align: center;
}
</style>



