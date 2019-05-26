<template>
  <div id="app">
    <header class="page-header">
      <h1 class="title"><a href="https://github.com/xuliangzhan/xe-utils">xe-utils</a></h1>
      <span class="desc">javascript 函数库</span>
    </header>
    <router-view/>
    <footer class="page-footer">
      <p class="copyright">github <a class="link" href="https://github.com/xuliangzhan/xe-utils">xe-utils</a> Copyright (c) 2017-present, Xu Liangzhan</p>
    </footer>
  </div>
</template>

<style lang="scss">
#app {
  height: 100%;
}
html, body {
  height: 100%;
  min-width: 1200px;
  margin: 0;
  padding: 0;
  color: #000;
  font-size: 14px;
  font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,\\5FAE\8F6F\96C5\9ED1,Arial,sans-serif;
  * {
    box-sizing: border-box;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .link {
    color: #409eff;
    text-decoration: none;
  }
  p {
    margin: 14px 0;
    font-size: 14px;
  }
}
.page-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
  border-bottom: 1px solid #dcdfe6;
  background-color: #fff;
  &:after {
    content: "";
    display: block;
    clear: both;
    visibility: hidden;
  }
  .logo {
    float: left;
    width: 30px;
    height: 30px;
    margin: 12px 4px 0 0;
    border-radius: 50%;
  }
  .title {
    font-size: 22px;
    padding: 10px 0;
    a {
      color: #409eff;
      text-decoration: none;
      cursor: pointer;
    }
    float: left;
  }
  .desc {
    float: right;
    font-size: 14px;
    color: #333;
    margin-top: 30px;
  }
}
.page-container {
  height: 100%;
  padding: 80px 0 60px 0;
  margin: 0 auto;
  overflow: hidden;
  .aside {
    width: 16%;
    height: 100%;
    flex-shrink: 0;
    overflow: auto;
    float: left;
    border-right: 1px solid #dcdfe6;
    .menu-item {
      padding-left: 15px;
      &.active {
        border-right: 4px solid red;
      }
      .menu-link {
        line-height: 30px;
        font-weight: 700;
        font-size: 16px;
        cursor: pointer;
      }
      .child-menu {
        .menu-link {
          line-height: 22px;
          font-size: 14px;
          font-weight: inherit;
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
  .body {
    width: 84%;
    height: 100%;
    overflow: auto;
    float: left;
    padding: 0 10px;
    .api-item {
      .title {
        font-weight: 700;
        font-size: 16px;
      }
    }
  }
}
.page-footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  font-size: 12px;
  color: #333;
  text-align: center;
  background-color: #fff;
  border-top: 1px solid #dcdfe6;
}
</style>
