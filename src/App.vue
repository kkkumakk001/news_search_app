<template>
  <div id="app">
    <header>
      <div class="header_wrap">
        <!-- <button id="menu_icon" class="header_icon" @click="menuToggle"> -->
        <button class="header_icon">
          <img id="menu_icon" class="header_icon_img" src="../src/assets/hamburger.svg" alt="メニューアイコン">
        </button>
        <h1 class="header_title"><a href="/">News Site</a></h1>
        <form class="header_form">
          <div class="search_box">
            <input v-on:keydown.enter.stop.prevent="changeWord" class="header_search" type="text" placeholder="検索ワードを入力">
          </div>
        </form>
      </div><!-- header_wrap -->
    </header>

    <!-- <div id="menu_cover" class="menu_cover_class" :class="{ open: toggle }"> -->
    <div id="menu_cover" class="menu_cover_class">
      <router-link to="/">
          <img class="nav_icon" src="../src/assets/language.svg" alt="トップページのアイコン">
          <span class="nav_title">トップ</span>
          </router-link><br>

          <router-link to="/sport">
          <img class="nav_icon" src="../src/assets/walking.svg" alt="スポーツページのアイコン">
          <span class="nav_title">スポーツ</span>
          </router-link><br>

          <router-link to="/tech">
          <img class="nav_icon" src="../src/assets/rss.svg" alt="技術ページのアイコン">
          <span class="nav_title">技術</span>
          </router-link><br>

          <router-link to="/finance">
          <img class="nav_icon" src="../src/assets/trending-up.svg" alt="金融ページのアイコン">
          <span class="nav_title">金融</span>
          </router-link>

          <router-link to="/search">
            <div class="search_wrap">
              <img class="nav_icon" src="../src/assets/trending-up.svg" alt="金融ページのアイコン">
              <span class="nav_title">検索</span>
            </div>
          </router-link>
    </div>

    <div class="main_contents">
      <div class="main_contents_sidebar">
        <div id="nav">
          <router-link to="/">
          <img class="nav_icon" src="../src/assets/language.svg" alt="トップページのアイコン">
          <span class="nav_title">トップ</span>
          </router-link><br>

          <router-link to="/sport">
          <img class="nav_icon" src="../src/assets/walking.svg" alt="スポーツページのアイコン">
          <span class="nav_title">スポーツ</span>
          </router-link><br>

          <router-link to="/tech">
          <img class="nav_icon" src="../src/assets/rss.svg" alt="技術ページのアイコン">
          <span class="nav_title">技術</span>
          </router-link><br>

          <router-link to="/finance">
          <img class="nav_icon" src="../src/assets/trending-up.svg" alt="金融ページのアイコン">
          <span class="nav_title">金融</span>
          </router-link>
        </div>
      </div> <!-- main_contents_sidebar -->
      <div class="main_contents_main">
        <transition name="view"><router-view/></transition>
      </div> <!-- main_contents_main -->
    </div> <!-- main_contents -->


  </div> <!-- #app -->
</template>

<style lang="scss">

$breakpoints: (
  xs: "only screen and (max-width: 320px)",
  s: "only screen and (max-width: 575px)",
  m: "only screen and (max-width: 767px)",
  l: "only screen and (max-width: 1100px)",
  xl: "only screen and (max-width: 1300px)"
);
@mixin media($breakpoint) {
  @media #{map-get($breakpoints, $breakpoint)} {
    @content;
  }
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  text-decoration: none;
}
.button {
  border: none;
  outline: none;
}

[v-cloak] {
  display: none;
}

.topic {
  padding: 0 10px;
}
.page_title {
  text-align: center;
  margin: 85px 0 20px;
  font-family: serif;
  font-size: 24px;
}
.articles {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}  
.art {
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  margin:0 20px 20px;
  width: 100%;
  max-width: 500px;
  @include media(xl) {
    max-width: 400px;
  }
  @include media(l) {
    max-width: 600px;
  }
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  /* box-shadow: 0 0 1px lightgray; */
  &_contents {
    margin-right: 25px;
  }
  a {
    text-decoration: none;
    color: #000;
    &:hover {
      text-decoration: underline;
    }
  }
  &_img {
    width: 100px;
    height: 100px;
    border-radius: 10px;
  }
  &_author_date {
    opacity: 0.8;
    font-size: 14px;
  }
}




#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  // padding: 30px;
  // text-align: center;
  padding-left: 20px;
}

#nav a {
  display: inline-block;
  width: 100%;
  padding: 5px;
  // font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}
.nav_title {
  vertical-align: top;
  margin-left: 5px;
}
.nav_icon {
  // width: 24px;
  // height: 24px;
}

