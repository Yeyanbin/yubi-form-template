<template>
  <div class="app-container" :style="`width: ${formConfig.width || 800}px;`">
    <el-form :ref="formConfig.ref" :model="formData" :rules="formConfig.rules" label-suffix=":" :label-position="formConfig.labelPosition" label-width="120px">
      <el-row v-for="(line, index) of formConfig.formLineList" :key="`${formConfig.ref}-line-${index}`" :gutter="line.gutter || 10">
        <template v-if="line.show !== undefined? line.show() : true ">
          <el-col v-for="formItem of line.formItemList" 
            :span="(formItem.span || 8)"
            :key="`${formConfig.ref}-${formItem.label}-${formItem.type}-${formItem.prop || formItem.text}`">
            <el-form-item :label="formItem.label" :prop="formItem.prop">
              <template v-if="formItem.type === 'button'">
                <el-button :type="formItem.buttonType" @click="func(formItem.click)">
                  {{ formItem.text }}
                </el-button>
              </template>
              <template v-if="formItem.type === 'select'">
                <el-select v-model="formData[formItem.prop]">
                  <el-option v-for="option of formItem.options"
                    :label="option.label" :value="option.value"
                    :key="`${formConfig.ref}-${formItem.label}-${option.label}-${option.value}`">
                  </el-option>
                </el-select>
              </template>
              <template v-if="formItem.type === 'input'">
                <el-input :type="formItem.inputType" v-model="formData[formItem.prop]"></el-input>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
      }
    }
  },
  props: {
    formConfig: Object,
  },
  created() {
    console.log('yubi-form create')
    this.formData = this.formConfig.defaultFormData;
    console.log(this.formConfig)
  },
  methods: {
    func(clickFunc) {
      clickFunc(this, this.formConfig.ref, this.formData);
    }
  }
}


</script>

<style scoped>
.line {
  text-align: center;
}
</style>

