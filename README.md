- to [Github Repo](https://github.com/Yeyanbin/yubi-form-template) 
- to [Github Page](https://yeyanbin.github.io/yubi-form-template/dist/#/form/index)

<div align="center">
  <h1>这是yubi-form, 配置化表单的小尝试....</h1>
  <span>
    <img src="https://img.shields.io/badge/vue-2.6.10-green.svg">
  </span>
  <span>
    <img src="https://img.shields.io/badge/element ui-2.13.2-green.svg">
  </span>
  <span>
    <img src="https://img.shields.io/badge/vuex-3.1.0-green.svg">
  </span>
  <span>
    <img src="https://img.shields.io/badge/vue router-3.0.6-green.svg">
  </span>
  <span>
    <img src="https://img.shields.io/badge/Jsx-blue.svg">
  </span>
</div>

对 Element ui的form组件进行二次封装。

### 实现的目标
1. 在一个表单项变更时去关联另一个表单项
2. 一个较为灵活的布局
3. 将表单拆分为多个模块，自由的切换

### 介绍
组件：`/components/YubiForm` 
demo：`/views/form`, 两个表单配置文件

- 支持el-form的组件的属性，同时也支持将其变成方法来获取属性值。
  - [handleAttrs和handleFunc方法](https://github.com/Yeyanbin/yubi-form-template/blob/master/src/components/YubiForm/mixin.js#L40)
  - [封装的组件中使用](https://github.com/Yeyanbin/yubi-form-template/blob/85b03d8dc01c0cfaf1830085a786c34abc99bd9b/src/components/YubiForm/components/YubiRadios.js#L13)

```
// 例如下面的type属性
const submitButton = useButton('提交', 
  (vm, formConfig, formData) => {
    vm.$refs[formConfig.ref].validate((valid) => {
      if (valid) {
        // todo...
      }
    });
  }, 
  {
    span: 5,
    type: (vm, _, formData) => formData.status === 0? 'primary': 'warning',
  }
)
```

### Update List

- 2021-5-12 增加了YubiForm对el-form封装时，增加了getFormData方法，增加了`Checkbox (未测试)`
  - 其筛选了一些被隐藏的选项
  
![](./doc/img/getFormData.png);

```
// 上面情况中，直接获取FormData可能会导致以下数据
{
  city_id: 0,
  gender: 1,
  hasChild: 1,
  isCityGuy: undefined,
  marriage: undefined,
  province_id: 0,
  single: 0,
  wantChild: 1,
}
// 而经过筛选的是下面的
{
  city_id: 0,
  gender: 1,
  province_id: 0,
  single: 0,
}
```

- 2021-5-16
1. 增加有限状态机（但目前只有onUpdate，FormData更新时触发）
2. 增加IoC设计分发设置组件的值的行为
3. YubiForm的初始化逻辑封装到hooks
4. 二次封装组件的mixin，增加attr白名单，还有方法attr的传参用context包住。