<template>
    <div class="container">
        <h2 class="entry__header">How did today go?</h2>

        <div class="columns is-mobile">
            <div class="column is-half">
                <div class="entry__needicon">
                    <img class="entry__needicon--svg" src="../assets/imgs/moon.svg" />
                </div>
                <span>Sleep</span>
            </div>

            <div class="is-divider-vertical"></div>

            <div class="column is-half entry__data">
                <h3>How much sleep did you get today?</h3>

                <div class="select">
                    <select v-model="hrsSlept">
                        <option
                        :value=0>
                            0
                        </option>
                        <option 
                            v-for="hr in hrsSleep"
                            :key="hr.key"
                            :value="hr.number">
                                {{hr.number}} 
                        </option>
                        <option>With options</option>
                    </select>
                </div>

                <button class="button is-primary submit" @click="save">Save</button>
            </div>
        </div>
    </div>
</template>

<script>
import 'bulma-divider/dist/css/bulma-divider.min.css'

export default {
    name: 'Entry',
    data () {
        return {
            hrsSleep: [
                {key: 1, number: '1'},
                {key: 3, number: '2'},
                {key: 4, number: '3'},
                {key: 5, number: '4'},
                {key: 6, number: '5'},
                {key: 7, number: '6'},
                {key: 8, number: '7'},
                {key: 9, number: '8'},
                {key: 10, number: '9+'}
            ],
            hrsSlept: 0
        }
    },
    methods: {
        save: function(){
            console.log('SAVE', this.hrsSlept)
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
    width: 100%

    .select
        max-width: 200px
        margin-bottom: 30px
        margin-top: 30px

</style>
