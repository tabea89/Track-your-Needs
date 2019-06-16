<template>
    <div class="weekly-overview">
        <div class="social-wrapper">
            <div v-for="entry in entries"
                :key="entry"
                class="social-entry">
                <div class="social-icon">
                    <img v-if="entry.socialized == 100" src="../assets/img/smile.svg" />
                    <img v-else-if="entry.socialized == 10" src="../assets/img/sad.svg" />
                </div>
                <span>{{entry.weekday}}</span>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'needbar',
    props: ['entries']
}
</script>

<style lang="sass">

.weekly-overview
    width: 100%
    margin-top: 50px

    .social-wrapper
        display: flex
        flex-wrap: wrap
        justify-content: space-between

        .social-entry
            display: flex
            flex-direction: column
            align-items: center

        .social-icon
            height: 30px
            width: 30px

</style>
