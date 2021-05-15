import { ModelMixin, BaseMixin } from '../mixin';

const YubiInput = {
  name: 'yubi-input',
  mixins: [
    ModelMixin,
    BaseMixin,
  ],
  render() {
    const {  formItem } = this;
    // const inputObj = <el-input scopedSlots={{prepend: ()=> 'aaa'}}></el-input>;
    // console.log('inputObj', inputObj);
    const scopedSlots = {
      prefix: function(scope) {
        console.log('prepend', scope)
        return (
          <i class="el-input__icon el-icon-search"></i>
        );
      }
    }
    return (
      <el-input {...{ scopedSlots, attrs: formItem }} v-model={this.modelValue}>
      </el-input>
    );
  },
};

export default YubiInput;