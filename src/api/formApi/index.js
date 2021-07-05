import axios from "axios"

/**
 * yubi form call
 * @param  {...any} args 
 * @returns 
 */
export const call = (...args) => {

  return callBase(...args);
}

export const callBase = (pakeageName, funcName, params, options) => {
  const { callType } = options;

  if ( callType === 'watch' ) {
    
  } else if ( callType === '' ) {
    
  }
}
