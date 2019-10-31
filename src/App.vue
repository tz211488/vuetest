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
  </div>
</template>
<script>
  // @ is an alias to /src
  import 'jquery'
  import './assets/js/materialize'
  import './assets/sass/materialize.scss'
  import './assets/style.scss'
  import './assets/theme'

  import headerWrapper from './components/header/headerWrapper'

  export default {
    components:{headerWrapper}
  }
</script>

<style lang="scss">

</style>
