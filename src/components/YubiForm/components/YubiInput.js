import { ModelMixin, BaseMixin } from '../mixin';

const YubiInput = {
  name: 'yubi-input',
  mixins: [
    ModelMixin,
    BaseMixin,
  ],
  render() {
    return (
      <el-input {...{ attrs: this.formItem }} v-model={this.modelValue}></el-input>
    );
  },
};

export default YubiInput;