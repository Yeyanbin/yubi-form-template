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

    const nameInput = {
      type: 'input',
      prop: 'name',
      label: '名字',
      inputType: 'text',
      placeholder: '请输入名字...',
    }

    const startDescInput = {
      type: 'input',
      prop: 'startDescription',
      label: '开始状态描述',
      inputType: 'textarea',
      // placeholder: '请输入...',
    }
      
    const submitButton = {
      text: '提交',
      type: 'button',
      span: 4,
      buttonType: 'primary',
      click: (vm, formName, formData) => {
        console.log(vm, )
        vm.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
            console.log(formData)
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
      span: 4,
      click: (vm, formName) => {
        vm.$refs[formName].resetFields();
      }
    }
        

    const formLineList = [
      {
        gutter: 20,
        formItemList: [ statusSelect, operatorSelect, nameInput ]
      },
      {
        gutter: 20,
        show: (formData) => formData.status === 0,
        formItemList: [ startDescInput ]
      },
      {
        formItemList: [ submitButton, resetButton ]
      }
    ]

    const defaultFormData = {
      status: 0,
      // operator: 0,
      // name: '默认名字'
    }

    const rules = {
      status: { required: true },
      name: { required: true }

    }

    const myForm = {
      ref: 'myForm',
      defaultFormData,
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



