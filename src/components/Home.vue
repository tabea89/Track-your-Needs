<template>
    <div class="container home">
      <div class="columns">
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
    this.getNeedData()
  },
  data () {
      return {
          hrsSlept: [],
          needs: [
          { title: 'Sleep', status: 0 },
          { title: 'Social Life', status: 80 },
          { title: 'Nutrition', status: 10 },
          { title: 'Sport', status: 50 }
        ]
      }
  },
  methods:{
    getNeedData(){
      db.collection('needs').get().then((querySnapshot)=>{

        if (querySnapshot.empty) { //Check whether there are any documents in the result
            console.log('no documents found');
        } else {
          let hrsSleep = []
          querySnapshot.forEach(doc=>{
            hrsSleep.push(doc.data())
          })
          this.needs[0].status = parseInt(hrsSleep[hrsSleep.length-1].hrsSlept)*10
        }
      })
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
