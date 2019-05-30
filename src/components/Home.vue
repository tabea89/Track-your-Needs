<template>
    <div class="container home">
      <div class="columns">
        <div class="column is-half">
          <img class="home-avatar" src="../assets/img/girl.svg" />

          <div>
            <h1 v-if="userName" class="home-user">{{ userName }}</h1>
            <p v-else></p>
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
                <img class="home-icon--entry" src="../assets/img/add.svg" />
                <span v-if="userStatus == 'empty'" class="entry-copy">Add entry</span>
                <span v-else class="entry-copy">Update entry</span>
              </button>
            </router-link>
          </div>

          <weekly-chart 
            v-show="!loaded"
            :chartData="chartData"
            :options="options"
            ></weekly-chart>

          <WeeklyOverview
            v-for="entry in entries[0].sleep" 
            :day="entry.weekday"
            :quantity="entry.hrsSlept"
            :key="entry.timeStamp">
          </WeeklyOverview>

        </div>
      </div>
    </div>

</template>

<script>
import NeedBar from '../components/NeedBar';
import WeeklyOverview from '../components/WeeklyOverview';
import WeeklyChart from '../components/WeeklyChart';

export default {
    name: 'home',
    components: {
        NeedBar,
        WeeklyOverview,
        WeeklyChart
  },
  data: () => ({
    chartData:  {
      datacollection: {
        labels: ['January', 'February'],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: '#f87979',
            data: [10, 40]
          }
        ]
      }
    },
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  }),
  async created(){
    this.loaded = false
    this.$store.dispatch('getNeedData')
    this.$store.dispatch('getUserData')
    console.log('TIRED', this.chartData)

    this.loaded = true
  },
  computed: {
      needs(){
        return this.$store.state.needs
      },
      userName(){
        if (this.$store.state.users[0]) {
          return this.$store.state.users[0].firstName
        }
        else {
          return ''
        }
      },
      userStatus(){
        if (this.$store.state.users[0]) {
          return this.$store.state.users[0].status
        }
        else {
          return ''
        }
      },
      entries(){
        if (this.$store.state.entries) {
          let weekdays = this.$store.state.entries[0].sleep.map(a => a.weekday);
          let hrsSlept = this.$store.state.entries[0].sleep.map(a => a.hrsSlept);
          console.log('entries', this.$store.state.entries)
          //console.log('weekdays', hrsSlept)
          return this.$store.state.entries
        }
        else {
          return ''
        }
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
