<template>
    <div class="container">
        <h1 class="entry__header">How did today go?</h1>

        <div class="columns is-mobile">
            <div class="column is-half">
                <div class="entry__needicon">
                    <img class="entry__needicon--svg" src="../assets/img/moon.svg"/>
                </div>
                <span>Sleep</span>
            </div>

            <div class="is-divider-vertical"></div>

            <div class="column is-half entry__data">

                <Sleep v-if="userStatus == 'empty'"></Sleep>

                <Social  v-else-if="userStatus == 'sleepLogged'"></Social>

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
    created(){
        this.$store.state.users[0].status = 'empty'   
    },
    computed: {
        hrsSleep(){
            return this.$store.state.hrsSleep
        },
        userStatus(){
            return this.$store.state.users[0].status
        },
        icon(){
            return "../assets/img/moon.svg"
        }
    },
    methods: {
        save: function(){
            this.$store.commit('updateEntry', this.$store.state.needs[0].status)

            if (this.userStatus === 'empty') {
                this.$store.commit('updateStatus', 'sleepLogged')
                this.$store.dispatch('newSleepEntry')
            }
            else if (this.userStatus === 'sleepLogged'){
                this.$store.state.users[0].status = 'socialLogged'
                this.$store.dispatch('newSocialEntry')
                this.$router.push({name:'home'})
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
