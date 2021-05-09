
interface ISelectOption {
  label: string;
  value: string | number;
}

interface IElSelect {
  filterable?: boolean;
  allowCreate?: boolean;
  options: ISelectOption[];
  size?: 'medium' | 'small' | 'mini';
  clearable?: boolean;
}

interface IELRadios {
  change: (label: string | number | boolean) => void;
  size?: 'medium' | 'small' | 'mini';
  isButton?: boolean; // el-radio or el-radio-button
  options: {
    label: string | number | boolean;
    disabled: boolean;
    border: boolean;
    name: string;
  }[];
}

interface IElCheckboxes {
  change: (newValue: any) => void;
  size?: 'medium' | 'small' | 'mini';
  isButton?: boolean; // el-Checkbox or el-Checkbox-button
  options?: {
    label?: string | number | boolean;
    trueLabel?: string | number;
    falseLabel?: string | number;
    disabled?: boolean;
    border?: boolean;
    name?: string;
    checked?: boolean;
  }[];
}

interface IElButton {
  text: string;
  click: (vm: any, formName: string, formData: any) => void;
  buttonType?: 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'text';
  size?: 'medium' | 'small' | 'mini';
  round?: boolean;
  circle?: boolean;
  loading?: boolean;
  disabled?: boolean;
  icon?: string;
}

interface IElInput {
  inputType: 'text' | 'textarea' | 'password';
  clearable?: boolean;
  size?: 'medium' | 'small' | 'mini';
  placeholder?: string;
}

type TFormItem = 'select' | 'input' | 'button' | 'radios' | 'checkboxes' | 'buttonGroup' | 'switch' | 'inputNumber';

interface IFormItem {
  type: TFormItem;
  prop?: string; // 这个是v-model的值
  label?: string;
  size?: 'medium' | 'small' | 'mini'; // 控制该表单域下的组件大小
  width?: string;
  span?: number; // default 4
  show?: (formData: any) => boolean;
}

interface ElIForm {
  size: 'medium' | 'small' | 'mini';
}

interface IForm {
  defaultFormData: Object;
  rules: any;
  labelPosition: 'top' | 'left' | 'right';
  labelWidth: string | number;
  width: string | number;
  ref: string;
  formLineList: IFormLine[];
  watchProp?: string;
  watchFunc?: (formData) => void;
}

interface IFormLine {
  title?: string;
  show: (formData: any) => Boolean; // formData => formData.status === 1 
  formItemList: IFormItem[];
  gutter?: number;
  minHeight?: number | string; 
  maxHeight?: number | string; 
}

const statusSelect: (IFormItem & IElSelect) = {
  type: 'select',
  prop: 'status',
  label: '状态',
  options: [
    { label: '开始', value: 0 },
    { label: '结束', value: 1 }
  ],
}

const submitButton: (IFormItem & IElButton) = {
  text: '提交',
  type: 'button',
  buttonType: 'primary',
  click: (vm: any, formName: string) => {
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

const resetButton: (IFormItem & IElButton) = {
  text: '重置',
  type: 'button',
  click: (vm: any, formName: string) => {
    vm.$refs[formName].resetFields();
  }
} 
  
const nameInput: (IElInput & IFormItem) = {
  type: 'input',
  prop: 'name',
  inputType: 'text',
  placeholder: '请输入名字',
}

const formLine: IFormLine = {
  show: () => true,
  formItemList: [ statusSelect, submitButton, resetButton ]
}
  
const defaultFormData = {
  status: 0,
}

const rules = {
  status: { required: true }
}

const myForm: IForm = {
  ref: 'myForm',
  defaultFormData,
  rules,
  width: 600,
  labelWidth: 100, // or '100px'
  labelPosition: 'top',
  formLineList: []
}