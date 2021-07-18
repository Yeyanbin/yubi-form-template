/* eslint-disable no-return-assign */

export class CallStore {
  map = {};
  constructor(apiMap, options) {
    this.apiMap = apiMap
    this.log = options?.log || console.log
    Object.keys(apiMap).forEach(apiName => this.map[apiName] = {})
  }
  call(apiName, ...params) {
    const { map, apiMap, log } = this
    const strParams = JSON.stringify(params)
    if (map[apiName]) {
      log('time', new Date(Date.now()).toDateString(), '. Get', apiName, 'params', strParams, '. have store?', map[apiName][strParams] ? 'Yes' : 'No')
      return map[apiName][strParams]
        ? JSON.parse(JSON.stringify(map[apiName][strParams]))
        : map[apiName][strParams] = apiMap[apiName](...params)
    } else {
      console.error('api: ', apiName, 'isn\'t exist.')
    }
  }
  clear(apiName) {
    const { map } = this
    if (apiName) {
      map[apiName] = {}
    } else {
      Object.keys(map).forEach(key => map[key] = {})
    }
  }
}

/*
*/

export const createCallStore = (apiMap, options) => {
  const log = options?.log || console.log
  const map = {}
  const resMap = {}
  Object.keys(apiMap).forEach(apiName => (map[apiName] = {}) && (resMap[apiName] = {}))

  const call = (apiName, ...params) => {
    const strParams = JSON.stringify(params)
    log('time', new Date(Date.now()).toDateString(), '. Get', apiName, 'params', strParams, ' have store?', map[apiName][strParams] ? 'Yes' : 'No', `正在请求？${resMap[apiName][strParams] ? 'Yes' : 'No'}`)
    if (resMap[apiName][strParams]) {
      return resMap[apiName][strParams]
    } else {
      return map[apiName][strParams]
        ? Promise.resolve(JSON.parse(JSON.stringify(map[apiName][strParams])))
        : (resMap[apiName][strParams] = apiMap[apiName](...params)).then(res => {
          resMap[apiName][strParams] = undefined
          return map[apiName][strParams] = res
        })
    }
  }

  const otherFunc = {}

  otherFunc['clear'] = (apiName) => {
    if (apiName) {
      map[apiName] = {}
    } else {
      Object.keys(map).forEach(key => map[key] = {})
    }
  }

  const apiProxy = new Proxy({}, {
    get(_, funcName) {
      if (apiMap[funcName]) {
        return (...params) => call(funcName, ...params)
      } else if (otherFunc[funcName]) {
        return (...params) => otherFunc[funcName](...params)
      } else {
        return undefined
      }
    },
    set() {
      throw Error('禁止修改')
    }
  })

  return apiProxy
}

// const sql = {}
// sql.select('user_id')
//   .from('student')
//   .where('score > 90')
