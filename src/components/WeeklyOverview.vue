<template>
    <div class="container">
       <p> {{ day }} : {{ quantity }} hours of Sleep</p>
    </div>
</template>

<script>

export default {
    name: 'needbar',
    props: ['day', 'quantity'],
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
    }
}
</script>

<style lang="sass">


</style>
