import { useButton, useRadios, useSwitch, useSelect } from '../../components/YubiForm/createFormElement';

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

const GenderRadios = useRadios(
  'gender',
  '性别',
  {
    options: [
      { label: '男', value: 0 },
      { label: '女', value: 1 },
    ],
    span: 6,
  }
)

const SingleRadios = useRadios(
  'single',
  '是否单身',
  {
    options: [
      { label: '是', value: 0 },
      { label: '否', value: 1 },
    ],
    span: 6,
  }
)

const HandsomeRadios = useRadios(
  'handsome',
  '丑吗？',
  {
    options: [
      { label: '丑', value: 0 },
      { label: '不丑', value: 1 },
      { label: '帅哥你懂吧', value: 2 },
    ],
    rules: (formData) => {
      return {
        type: 'number',
        validator: function (_, value, callback) {

          if (value === undefined) {
            callback();
          } else if (value === 2 && formData.gender === 0 && formData.single === 0) {
            callback(new Error('帅哥还单身？丑逼就丑逼，还不敢认了？'));
          } else {
            callback();
          }
        }
      }
    },
    span: 12,
    show: (formData) => formData.gender === 0,
  }
)

const ProvinceSelect = useSelect(
  'province_id',
  '省份',
  {
    options: provinceList.map(item => ({
        value: item.province_id,
        label: item.province_name
      })),
  },
  (province_id, { formData, dispatch }) => {

    const cityOptions = cityList
                          .filter(item => item.province_id === province_id)
                          .map(item => ({ label: item.city_name, value: item.city_id }));

    dispatch('CitySelect', 'options', cityOptions);
    cityOptions.length > 0 && (formData.city_id = cityOptions[0].value); 
  }
)

const CitySelect = useSelect(
  'city_id',
  '城市',
  {
    options: []
  },
)

const MarriageSelect = useSelect(
  'marriage',
  '婚姻状况',
  {
    options: [
      { label: '未婚', value: 0 },
      { label: '已婚', value: 1 },
      { label: '离异', value: 2 },
      { label: '丧偶', value: 3 },
    ]
  }
)

const HasChildRadios = useRadios(
  'hasChild',
  '是否有孩子',
  {
    options: [
      { label: '无', value: 0 },
      { label: '有', value: 1 },
    ]
  }
)

const WantChildRadios = useRadios(
  'wantChild',
  '是否打算备孕',
  {
    options: [
      { label: '无', value: 0 },
      { label: '有', value: 1 },
    ],
    show: (formData) => formData.hasChild === 0 && formData.gender === 1,
  }
)

const CityGuySwitch = useSwitch(
  'isCityGuy',
  '是否城镇户籍',
)


const SubmitButton = useButton(
  '提交', 
  ({vm, formConfig, formData}) => {
    vm.$refs[formConfig.ref].validate((valid) => {
      if (valid) {
        console.log(formData)
        console.log(vm.$refs[formConfig.ref].getFormData());

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

const ResetButton = {
  text: '重置',
  _type: 'button',
  span: 4,
  _click: ({vm, formConfig}) => {
    vm.$refs[formConfig.ref].resetFields();
  }
}


const formLineList = [
  {
    gutter: 20,
    formItemList: { GenderRadios, SingleRadios, HandsomeRadios }
  },
  {
    gutter: 20,
    show: (formData) => formData.single === 1,
    formItemList: { MarriageSelect, HasChildRadios, WantChildRadios }
  },
  {
    gutter: 20,
    formItemList: { ProvinceSelect, CitySelect, CityGuySwitch }
  },
  {
    formItemList: { SubmitButton, ResetButton }
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
  onUpdate: (context) => {
    console.log('formData update. ', context)
  }
}
