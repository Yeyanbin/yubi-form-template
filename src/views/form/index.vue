<template>
  <div class="app-container">
    <yubi-form :formConfig="myForm" />
    <div>
      --- 
      <el-button @click="updateCity"></el-button>
    </div>
    <yubi-form :formConfig="SelectForm" />
  </div>
</template>

<script>

import YubiForm from '../../components/YubiForm';
import myForm from './myForm.config';
import { SelectForm, updateCity } from './selectForm.config';

export default {
  components: {
    YubiForm
  },
  data() {

    return {
      myForm,
      SelectForm
    }
  },
  created() {
  },

  methods: {
    updateCity
  }
}


</script>

<style scoped>
.line{
  text-align: center;
}
</style>



