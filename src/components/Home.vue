<template>
    <div class="container home">
      <div class="columns">
        <div class="column is-half">
          <img class="home-avatar" src="../assets/imgs/girl.svg" />

          <div>
            <h1 class="home-user">{{ userName }}</h1>
          </div>

          <NeedBar 
            v-for="need in needs" 
            :title="need.name"
            :key="need.name"
            :status="need.status"
            class="column is-half"></NeedBar>

        </div>

        <div class="column is-half">
          <div class="entry">
            <router-link :to="{ name: 'Entry' }" class="btn-entry">
              <button class="entry__btn">
                <img class="home-icon--entry" src="../assets/imgs/add.svg" />
                <span class="entry-copy">Add entry</span>
              </button>
            </router-link>
          </div>
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
  created() {
    this.fetchData()
  },
  data () {
      return {
          //userName: ''
      }
  },
  computed: {
      needs(){
          return this.$store.state.needs
      },
      userName(){
        return this.$store.state.users[0].firstName
      } 
  },
  methods: {
    fetchData() {
      this.$store.dispatch('getNeedData')
      this.$store.dispatch('getUserData')
      //this.userName = this.$store.state.users[0].firstName
    }
  }
}
</script>

<style lang="sass">
.main-container 
  position: relative
  height: 100%

  .home-user
    font-size: 1.5em
    font-weight: bold

  .home-avatar
    height: 200px

  .entry
    height: 50%
    display: flex
    justify-content: center
    align-items: center

    &__btn
      display: flex
      height: 50px
      padding: 10px
      cursor: pointer

      img 
        height: 100%
        width: 50%

      span
        width: 50%
        margin: auto


</style>
