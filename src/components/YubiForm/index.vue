<template>
  <div class="app-container" :style="`width: ${formConfig.width || 800}px;`">
    <el-form :ref="formConfig.ref" :model="formData" :rules="formConfig.rules" label-suffix=":" :label-position="formConfig.labelPosition" label-width="120px">
      <el-row v-for="(line, index) of formConfig.formLineList" :key="`${formConfig.ref}-line-${index}`" :gutter="line.gutter || 10">
        <template v-if="line.show !== undefined? line.show(formData) : true ">
          <el-col v-for="formItem of line.formItemList" 
            :span="(formItem.span || 8)"
            :key="`${formConfig.ref}-${formItem.label}-${formItem._type}-${formItem._prop || formItem.text}`">
            <el-form-item :label="formItem.label" :prop="formItem._prop">
              <template v-if="formItem._type">
                <component :is="`yubi-${formItem._type}`" 
                  v-bind="{ formConfig, formData, formItem, that }" 
                  v-model="formData[formItem._prop]"></component>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
  </div>
</template>

<script>
import YubiComponent from './components';

export default {
  data() {
    return {
      formData: {},
      that: {},
    }
  },
  props: {
    formConfig: Object,
  },
  components: {
    ...YubiComponent
  },
  created() {
    console.log('yubi-form create')
    // this.formData
    let obj = {}
    this.formConfig.formLineList.forEach(line => {
      line.formItemList.forEach(item => {
        item._prop && (obj[item._prop] = undefined)
      });
    })
    this.formData = {
      ...obj,
      ...this.formConfig.defaultFormData,
    }
    console.log(this.formConfig)
    this.that = this;
  },
  mounted() {
  },
  methods: {
    // func(clickFunc) {
    //   clickFunc(this, this.formConfig.ref, this.formData);
    // }
  }
}
</script>

<style scoped>
.line {
  text-align: center;
}
</style>

