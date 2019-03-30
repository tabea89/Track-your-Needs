<template>
    <div class="container">
        <h2> {{ title }}</h2>
        <div class="bar">
            <div class="needs-status" v-bind:style="{ width: status + '%'}"></div>
        </div>
    </div>
</template>

<script>

export default {
    props: ['title', 'status']
}
</script>

<style lang="sass">

.bar
    background: grey
    border-radius: 12px
    width: 100%
    height: 30px
    overflow: hidden

    .needs-status
        background-color: blue
        height: 30px

</style>
