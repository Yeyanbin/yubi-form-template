
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



