
<script>
    import { Bar, mixins } from 'vue-chartjs';
    const { reactiveProp } = mixins;

    export default {
        extends: Bar,
        mixins: [reactiveProp],
        data: () => ({
        options: {
                responsive: true,
                maintainAspectRatio: true,
                scales: {
                yAxes: [{
                    ticks: {
                        suggestedMin: 0,
                        suggestedMax: 9
                        }
                    }]
                }
            }
        }),
        mounted () {
            this.renderChart(this.chartData, this.options)
        } 
  
    }
</script>