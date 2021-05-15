import { useStore } from '../utils/store';

export default (that) => {
  let obj = {};

  const { addComponent, dispatch } = useStore(that.formConfig);

  that.formConfig.formLineList.forEach(line => {
    addComponent(line.formItemList);

    Object.keys(line.formItemList).forEach(key => {
      const item = line.formItemList[key]
      item._prop && (obj[item._prop] = undefined);
    });
  });

  that.formData = {
    ...obj,
    ...that.formConfig.defaultFormData,
  }


  that.that = that;
  that.dispatch = dispatch;
}