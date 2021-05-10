import { useButton, useInput, useSelect } from '../../components/YubiForm/createItem';

let selectFormStore = {
  debug: true,
  state: {
    message: 'Hello!'
  },
  setMessageAction (newValue) {
    if (this.debug) console.log('setMessageAction triggered with', newValue)
    this.state.message = newValue
  },
  clearMessageAction () {
    if (this.debug) console.log('clearMessageAction triggered')
    this.state.message = ''
  }
}

const provinceList = [
  { province_id: 0, province_name: '广东省' },
  { province_id: 1, province_name: '广西省' },
  { province_id: 2, province_name: '湖南省' },
  { province_id: 3, province_name: '福建省' },
];

let cityList = [
  { city_id: 0, province_id: 0, city_name: '广州市' },
  { city_id: 1, province_id: 0, city_name: '佛山市' },
  { city_id: 2, province_id: 0, city_name: '肇庆市' },
  { city_id: 3, province_id: 1, city_name: '南宁市' },
  { city_id: 4, province_id: 1, city_name: '桂林市' },
  { city_id: 5, province_id: 2, city_name: '长沙市' },
  { city_id: 6, province_id: 3, city_name: '厦门市' },
];

let i = 0
export const updateCity = () => {
  ++i;
  cityList = [
    { city_id: 6+i, province_id: 0, city_name: 'AA市'+i+'' },
    ...cityList
  ]
}

const ProvinceSelect = useSelect(
  'province_id',
  '省份',
  {
    options: provinceList.map(item => ({
        value: item.province_id,
        label: item.province_name
      })),
  },
  (province_id, formData) => {
    CitySelect.options 
      = cityList.filter(item => item.province_id === province_id)
      .map(item => { return { label: item.city_name, value: item.city_id }});
    CitySelect.options.length > 0 && (formData.city_id = CitySelect.options[0].value); 
  }
)

const CitySelect = useSelect(
  'city_id',
  '城市',
  {
    options: []
  },
)

const SubmitButton = useButton(
  '提交', 
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
    type: 'primary',
  }
)
const formLineList = [
  {
    gutter: 20,
    formItemList: [ ProvinceSelect, CitySelect ]
  },
  {
    formItemList: [ SubmitButton ]
  },
]

const defaultFormData = {

}

const rules = {
  province_id: { required: true },
  city_id: { required: true }
}
  
export const SelectForm = {
  ref: 'selectForm',
  defaultFormData,
  rules,
  width: 600,
  labelWidth: 100, // or '100px'
  labelPosition: 'top',
  formLineList,
}
