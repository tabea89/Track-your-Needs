<template>
  <div id="app">
    <div class="container">
      <Header></Header>
      <HelloWorld msg="Welcome to Track Your Needs!"/>

      <footer class="footer">
        <p>© 2019 Tabea Simon</p>
      </footer>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    Header
  }
}
</script>

<style>
body, html {
  margin: 0px !important;
}
#app {
  height: 100vh;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.container {
  position: relative;
  height: 100%;
}

footer {
  position: absolute;
  height: 40px;
  width: 100%;
  bottom: 0;
  background-color: #C4C4C4;
}
</style>
