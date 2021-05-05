<template>
  <div class="app-container">
    <yubi-form :formConfig="myForm" />
  </div>
</template>

<script>

import YubiForm from '../../components/YubiForm';

export default {
  components: {
    YubiForm
  },
  data() {
        
    const statusSelect = {
      type: 'select',
      prop: 'status',
      label: '状态',
      options: [
        { label: '开始', value: 0 },
        { label: '结束', value: 1 }
      ],
    }

    const operatorSelect = {
      type: 'select',
      prop: 'operator',
      label: '操作人',
      options: [
        { label: 'Yubi', value: 0 },
        { label: 'Xin', value: 1 }
      ],
    }
      
    const submitButton = {
      text: '提交',
      type: 'button',
      span: 2,
      buttonType: 'primary',
      click: (vm, formName) => {
        console.log(vm, )
        vm.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        })
      }
    }
      
    const resetButton = {
      text: '重置',
      type: 'button',
      span: 2,
      click: (vm, formName) => {
        vm.$refs[formName].resetFields();
      }
    }
        

    const formLineList = [
      {
        gutter: 20,
        showProp: () => true,
        formItemList: [ statusSelect, operatorSelect ]
      },
      {
        showProp: () => true,
        formItemList: [ submitButton, resetButton ]
      }
    ]

    const formData = {
      status: 0,
      // operator
    }

    const rules = {
      status: { required: true }
    }

    const myForm = {
      ref: 'myForm',
      formData,
      rules,
      width: 600,
      labelWidth: 100, // or '100px'
      labelPosition: 'top',
      formLineList,
    }
    return {
      myForm
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



