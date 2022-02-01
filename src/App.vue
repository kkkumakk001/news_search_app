<template>
  <div id="app">
    <header>
      <img src="../src/assets/hamburger.svg" alt="メニューアイコン">
    </header>

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
}

[v-cloak] {
  display: none;
}

.topic {
  padding: 0 10px;
}
h1 {
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

header {
  height: 65px;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 10;
  background-color: #fff;
  box-shadow: 0 0 5px #111;
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





</style>
