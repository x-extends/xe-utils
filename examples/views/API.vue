<template>
  <div class="page-container">
    <div class="aside">
      <div class="header">
        <h1 class="title">
          <a href="https://github.com/xuliangzhan/xe-utils">xe-utils</a>
        </h1>
        <div class="search-wrapper">
          <input class="search-input" v-model="filterName" type="search" placeholder="API 搜索">
        </div>
      </div>
      <ul>
        <li class="menu-item" v-for="(group, gIndex) in apiList" :key="gIndex">
          <a class="menu-link" @click="group.expand = !group.expand">{{ group.label }}</a>
          <ul class="child-menu" v-show="group.expand">
            <li class="menu-item" v-for="(item, index) in group.children" :key="index" :class="{active: selected === item}">
              <a class="menu-link" @click="menuLinkEvent(item)" v-html="item.name"></a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="body">
      <div v-for="group in apiList" :key="group.value">
        <div class="api-item" v-for="item in group.children" :key="item.name">
          <p class="title" :id="item.name" v-html="`${item.name } (${ item.args }) ${ item.title}`"></p>
          <p class="desc" v-html="item.desc"></p>
          <table class="param-table" border="0" v-if="item.params && item.params.length">
            <tr v-for="(rows, pIndex) in item.params" :key="pIndex">
              <td v-for="(val, vIndex) in rows" :key="vIndex">{{ val }}</td>
            </tr>
          </table>
          <pre>
            <code class="javascript" v-for="(code,cIndex) in item.codes" :key="cIndex">{{ code }}</code>
          </pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import hljs from 'highlight.js'

import {
  VXETable,
  Table,
  TableColumn,
  TableHeader,
  TableBody    
} from 'vxe-table'
import zhCNLocat from 'vxe-table/lib/locale/lang/zh-CN'

Vue.use(Table)
Vue.use(TableColumn)
Vue.use(TableHeader)
Vue.use(TableBody)

// 按需加载的方式默认是不带国际化的，需要自行导入
VXETable.setup({
  i18n: (key, value) => VXETable.t(zhCNLocat, key)
})

export default {
  data () {
    return {
      selected: null,
      filterName: '',
      list: []
    }
  },
  computed: {
    apiList () {
      if (this.filterName) {
        let filterName = this.filterName.toLowerCase()
        let filterRE = new RegExp(filterName, 'gi')
        let list= window.XEUtils.searchTree(this.list, item => (item.name || '').toLowerCase().indexOf(filterName) > -1 || (item.title || '').toLowerCase().indexOf(filterName) > -1, { children: 'children' })
        window.XEUtils.eachTree(list, item => {
          item.name = (item.name||'').replace(filterRE, match => `<span class="keyword-lighten">${match}</span>`)
          item.title = (item.title||'').replace(filterRE, match => `<span class="keyword-lighten">${match}</span>`)
        }, { children: 'children' })
        return list
      }
      return this.list
    }
  },
  watch: {
    apiList () {
      this.$nextTick(() => {
        if (this.apiList.length) {
          this.selected = this.apiList[0].children[0]
          Array.from(this.$el.querySelectorAll('pre code')).forEach((block) => {
            hljs.highlightBlock(block)
          })
        }
      })
    }
  },
  created () {
    this.selected = this.apiList[0].children[0]
  },
  mounted () {
    Array.from(this.$el.querySelectorAll('pre code')).forEach((block) => {
      hljs.highlightBlock(block)
    })
  },
  methods: {
    menuLinkEvent (item) {
      let elem = document.getElementById(item.name)
      this.selected = item
      if (elem && elem.scrollIntoView) {
        elem.scrollIntoView()
      } else if (elem && elem.scrollIntoViewIfNeeded) {
        elem.scrollIntoViewIfNeeded()
      }
    }
  }
}
</script>
