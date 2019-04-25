<template>
    <div class="container">
        <h2> {{ title }}</h2>
        <div class="bar">
            <div class="needs-status" :style="{ width: status + '%', backgroundColor: activeColor}"></div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'needbar',
    props: ['title', 'status'],
    computed: {
        activeColor: function() {
            if (this.status >= 70) {
                return 'green'
            }
            else if (this.status >= 40){
                return 'orange'
            }
            else {
                return 'red'
            }
        }
    }
}
</script>

<style lang="sass">

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

</style>