.search_box {
  position: relative;
  &:before {
    content: "";           /* 疑似要素に必須 */
    width: 24px;           /* アイコンの横幅 */
    height: 24px;          /* アイコンの高さ */
    background: url('../src/assets/search.svg') no-repeat center center / auto 100%; /* 背景にアイコン画像を配置 */
    display: inline-block; /* 高さを持たせるためにインラインブロック要素にする */
    position: absolute;    /* 相対位置に指定 */
    top: 10.5px;              /* アイコンの位置。微調整してね */
    left: 10px;
  }
}

header {
  height: 65px;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 10;
  background-color: #fff;
  box-shadow: 0 0 5px #111;
}
.header {
  &_wrap {
    position: relative;
  }
  &_icon {
    position: absolute;
    top: 20.5px;
    left: 20px;
    display: none;
    border: none;
    outline: none;
    background-color: #fff;
    z-index: 1000;
    // border: none;
    // &_img {
    // z-index: 1000;
    // }
    @include media(m) {
      display: block;
    }
  }
  &_title {
    position: absolute;
    top: 10px;
    right: 50px;
  }
  &_form {
    display: inline-block;
    position: absolute;
    top: 10px;
    left: 50px;
    @include media(m) {
      left: 80px;
    }
  }
  &_search {
    width: 300px;
    padding: 15px 15px 15px 40px;
    background-color: #F1F3F4;
    border: 0px solid #F1F3F4;
    border-radius: 10px;
    @include media(m) {
      width: 83px;
    }
    &:focus {
      background-color: #fff;
      box-shadow: 0 0 10px #F1F3F4;
      outline: 3px solid #F1F3F4;
      @include media(m) {
        width: 300px;
      }
    }
  }
}

.main_contents {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: 100vh;
  &_sidebar {
    width: 200px;
    max-width: 200px;
    // background-color: red;
    padding-top: 85px;
    // font-size: 24px;
    // box-shadow: 0 0 3px #000;
    max-height: 100vh;
    overflow: hidden;
    flex: 1;
    @include media(m) {
      display: none;
    }
    &:hover {
      overflow: auto
    }
  }
  &_main {
    width: calc(100% - 200px);
    // background-color: blue;
    // padding: 0 45px;
    max-height: 100vh;
    flex: 2;
    overflow: auto;
  }
}


#nav a.router-link-exact-active {
  background-color: rgb(227, 237, 253);
}

.view-enter, .view-leave {
  opacity: 0;
}
.view-enter-to {
  opacity: 1;
}
.view-enter-active {
  transition: opacity 3s;
}




// #menu_cover {
//   background-color: #a9a9a9;
//   box-sizing: border-box;
//   height: 100%;
//   width: 50%;
//   padding: 10px;
//   position: fixed;
//   left: -100%;
//   top: 65px;
//   transition: transform 1s linear 0s;
//   z-index: 100;
//   // box-shadow: 3px 0 3px -3px #000;
//   & >  a.router-link-exact-active {
//     background-color: rgb(227, 237, 253);
//   }
// }

.menu_cover_class {
  background-color: #a9a9a9;
  box-sizing: border-box;
  height: 100%;
  width: 50%;
  padding: 10px;
  position: fixed;
  left: -100%;
  top: 65px;
  transition: transform 1s linear 0s;
  z-index: 100;
  // box-shadow: 3px 0 3px -3px #000;
  & >  a.router-link-exact-active {
    background-color: rgb(227, 237, 253);
  }
}

.open {
  left: 0;
  top: 65px;
}

.search_wrap {
  display: none;
}


</style>

<script>

export default {
  name: 'App',
  data() {
    return {
      // toggle: false
    }
  },
  methods: {
    menuToggle() {
      // this.toggle = !this.toggle
    },
    changeWord(e) {
      this.$store.commit('changeKeyword', e.target.value)
      this.$router.push({
        path: 'search',
        query: { timestamp: Date.now() }
      })
    }
  },
  computed: {
    message() {
      return this.$store.state.message
    }
  }
}


document.addEventListener('DOMContentLoaded', ()=> {

  const iconMenu = document.getElementById('menu_icon')
  const opendMenu = document.getElementById('menu_cover')


  addEventListener('click', (e) => {
    if(e.target != opendMenu && opendMenu.classList.contains('open') == true) {
      opendMenu.classList.remove('open')
      console.log('閉じる通ってる')
    }
  })

  addEventListener('click', (e) => {
    if(e.target == iconMenu) {
      opendMenu.classList.toggle('open')
      console.log('開く通ってる')
    }
  })


})
</script>