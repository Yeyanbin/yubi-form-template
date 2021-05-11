[github](https://github.com/Yeyanbin/yubi-form-template)

### 这是一个yubi-form [demo](https://yeyanbin.github.io/yubi-form-template/dist/#/form/index)

对 Element ui的form组件进行二次封装。

> 是对配置化表单的一个小小的探索。

### 实现的目标
1. 在一个表单项变更时去关联另一个表单项
2. 一个较为灵活的布局
3. 将表单拆分为多个模块，自由的切换

### 介绍
组件：`/components/YubiForm` 
demo：`/views/form`, 两个表单配置文件

### Update

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