
import { ModelMixin, BaseMixin } from '../mixin';

const YubiSwitch = {
    name: 'yubi-switch',
    mixins: [
      ModelMixin,
      BaseMixin,
    ],
    render() {
      const { formConfig, formItem, handleAttrs, handleFunc } = this;
      return (
        <el-switch {...{ attrs: handleAttrs(formItem) }} v-model={this.modelValue}>
        </el-switch>
      );
    },
  };
  
  export default YubiSwitch;