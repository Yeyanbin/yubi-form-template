
import { ModelMixin, BaseMixin } from '../mixin';

const YubiSwitch = {
    name: 'yubi-switch',
    mixins: [
      ModelMixin,
      BaseMixin,
    ],
    render(h) {
      const { formItem, handleAttrs } = this;
      const { slots } = formItem;
      console.log(h)

      console.log(slots, slots.text(this.context, h));

      return (
        <div>
          <el-switch {...{ attrs: handleAttrs(formItem) }} v-model={this.modelValue}>
          </el-switch>
          { slots.text &&  slots.text(this.context, h) }
        </div>

      );
    },
  };
  
  export default YubiSwitch;