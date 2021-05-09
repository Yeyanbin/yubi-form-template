
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
  options,
) {
  return {
    _type: 'button',
    // _prop: prop,
    text,
    _click: click,
    ...options,
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
  options,
) {
  return {
    _type: 'input',
    _prop: prop,
    label,
    ...options,
  }
}


export const useSelect = function(
  prop,
  label,
  options,
) {
  return {
    _type: 'select',
    _prop: prop,
    label,
    ...options,
  }
}



