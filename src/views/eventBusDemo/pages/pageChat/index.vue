<template>
  <div>
    this is chat page
  </div>
</template>

<script>
import { eventbus, TYPE } from '../../eventbus'

export default {
  // 没有手动销毁
  mounted() {
    eventbus.$on(TYPE.NEW_CHAT, (res) => {
      console.log(res)
    })
    eventbus.$on(TYPE.DELETE_CHAT, (res) => {
      console.log(res)
    })
  }
}
</script>
