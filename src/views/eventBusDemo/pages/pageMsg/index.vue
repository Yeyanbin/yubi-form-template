<template>
  <div>
    this is Msg page
  </div>
</template>

<script>
import { TYPE, eventBusMixin } from "../../eventbus";

export default {
  mixins: [
    // 能获取当前组件作用域
    eventBusMixin(TYPE.NEW_MSG, function(res) {
      console.log(this);
      console.log(res)
    }),
    // 不能获取当前组件作用域
    eventBusMixin(TYPE.RECALL_MSG, (res) => {
      console.log(res)
    })
  ],
}
</script>