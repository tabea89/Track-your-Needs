<template>
  <div id="app">
    <div class="main-container">
      <Header></Header>
      <HelloWorld msg="Welcome to Track Your Needs!"/>
      
      <div class="container home">
        <div class="column is-half">
          <img class="home-avatar" src="./assets/imgs/girl.svg" />

          <div>
            <h2 class="home-user">Tabea</h2>
          </div>

          <NeedBar 
            v-for="need in needs" 
            :title="need.title"
            :key="need.title"
            :status="need.status"
            class="column is-half"></NeedBar>

        </div>

        <div class="column is-half">
          <div class="home-entry">
            <button class="btn-entry">Add entry</button>
          </div>
        </div>
      </div>

      <footer class="">
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
