
/**
 * 
 * @param {*} formConfig 
 * @returns 
 */
export const useStore = (formConfig) => {

  const store = {};

  const dispatch = function (componentName, attr, newValue) {
    return new Promise((resolve, reject) => {
      if ( store[componentName] ) {
        store[componentName][attr] = newValue;
        resolve();
      } else {
        console.error(`不存在表单项${componentName}`);
        reject(`不存在表单项${componentName}`);
      }
    })
  }

  const addComponent = (components) => {
    Object.keys(components).forEach(componentName => {
      if (store[componentName]) {
        console.error(`该表单${formConfig.ref}已存在表单项${componentName}`);
      } else {
        store[componentName] = components[componentName];
      }
    })
  }

  return {
    dispatch,
    addComponent,
  }
}