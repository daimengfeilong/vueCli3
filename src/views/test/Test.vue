<template>
  <div>
    <div class="asa" :is="isShow"></div>
    <div class="msg">
      <p>{{ msg }}</p>
      <p>
        <span v-for="item in testArr" :key="item">{{item}}</span>
      </p>
      <el-button type="primary" @click="handleChange">nextTick</el-button>
    </div>
    <component-two v-bind="$attrs" one="1" two="2" @test1="one" @test2="two" v-on="$listeners">
      <template #first><p>这是第一个</p></template>
      <template #second><p>这是第二个</p></template>
      <template #third><p>这是第三个</p></template>
      <p>这是默认的</p>
    </component-two>
    <p v-on="{mousedown: one, mouseup: two}">{{ testStr }}</p>
    <div>
      <el-button type="primary" @click="one(),two()">测试</el-button>
      <el-button type="primary" v-on="{mousedown: one, mouseup: two}">测试2</el-button>
    </div>
    <div style="margin-top: 10px;">
      <p>
        <label>防抖：</label>
        <input type="text" style="width: 200px;" @keyup="debounce" placeholder="请输入内容" />
        <span>{{ testInput }}</span>
      </p>
      <el-button type="primary" @click="throttle">节流</el-button>
    </div>
    <sub-items :count="1"></sub-items>
  </div>
</template>       
<script type="text/ecmascript-6">
  // import '../../assets/js/jquery-2.1.1.min'
  import componentOne from './testComponent.vue'
  import componentTwo from './testComponent2.vue'
	import subItems from './SubItems.vue'
	import * as utils from '../../assets/js/utils'

  export default {
    components: {
      componentOne,
      componentTwo,
      subItems
    },
    data () {
      return {
        isShow: componentOne,
        msg: 'Hello, World',
        testInput: '',
        testObj: {
					name: 'admin',
          age: 18
        },
        testArr: [1,2,3]
      }
    },
    created () {
      this.testObj.age = 20
    },
    mounted () {
      this.testStr = '123'
    },
    watch: {
      'testObj.age': {
        immediate: true,
        deep: true,
        handler (newObj, oldObj) {
          console.log(newObj, '---', oldObj)
        }
      }
    },
    methods: {
			debounce: utils.debounce(function (e) {
				this.testInput = e.target.value
        console.log(this.testInput)
			}, 1500),
      throttle: utils.throttle(function () {
				console.log('触发节流')
			}, 2000),
      handleChange (e) {
//        console.log(e)
        this.msg = '我改变了'
        console.log(this.$el.textContent)
        this.$nextTick(function () {
          console.log(this.$el.textContent)
        })
        this.testArr[3] = 4
//        this.$set(this.testArr, 0, 4)
//        this.testArr.length = 2
        console.log(this.testArr)
      },
      one () {
        console.log('one')
      },
      two () {
        console.log('two')
      }
		}
  }
</script>
<style lang="less">

</style>