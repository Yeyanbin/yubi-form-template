<template>
  <div>
    this is session page
  </div>
</template>

<script>
import { eventbus, TYPE } from "../../eventbus";

export default {
  mounted() {
    eventbus.$on(TYPE.NEW_SESSION, (res) => {
      console.log(res);
    })
    eventbus.$on(TYPE.NEW_UPDATE, (res) => {
      console.log(res);
    })
  },
  // 手动销毁eventbus监听
  destroyed() {
    eventbus.$off(TYPE.NEW_SESSION);
    eventbus.$off(TYPE.NEW_UPDATE);
  }
}
</script>