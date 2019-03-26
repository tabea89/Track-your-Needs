<template>
    <div class="container">
        <h2> {{ title }}</h2>
        <div class="bar"></div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            title: "Sleep"
        }

    }

}
</script>

<style lang="sass">

.bar
    background: grey
    border-radius: 12px
    width: 100%
    height: 30px

</style>
