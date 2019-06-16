<template>
    <button class="container need" v-on:click="changeOverview(title)">
        <h1> {{ title }}</h1>
        <div class="bar">
            <div class="needs-status" 
                :style="{ width: status + '%', backgroundColor: activeColor}"></div>
        </div>
    </button>
</template>

<script>

export default {
    name: 'needbar',
    props: ['title', 'status'],
    computed: {
        activeColor: function() {
            if (this.status >= 70) {
                return '#AFE46B'
            }
            else if (this.status >= 40){
                return '#F7c5c4'
            }
            else {
                return '#FE8989'
            }
        }
    },
    methods: {
        changeOverview: function (need) {
            this.$emit('switch_overview', need)
        }
    }
}
</script>

<style lang="sass">

.need
    border: none
    background-color: rgba(0, 0, 0, 0)

    &:focus
        background-color: rgba(0, 0, 0, 0.1)
        outline: none

    &:hover
        background-color: rgba(0, 0, 0, 0.1)

.bar
    background: white
    border-radius: 12px
    border: 1px solid black
    width: 100%
    height: 30px
    overflow: hidden

    .needs-status
        background-color: blue
        height: 30px
        width: 0px
        transition: width .4s ease-in-out

</style>
