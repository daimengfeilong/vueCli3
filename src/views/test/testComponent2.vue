<template>
  <div>
    <h1>这是组件2</h1>
    <slot></slot>
    <slot name="first"></slot>
    <slot name="second"></slot>
    <slot name="third"></slot>
    <el-button type="primary" @click="$emit('test1')">按钮1</el-button>
    <el-button type="primary" @click="$emit('test2')">按钮2</el-button>
    <el-button type="primary" @click="emitHandle">emit</el-button>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    inheritAttrs: true,
    data () {
      return {}
    },
    mounted () {
      console.log(this.$attrs)
      console.log(this.$listeners)
      this.$listeners.test1()
      this.$listeners.test2()
    },
    methods: {
      emitHandle () {
        this.$emit('test1')
      }
    }
  }
</script>
<style lang="less">
</style>