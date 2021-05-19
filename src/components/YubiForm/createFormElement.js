import { render } from "nprogress"

/**
 * 使用按钮
 * @param { String } text 
 * @param { (vm, formConfig, formData) => void } click 
 * @param { {
 *    buttonType?: 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'text';
 *    size?: 'medium' | 'small' | 'mini';
 *    round?: boolean;
 *    circle?: boolean;
 *    loading?: boolean;
 *    disabled?: boolean;
 *    icon?: string;
 *   } } option 
 */
export const useButton = function(
  text,
  click,
  elButtonAttrs,
) {
  return {
    _type: 'button',
    text,
    _click: click,
    ...elButtonAttrs,
  }
}

/**
 * 
 * @param {String} prop 
 * @param {String} label 
 * @param { Object } elInputAttrs el-input attrs
 * @return {Object} input的配置项
 */
export const useInput = function(
  prop,
  label,
  elInputAttrs,
  watch,
) {
  return {
    _type: 'input',
    _prop: prop,
    _watch: watch,
    label,
    ...elInputAttrs,
  }
}

/**
 * 
 * @param {String} prop 
 * @param {String} label 
 * @param { Object } elSelectAttrs el-select attrs
 * @return {Object} 
 */
export const useSelect = function(
  prop,
  label,
  elSelectAttrs,
  watch,
) {
  return {
    _type: 'select',
    _prop: prop,
    _watch: watch,
    label,
    ...elSelectAttrs,
  }
}

/**
 * 
 * @param {String} prop 
 * @param {String} label 
 * @param { Object } elRadiosAttrs el- attrs
 * @param { (newValue, oldValue) => void } watch 
 * @return {Object} 
 */
export const useRadios = function(
  prop,
  label,
  elRadiosAttrs,
  watch,
) {
  return {
    _type: 'radios',
    _prop: prop,
    _watch: watch,
    label,
    ...elRadiosAttrs,
  }
}

export const useSwitch = function(
  prop,
  label,
  elSwitchAttrs,
  watch,
) {
  return {
    _type: 'switch',
    _prop: prop,
    _watch: watch,
    label,
    ...elSwitchAttrs,
  }
}

export const useSlot = function(renderSlot) {
  return (context, h) => ({ 
    functional: true,
    render: function() {
      return h(renderSlot(context, h));
    } 
  });
};
