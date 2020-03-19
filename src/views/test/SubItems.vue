<template>
  <div class="subItems">
    <p>子组件，当前count值：{{ count }}</p>
    <sub-items :count="count+1" v-if="count < 5"></sub-items>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    name: "subItems",
    props: {
      count: Number
    },
    data () {
      return {
        
      }
    },
    created () {
    }
  }
</script>
<style lang="less">
  .subItems {
    p {
      color: red;
    }
  }
</style>