<template>
    <div class="nav navbar">
        <router-link :to="{ name: 'home' }" class="home">Home</router-link>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="sass">
.navbar
    background-color: #C4C4C4

.nav 
    background-color: #C4C4C4
    text-align: left
    height: 40px


.app_name 
    font-size: 15px
    padding: 5px
    margin: 0px


</style>
