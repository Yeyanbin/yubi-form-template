<template>
  <div class="app-container" :style="`width: ${formConfig.width || 800}px;`">
    <el-form :ref="formConfig.ref" :model="formData" :rules="formConfig.rules" label-suffix=":" :label-position="formConfig.labelPosition" label-width="120px">
      <el-row v-for="(line, index) of formConfig.formLineList" :key="`${formConfig.ref}-line-${index}`" :gutter="line.gutter || 10">
        <template v-if="line.show !== undefined? line.show(formData) : true ">
          <el-col v-for="formItem of line.formItemList" 
            :span="(formItem.span || 8)"
            :key="`${formConfig.ref}-${formItem.label}-${formItem._type}-${formItem._prop || formItem.text}`">
            <el-form-item 
              :label="formItem.label" 
              :rules="formItem.rules && formItem.rules(formData)" 
              :prop="formItem._prop" 
              v-if="formItem.show !== undefined? formItem.show(formData): true">
              <template v-if="formItem._type">
                <component :is="`yubi-${formItem._type}`" 
                  v-bind="{ formConfig, formData, formItem, that, dispatch }" 
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
import useFormFunc from './hooks/useFormFunc';
import useWatchProp from './hooks/useWatchProp';
import useDataInit from './hooks/useDataInit';

export default {
  data() {
    return {
      formData: {},
      that: {},
      dispatch: undefined,
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
  },
  mounted() {
    useDataInit(this);
    useWatchProp(this);
    useFormFunc(this);
  },
  methods: {

  }
}
</script>

<style scoped>
.line {
  text-align: center;
}
</style>

