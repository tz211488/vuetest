<template>

  <div id="app">
    <header-wrapper />
    <transition name="router-fade" mode="out-in">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
    </transition>
    <transition name="router-fade" mode="out-in">
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </transition>
    <footer-wrapper/>
  </div>
</template>
<script>
  // @ is an alias to /src

  import './assets/js/jquery'
  import './assets/js/materialize'
  import './assets/sass/materialize.scss'
  import './assets/style.scss'
  import './assets/theme'

  import headerWrapper from './components/header/headerWrapper'
  import footerWrapper from "./components/footer/footerWrapper";

  import {Component} from './assets/js/materialize'

  export default {
    components:{headerWrapper,footerWrapper}
  }
</script>

<style lang="scss">
  @import "https://fonts.googleapis.com/icon?family=Material+Icons";
  @import "./assets/sass/materialize.scss";

</style>
