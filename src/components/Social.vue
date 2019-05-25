<template>
    <div>
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

</template>

<script>
export default {
    name: 'Social',
    data () {
        return {
            picked: ""
        }
    },
    computed: {
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
    },
    methods: {
    }

}
</script>

<style lang="sass">

</style>
