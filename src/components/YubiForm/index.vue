<template>
  <div class="app-container">
    <el-form :ref="formConfig.ref" :model="formData" :rules="formConfig.rules" :label-position="formConfig.labelPosition" label-width="120px">
      <el-row v-for="(line, index) of formConfig.formLineList" :key="`${formConfig.ref}-line-${index}`" :gutter="line.gutter || 10">
        <template v-if="line.showProp()">
          <el-col v-for="(formItem, index) of line.formItemList" 
            :span="(formItem.span || 4)"
            :key="`${formConfig.ref}-${formItem.label}-${formItem.type}-${index}`">
            <el-form-item :label="formItem.label? formItem.label: ' '" :prop="formItem.prop? formItem.prop : ''">
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
    this.formData = this.formConfig.formData;
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

