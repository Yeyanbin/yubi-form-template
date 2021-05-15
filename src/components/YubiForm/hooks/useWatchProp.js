import { useStateMachine } from '../utils/stateMachine'

export default (that) => {
  const { send } = useStateMachine(() => {
    const { formConfig, formData, dispatch } = that; 
    formConfig.onUpdate({
      vm: that,
      formConfig,
      formData,
      dispatch,
    });
  });

  Object.keys(that.formData).forEach(key => {
    // console.log('watching, ', `formData.${key}`)
    that.$watch(`formData.${key}`, send);
  });
}