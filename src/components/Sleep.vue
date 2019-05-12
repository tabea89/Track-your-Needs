<template>
    <div class="select">
        <label>How much did you sleep?</label>
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
        </select>
    </div>

</template>

<script>
export default {
    name: 'Sleep',
    data () {
        return {
            hrsSlept: 0
        }
    },
    watch: {
        hrsSlept: function(val){
            this.$store.state.needs[0].status = val
        }
    },
    computed: {
        hrsSleep(){
            return this.$store.state.hrsSleep
        } 
    },
    methods: {
        save: function(){
            this.$store.commit('updateEntry', this.hrsSlept)
            this.$store.dispatch('newEntry')

            this.$router.push({name:'home'})
        }
    }

}
</script>

<style lang="sass">

.select
    position: relative
    width: 200px
    margin-bottom: 30px
    margin-top: 30px

    label
        position: absolute
        left: 0
        top: -30px
        width: 100%

    select
        width: 100%

</style>
