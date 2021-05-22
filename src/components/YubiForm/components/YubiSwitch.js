
import { ModelMixin, BaseMixin } from '../mixin';

const YubiSwitch = {
    name: 'yubi-switch',
    mixins: [
      ModelMixin,
      BaseMixin,
    ],
    render() {
      const { formItem, handleAttrs, slots } = this;

      return (
        <div>
          <el-switch {...{ attrs: handleAttrs(formItem) }} v-model={this.modelValue}>
          </el-switch>
          { slots.text &&  slots.text(this.context) }
        </div>

      );
    },
  };
  
  export default YubiSwitch;