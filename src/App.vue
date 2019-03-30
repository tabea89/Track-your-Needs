<template>
  <div id="app">
    <div class="main-container">
      <Header></Header>
      <HelloWorld msg="Welcome to Track Your Needs!"/>

      <NeedBar 
        v-for="need in needs" 
        :title="need.title"
        :key="need.title"
        :status="need.status"
        class="column is-one-third"></NeedBar>

      <footer class="footer">
        <p>© 2019 Tabea Simon</p>
      </footer>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue'
import NeedBar from './components/NeedBar.vue'
import 'bulma/css/bulma.css'

export default {
  name: 'app',
  components: {
    HelloWorld,
    Header,
    NeedBar
  },
  data () {
      return {
          needs: [
          { title: 'Sleep', status: 30 },
          { title: 'Social Life', status: 80 },
          { title: 'Nutrition', status: 10 },
          { title: 'Sport', status: 90 }
        ]
      }

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

  footer 
    position: absolute
    height: 40px
    width: 100%
    bottom: 0
    background-color: #C4C4C4

</style>
