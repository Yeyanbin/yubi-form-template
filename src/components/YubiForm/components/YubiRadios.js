
import { ModelMixin, BaseMixin } from '../mixin';

const YubiRadios = {
    name: 'yubi-radios',
    mixins: [
      ModelMixin,
      BaseMixin,
    ],
    render() {
      const { formConfig, formItem, handleAttrs, handleFunc } = this;
      return (
        <el-radio-group {...{ attrs: handleAttrs(formItem) }} v-model={this.modelValue}>
          {
            handleFunc(formItem.options, this).map(option => {
              return (
                <el-radio 
                  label={option.value}
                  key={`${formConfig.ref}-${formItem.label}-${option.label}-${option.value}`}>
                    { option.label }
                </el-radio>
              );
            })
          }
        </el-radio-group>
      );
    },
  };
  
  export default YubiRadios;