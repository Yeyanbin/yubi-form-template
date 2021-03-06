
import { ModelMixin, BaseMixin } from '../mixin';

const YubiSelect = {
    name: 'yubi-select',
    mixins: [
      ModelMixin,
      BaseMixin,
    ],
    render() {
      const { formConfig, formItem, handleAttrs, handleFunc } = this;
      const scopedSlots = {
        prefix: function(scope) {
          console.log('prepend', scope)
          return (
            <i class="el-input__icon el-icon-search"></i>
          );
        }
      }
      return (
        <el-select 
          {...{ attrs: handleAttrs(formItem), scopedSlots }} v-model={this.modelValue}>
          {
            handleFunc(formItem.options, this).map(option => {
              return (
                <el-option
                  label={option.label} value={option.value}
                  key={`${formConfig.ref}-${formItem.label}-${option.label}-${option.value}`}>
                </el-option>
              );
            })
          }
        </el-select>
      );
    },
  };
  
  export default YubiSelect;