<template>
  <div>
    callStore demo page
  </div>
</template>

<script>

import { CallStore, createCallStore } from './callStore'
/* eslint-disable new-cap */

export default {
  name: 'CallStoreDemo',
  computed: {
  },
  mounted() {
    const api = {
      getUserList: (groupId) => {
        // return get('/api/get/userList', { groupId })
      },
      getTest(id) {
        console.log('test is run, id', id)
        return Promise.resolve({ test: id })
      }
    }

    const callStore = new CallStore(api)
    console.log('getTest, res: ', callStore.call('getTest', 1))
    console.log('getTest, res: ', callStore.call('getTest', 1))
    console.log('getTest, res: ', callStore.call('getTest', 2))
    console.log('getTest, res: ', callStore.call('getTest', 1))

    callStore.clear()
    console.log('getTest, res: ', callStore.call('getTest', 1))

    const otherLog = []
    console.log('newCallStore')
    const newCallStore = createCallStore(api)
    // const newCallStore = createCallStore(api, { log: (...string) => otherLog.push(string.join()) })
    console.log(newCallStore)
    // console.log(newCallStore.getTest)
    newCallStore.getTest(1).then((res) => {
      console.log('getTest, res: ', res)

      newCallStore.getTest(1).then((res) => {
        console.log('getTest, res: ', res)
      })
    })
    newCallStore.getTest(2).then((res) => {
      console.log('getTest, res: ', res)
    })
    newCallStore.getTest(1).then((res) => {
      console.log('getTest, res: ', res)
    })
    // newCallStore.getTest(2).then((res) => {
    //   console.log('getTest, res: ', res)
    // })
    // newCallStore.getTest(1).then((res) => {
    //   console.log('getTest, res: ', res)
    // })
    // newCallStore.clear()

    // newCallStore.getTest(1).then((res) => {
    //   console.log('getTest, res: ', res)
    // })

    console.log('记录日志：', otherLog)
    try {
      newCallStore.A()
    } catch (err) {
      console.error(err)
    }
    newCallStore.getTest = () => {}
  }
}
</script>

<style lang="scss" scoped>

</style>
