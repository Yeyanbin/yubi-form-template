import { useButton, useInput, useSelect } from '../../components/YubiForm/createItem';

const statusSelect = {
  _type: 'select',
  _prop: 'status',
  label: '状态',
  options: [
    { label: '开始', value: 0 },
    { label: '结束', value: 1 }
  ],
}

const operatorSelect = {
  _type: 'select',
  _prop: 'operator',
  label: '操作人',
  options: [
    { label: 'Yubi', value: 0 },
    { label: 'Xin', value: 1 }
  ],
}

const nameInput = {
  _type: 'input',
  _prop: 'name',
  label: '名字',
  type: 'text',
  placeholder: '请输入名字...',
}

const startDescInput = {
  _type: 'input',
  _prop: 'startDescription',
  span: 18,
  label: '开始状态描述',
  type: 'textarea',
  // placeholder: '请输入...',
}
  
const submitButton = useButton('提交', 
  (vm, formConfig, formData) => {
    vm.$refs[formConfig.ref].validate((valid) => {
      if (valid) {
        alert('submit!');
        console.log(formData)
      } else {
        console.log('error submit!!');
        return false;
      }
    });
  }, 
  {
    span: 5,
    type: (vm, _, formData) => formData.status === 0? 'primary': 'warning',
  }
)
  
const resetButton = {
  text: '重置',
  _type: 'button',
  span: 4,
  _click: (vm, formConfig) => {
    vm.$refs[formConfig.ref].resetFields();
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
    formItemList: [ 
      submitButton, 
      resetButton,
    ]
  }
]

const defaultFormData = {
  status: 0,
  // operator: 0,
  name: '默认名字',
}

const rules = {
  status: { required: true },
  name: { required: true }

}
  
export default {
  ref: 'myForm',
  defaultFormData,
  rules,
  width: 600,
  labelWidth: 100, // or '100px'
  labelPosition: 'top',
  formLineList,
}
