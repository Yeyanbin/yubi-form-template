
export const ModelMixin = {
  model: {
    prop: 'value',
    event: 'change',
  },
  props: {
    value: String | Number,
  },
  data(){
    return {
      modelValue: '',
    }
  },
  watch: {
    modelValue: function(n) {
      // console.log(this.formItem._prop,' modelChange：', n)
      this.$emit('change', n);
      this.formItem._watch && this.formItem._watch(n, this.context);
    },
    value: function(n) {
      // console.log(this.formItem._prop,' value: ',n)
      this.modelValue = n;
    },
  },
  created() {
    this.modelValue = this.value;
    console.log(this.formItem._prop, 'created')
  }
}

/**
 * 不处理的attr
 */
const WhiteList = ['options', 'show', 'slots']

export const BaseMixin = {
  props: {
    formItem: Object,
    formConfig: Object,
    formData: Object,
    that: Object,
    dispatch: Function,
  },
  data() {
    return {
      slots: this.formItem.slots?.(this.$createElement),
    }
  },
  computed: {
    context() {
      const { that, formConfig, formData, formItem, dispatch } = this;
      return { vm: that, formConfig, formData, formItem, dispatch };
    }  
  },
  methods: {
    handleFunc(value, vm) {
      if ( typeof value === 'function' ) {
        return value.call(vm, this.context);
      } else {
        return value;
      }
    },
    handleAttrs(formItem) {
      const obj = {}
      Object.keys(formItem).forEach(key => {
        key[0] !== '_' && !WhiteList.every(s => key === s ) && (obj[key] = this.handleFunc(formItem[key]));
      })
      return obj;
    }
  } 
};