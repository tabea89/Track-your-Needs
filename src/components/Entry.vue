<template>
    <div class="container">
        <h2 class="entry--header">How did today go?</h2>

        <div class="columns is-mobile">
            <div class="column is-half">
                <div class="entry--needicon">
                    <img src="../assets/imgs/moon.svg" />
                </div>
                <span>Sleep</span>
            </div>

            <div class="is-divider-vertical"></div>

            <div class="column is-half">
                <h3>How much sleep did you get today?</h3>
                <div class="select">
                    <select>
                        <option 
                            v-for="hr in hrsSleep"
                            :key="hr.key">
                                {{hr.number}} 
                        </option>
                        <option>With options</option>
                    </select>
                </div>
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
                {key: 2, number: '2'},
                {key: 2, number: '3'},
                {key: 2, number: '4'},
                {key: 2, number: '5'},
                {key: 2, number: '6'},
                {key: 2, number: '7'},
                {key: 2, number: '8'},
                {key: 2, number: '9+'}
            ]
        }
    }
}
</script>

<style lang="sass">
.entry--header
    margin-bottom: 40px

.entry--needicon
    width: 100%

    img
        width: 40%

</style>
