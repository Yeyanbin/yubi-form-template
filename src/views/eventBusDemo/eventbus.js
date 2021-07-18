import Vue from 'vue'

export const eventbus = new Vue()

// 事件常量化
export const TYPE = {
  NEW_CHAT: 'newChat',
  NEW_SESSION: 'newSession',
  NEW_UPDATE: 'newUpdate',
  DELETE_CHAT: 'deleteChat',
  NEW_MSG: 'newMsg',
  RECALL_MSG: 'recallMsg'
}

/**
 *
 * @param {string} type 监听的事件type
 * @param {(res) => void } handler 监听挂载的处理方法
 * @returns
 */
export const eventBusMixin = function(type, handler) {
  return {
    mounted() {
      eventbus.$on(type, handler)
    },
    destroyed() {
      eventbus.$off(type)
    }
  }
}
