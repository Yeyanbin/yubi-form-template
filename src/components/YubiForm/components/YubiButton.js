import { BaseMixin } from '../mixin';


const YubiButton = {
  name: 'yubi-button',
  mixins: [
    BaseMixin,
  ],
  render() {
    const { formItem, handleFunc, handleAttrs } = this;

    return (
      <el-button {...{ attrs: handleAttrs(formItem) }} v-on:click={() => handleFunc(formItem._click)}>
        { handleFunc(formItem.text) }
      </el-button>
    );
  },
};

export default YubiButton;