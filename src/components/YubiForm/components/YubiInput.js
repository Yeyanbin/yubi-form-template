import { ModelMixin, BaseMixin } from '../mixin';

const YubiInput = {
  name: 'yubi-input',
  mixins: [
    ModelMixin,
    BaseMixin,
  ],
  render() {
    const { formItem, slots } = this;

    return (
      <div>
        <el-input {...{ attrs: formItem }} v-model={this.modelValue}>
          {
            Object.keys(slots).map(key => (
              <template slot={key}>
                {slots[key]}
              </template>
            ))
          }
        </el-input>
      </div>
    );
  },
};

export default YubiInput;