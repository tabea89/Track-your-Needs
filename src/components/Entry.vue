<template>
    <div class="container">
        <h1 class="entry__header">How did today go?</h1>

        <div class="columns is-mobile">
            <div class="column is-half">
                <div class="entry__needicon">
                    <img class="entry__needicon--svg" src="../assets/imgs/moon.svg" />
                </div>
                <span>Sleep</span>
            </div>

            <div class="is-divider-vertical"></div>

            <div class="column is-half entry__data">

                <Sleep v-if="userStatus == 'empty'"></Sleep>

                <Social  v-else-if="userStatus == 'sleepLogged'"></Social>

                <p v-else>Entry already added</p>

                <button class="button is-primary submit" @click="save">Save</button>
            </div>
        </div>
    </div>
</template>

<script>
import Sleep from '../components/Sleep'
import Social from '../components/Social'

import 'bulma-divider/dist/css/bulma-divider.min.css'

export default {
    name: 'Entry',
    components: {
        Sleep,
        Social
  },
    data () {
        return {
            status: this.$store.state.users[0].status
        }
    },
    computed: {
        hrsSleep(){
            return this.$store.state.hrsSleep
        },
        userStatus(){
            return this.$store.state.users[0].status
        }
    },
    methods: {
        save: function(){
            this.$store.commit('updateEntry', this.$store.state.needs[0].status)
            this.$store.dispatch('newEntry')

            if (this.userStatus == 'empty') {
                //this.userStatus = 'sleepLogged'
                this.$store.commit('updateStatus', 'sleepLogged')
                // console.log('Status 1', this.userStatus)
            }
            else if (this.userStatus == 'sleepLogged'){
                this.$store.state.users[0].status = 'socialLogged'
                this.$router.push({name:'home'})
                // console.log('Status 1', this.userStatus)
            }

           
        }
    }
}
</script>

<style lang="sass">

.entry__header
    margin-bottom: 40px
.entry__needicon
    width: 100%
    img
        width: 40%

.entry__data
    display: flex
    flex-direction: column
    align-items: center
    width: 100%

    button
        width: 200px


</style>
