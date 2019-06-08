
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
           /*  this.renderChart({
            labels: ['Monday', 'Tuesday', 'Wednesday', 'Friday', 'Saturday', 'Sunday'],
            datasets: [
                {
                label: 'Hours slept',
                backgroundColor: '#f87979',
                data: [40, 39, 10, 40, 39, 80]
                }
            ]
            }, {responsive: true, maintainAspectRatio: false})
            */
        } 
  
    }
</script>