<template>
  <div id="app">
    <router-view/>
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
  overflow: hidden;
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
.keyword-lighten {
  color: #000;
  background-color: #FFFF00;
}
.page-container {
  height: 100%;
  margin: 0 auto;
  overflow: hidden;
  .aside {
    position: fixed;
    top: 0;
    left: 0;
    width: 240px;
    height: 100%;
    flex-shrink: 0;
    overflow: auto;
    float: left;
    border-right: 1px solid #dcdfe6;
    padding: 100px 0 30px 0;
    .header {
      position: fixed;
      top: 0;
      left: 0;
      text-align: center;
      width: 220px;
      background-color: #fff;
      .title {
        font-size: 28px;
        margin: 10px 0 0 0;
        text-align: center;
        a {
          color: #409eff;
          text-decoration: none;
          cursor: pointer;
        }
      }
      .search-wrapper {
        padding: 10px 0;
        .search-input {
          width: 60%;
          min-width: 120px;
          max-width: 200px;
          height: 26px;
          border: 1px solid #dcdfe6;
          border-radius: 4px;
          padding-left: 10px;
        }
      }
    }
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
    width: 100%;
    height: 100%;
    overflow: auto;
    float: left;
    padding: 0 10px 0 280px;
    .api-item {
      .title {
        font-weight: 700;
        font-size: 16px;
      }
      .param-table {
        border-collapse: collapse;
        border-spacing: 0;
        width: 600px;
        text-align: center;
        border-left: 1px solid #dcdfe6;
        border-top: 1px solid #dcdfe6;
        tr {
          &:first-child {
            background-color: #F6F8FA;
          }
          &:hover {
            background-color: #F6F8FA;
          }
        }
        td {
          padding: 4px ;
          border-right: 1px solid #dcdfe6;
          border-bottom: 1px solid #dcdfe6;
        }
      }
    }
  }
}
</style>
