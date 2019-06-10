<template>
  <div class="page-container">
    <div class="aside">
      <div class="header">
        <h1 class="title">
          <a href="https://github.com/xuliangzhan/xe-utils">xe-utils</a>
        </h1>
        <div class="search-wrapper">
          <input class="search-input" v-model="filterName" type="search" placeholder="API 搜索"/>
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
      <div v-for="(group, gIndex) in apiList" :key="gIndex">
        <div class="api-item" v-for="(item, index) in group.children" :key="index">
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

export default {
  data () {
    return {
      selected: null,
      filterName: '',
      list: []
    }
  }
}
</script>
