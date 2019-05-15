<template>

    <div class="select">
        <label>How much did you sleep?</label>
        <select v-model="hrsSlept">
            <option 
                v-for="hr in hrsSleep"
                :key="hr.key"
                :value="hr.value">
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
