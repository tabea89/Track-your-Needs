<template>
  <div id="app">
    <div class="main-container">
      <Header></Header>
      <router-view></router-view>

      <footer class="">
        <p>© 2019 Tabea Simon</p>
      </footer>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'

import 'bulma/css/bulma.css'

export default {
  name: 'app',
  components: {
    Header
  }

}
</script>

<style lang="sass">
body, html 
  margin: 0px !important

#app 
  height: 100vh
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50

.main-container 
  position: relative
  height: 100%

  .home
    display: flex

  .home-user
    font-size: 1.5em
    font-weight: bold

  .home-avatar
    height: 200px

  .home-entry
    height: 50%
    display: flex
    justify-content: center
    align-items: center

    .btn-entry
      height: 100px
      width: 200px
      background-color: grey

  footer 
    position: absolute
    height: 40px
    width: 100%
    bottom: 0
    background-color: #C4C4C4

</style>
