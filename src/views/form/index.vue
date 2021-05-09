<template>
  <div class="app-container">
    <yubi-form :formConfig="myForm" />
    <div>
      ---
    </div>
    <yubi-form :formConfig="selectForm" />
  </div>
</template>

<script>

import YubiForm from '../../components/YubiForm';
import myForm from './myForm.config';
import selectForm from './selectForm.config';

export default {
  components: {
    YubiForm
  },
  data() {
    
    return {
      myForm,
      selectForm
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



