<template>
    <div class="weekly-overview">
        <div class="icons">
            <div v-for="entry in entries" class="icon"
            :key="entry">
                <img v-if="entry == true" src="../assets/img/smile.svg" />
                <img v-else-if="entry == false" src="../assets/img/sad.svg" />
                <img v-else src="../assets/img/moon.svg" />
            </div>
        </div>
        <div class="weekdays">
            <div class="weekday" v-for="weekday in weekdays"
                :key="weekday">
                <span>{{weekday}}</span>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'needbar',
    data (){
        return {
            weekdays: this.$store.state.weekdays
        }
    },
    props: ['entries'],
    computed: {
    }
}
</script>

<style lang="sass">

.weekly-overview
    width: 100%

    .icons
        display: flex

        .icon
            height: 50px
            width: 50px
            margin-right: 30px

    .weekdays
        display: flex
        justify-content: space-between

        .weekday



</style>
