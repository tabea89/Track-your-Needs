<template>
   <div class="columns is-mobile">
        <div class="column is-half">
            <div class="entry__needicon">
                <img class="entry__needicon--svg" src="../assets/img/friendship.svg"/>
            </div>
            <span>Social Life</span>
        </div>

        <div class="is-divider-vertical"></div>

        <div class="column is-half entry__data">

            <div class="control">
                <p>Did you talk to a friend?</p>
                <label class="radio"> 
                    <input type="radio" name="answer" value="Yes" v-model="picked">
                    Yes
                </label>
                <label class="radio">
                    <input type="radio" name="answer" value="No" v-model="picked">
                    No
                </label>
            </div>
        
        </div>
            
    </div>

</template>

<script>
export default {
    name: 'Social',
    data () {
        return {
            picked: ""
        }
    },
    watch: {
        picked: function(val){
            if (val == "Yes") {
                this.$store.state.needs[1].status = 100
            } 
            else if (val == "No") {
                this.$store.state.needs[1].status = 10
            }
        }
    }
}
</script>

<style lang="sass">

</style>
