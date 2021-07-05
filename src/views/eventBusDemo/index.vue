
<template>
  <div>
    <template v-for="type of typeList">
      <el-button :key="type" @click="click(type)">{{ type }}</el-button>
    </template>
    <el-menu>
      <el-menu-item v-for="item of menu" :key="item.text" @click="active = item.is">
        {{ item.text }}
      </el-menu-item>
    </el-menu>
    <component :is="active"/>
  </div>
</template>

<script src="./index.js"></script>