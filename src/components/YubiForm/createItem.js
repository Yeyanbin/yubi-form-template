
/**
 * 使用按钮
 * @param { string } text 
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
  // prop,
  text,
  click,
  elButtonAttrs,
) {
  return {
    _type: 'button',
    // _prop: prop,
    text,
    _click: click,
    ...elButtonAttrs,
  }
}

/**
 * 
 * @param {*} prop 
 * @param { * } option el-input attrs
 * @returns 
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

