
import { ModelMixin, BaseMixin } from '../mixin';

const YubiCheckboxes = {
    name: 'yubi-checkboxes',
    mixins: [
      ModelMixin,
      BaseMixin,
    ],
    render() {
      const { formConfig, formItem, handleAttrs, handleFunc } = this;
      return (
        <el-checkbox-group {...{ attrs: handleAttrs(formItem) }} v-model={this.modelValue}>
          {
            handleFunc(formItem.options, this).map(option => {
              return (
                <el-checkbox 
                  {...{ attrs: handleAttrs(option) }}
                  key={`${formConfig.ref}-${formItem.label}-${option.label}-${option.value}`}>
                </el-checkbox>
              );
            })
          }
        </el-checkbox-group>
      );
    },
  };
  
  export default YubiCheckboxes;