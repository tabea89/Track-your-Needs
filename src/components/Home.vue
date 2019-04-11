<template>
    <div class="container home">
        <div class="column is-half">
          <img class="home-avatar" src="../assets/imgs/girl.svg" />

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
            <router-link :to="{ name: 'Entry' }" class="btn-entry">Add entry</router-link>
          </div>
        </div>
      </div>

</template>

<script>
import NeedBar from '../components/NeedBar'

import 'bulma/css/bulma.css'

export default {
    name: 'home',
    components: {
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
  },

}
</script>

<style lang="sass">
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

    a
      color: white

    .btn-entry
      height: 100px
      width: 200px
      background-color: grey


</style>
