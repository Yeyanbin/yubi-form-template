
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
    },
    value: function(n) {
      console.log(this.formItem._prop,' value: ',n)
      this.modelValue = n;
    }
  },
  created() {
    this.modelValue = this.value;
    console.log(this.formItem._prop, 'created')
  }
}

export const BaseMixin = {
  props: {
    formItem: Object,
    formConfig: Object,
    formData: Object,
    that: Object,
  },
  methods: {
    handleFunc(value, vm) {
      if ( typeof value === 'function' ) {
        return value.call(vm, this.that, this.formConfig, this.formData, this.formItem);
      } else {
        return value;
      }
    },
    handleAttrs(formItem) {
      const obj = {}
      Object.keys(formItem).forEach(key => {
        key[0] !== '_' && !['options'].every(s => key === s ) && (obj[key] = this.handleFunc(formItem[key]));
      })
      return obj;
    }
  } 
};