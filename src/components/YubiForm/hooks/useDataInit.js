import { useStore } from '../utils/store';

export default (formConfig) => {
  let obj = {};
  const { addComponent, dispatch } = useStore(formConfig);

  formConfig.formLineList.forEach(line => {
    addComponent(line.formItemList);

    Object.keys(line.formItemList).forEach(key => {
      const item = line.formItemList[key]
      item._prop && (obj[item._prop] = undefined);
    });
  });

  const formData = {
    ...obj,
    ...formConfig.defaultFormData,
  }

  return {
    dispatch,
    formData,
  }
}