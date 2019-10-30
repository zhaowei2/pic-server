<template>
  <div>
    <header>
      <div class="main-nav">
          <div class="menu-logo">
            <nuxt-link to="/" >
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAA8CAMAAACn4e/8AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3NpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowZTNlNWQ2OC1mNDI0LTRjYjgtODdkMy0xNGUyNTY3ZjYyNGIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NTgwMTY0NzE4NTc0MTFFNEE2QkM5NTc5QkIyNjEwQjgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NTgwMTY0NzA4NTc0MTFFNEE2QkM5NTc5QkIyNjEwQjgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MGUzZTVkNjgtZjQyNC00Y2I4LTg3ZDMtMTRlMjU2N2Y2MjRiIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjBlM2U1ZDY4LWY0MjQtNGNiOC04N2QzLTE0ZTI1NjdmNjI0YiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Ph7hNwAAAAA2UExURf+Ir/////+Os/+Stf/q8P+1zP/N3P/F1//4+v+bu/+kwf+txv/j6//U4f/x9f/c5v+90f+Ut7cDznQAAANhSURBVHja7JjpcuMgDICtcojb9P1fdiWBE3wl7rbN7OyEH8apQR9IoKPT58evt8/pJe3jFYg35J+GKBvGb1b/BsTASqwGNXyzR60tSh81/AuI3xMcOCMKAG22DcEeQrzWUGgurcIqbgThdqID+qz91CHSox3XewxRhOcl0QNhaOmQUR3kzu+QCuU5pKtLpjzbiZ/B1dvqBBIcpEWReAmyt8mqkTlmP60gxJhvttLfh2CBYkbrsFDSXv+ZQatvQ2hUXR8BmoEa0UY5Psz4EuTIKKv5o+ELaGRFqkuGR7lNzvXjNV+DkB5phsOLp0vxddIk3gHSG2khj3cZyvpi99OFfM3oodFfVhdtHuxtF+reaP7wq+0kZCJktskUcoFUr0Ei0JK9g3Bg+L26jMVwNx75uWuQDJYMb7cGeWCTGfSMRl268b5NKRD5dB1s5dTwvlpdmPT8CBtZfKVXvicHWzk/XUIyNsVHkAhFTc1JJ0CBHGzlGLK5TucQMkRiPTHOqXbj7c1dPIaInoy/AKFtJHHtM48RiHJOXVIX64nOcbI1PIHQwkE0ypKb78pbmfjAJhST6Ma4SDY9h1AoYv+WZEiDhDEWtbgRHxh+auZhm55kK+SlDfuFJrd74WG8MjW7nZHYEa2btzAqeYSgRFTFTssMEHMPwJHjf9xdTwe7lvxxShT1HNpyTZOTuxZMfJZYqV1758JvyP9bn5glsHkzZG9Zmx+tTxaXUWBI7Ar7FY/+xyCue5IRoqL4GPNjkOYMk0DuOY9UI6xKtXjZm1ZbGrR4IjVFfotrT7SN8eJ/ybsTRC3lCck38moshwB122XmP9pJzTJOIhB715w2Vc0GYkUrMyALkqrMBYYoigCU7qwhGUqlhIvT+GpmFkvxqnIBhXUVdLYQir8ccX0XpFl9ApbHCkJjwr2XjKMPz5t4uoXQUQokqgvKkhCdQJYytvc8oA9aRp5CKNEiThNkOEX6DYiXWkEEqa7YO6TyzkKHhH7ee19EXdcgZHUaJBDKjqRw6BBKqSkdMz7xtznx9zl4xNbnZviLkNCyblC9ztZtKkrkT1K0yPE2XLm1Iyy9VtcgSjLA9jB804zsJIpHo8NKXaUagf0ayqWtVCMstYKkCTzSt4d/x5M35DWQl7RX/Bv9jwADAMj7Hq7p2T03AAAAAElFTkSuQmCC" alt="">
            </nuxt-link to="/">
          </div>
         
          <ul class="menu-nav">
            <li class="current-menu-item">
              <nuxt-link to="/" >首页</nuxt-link to="/">
            </li>
             <li>
              <nuxt-link to="/sexy" >性感妹子</nuxt-link to="/">
            </li>
             <li>
              <nuxt-link to="/japan" >日本妹子</nuxt-link to="/">
            </li>
             <li>
              <nuxt-link to="/tawan" >台湾妹子</nuxt-link to="/">
            </li>
             <li>
              <nuxt-link to="/pure" >清纯妹子</nuxt-link to="/">
            </li>
             <li>
              <nuxt-link to="/meizizipai" >妹子自拍</nuxt-link to="/">
            </li>
             <li>
              <nuxt-link to="/jiepai" >街拍美女</nuxt-link to="/">
            </li>
            <li>
              <nuxt-link to="/nowupdate" >每日更新</nuxt-link to="/">
            </li>
          </ul>
      </div>
    </header>
    <div class="main">
        <nuxt />
    </div>
  </div>
</template>

<style>
header{
  height: 63px;
  width: 100%;
  margin: 0 auto;
  position: fixed;
  z-index: 2015;
  top: 0;
  left: 0;
  background: url('./../assets/images/header.png')
}
header .main-nav{
  width: 1018px;
  height: 61px;
  margin: 0 auto;
}
.menu-logo{
  float: left;
}
.menu-nav{
  color: #FFF;
  float: left;
  height: 63px;
  width: 642px;
  padding-left: 18px;
}
.menu-nav li{
  font-size: 14px;
  line-height: 63px;
  padding: 0 12px;
  float: left;
}
.menu-nav li.current-menu-item a{
  color: #FF88AF;
}
.main{
  width: 1018px;
  margin: 0 auto;
  
  margin-top: 70px;
  background-color: #ffffff;
}
</style>
