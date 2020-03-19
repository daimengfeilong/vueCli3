<template>
  <div>
    <div class="tabsHeader">
      <ul>
        <li v-for="item in tabsHead" :key="item.id" :class="{activeTabs: tabsIndex == item.id}" @click="tabsChange(item.id)">{{ item.tabsName }}</li>
      </ul>
    </div>
    <div class="tabsSection" :is="tabsComponent"></div>
  </div>
</template>
<script type="text/ecmascript-6">
  import tabsOne from './Tabs1.vue'

  console.log(tabsOne)
  export default {
    components: {},
    data () {
      return {
        tabsHead: [
          {tabsName: "Tabs1", id: "1"},
          {tabsName: "Tabs2", id: "2"},
          {tabsName: "Tabs3", id: "3"}
        ],
        tabsIndex: '1',
        tabsComponent: tabsOne
      }
    },
    created () {

    },
    methods: {
      tabsChange (num) {
        let that = this
        that.tabsIndex = num;
        that.tabsComponent = () => {
          return import('./Tabs' +num+ '.vue')
        }
      }
    }
  }
</script>
<style lang="less">
  .tabsHeader {
    padding: 0 40px;

    ul {
      padding-left: 0;
      border-bottom: 1px solid #e5e5e5;
    }

    li {
      display: inline-block;
      width: 100px;
      height: 35px;
      text-align: center;
      line-height: 35px;
      cursor: pointer;
      border-left: 1px solid #e5e5e5;
      border-top: 1px solid #e5e5e5;
    }
    li:last-child {
      border-right: 1px solid #e5e5e5;
    }
  }
  .activeTabs {
    color: #2d8cf0;
    font-weight: bold;
  }
  .tabsSection {
    padding: 0 40px;
  }
</style>