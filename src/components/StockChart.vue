<script>
import { Line } from 'vue-chartjs'
import {
    Chart as ChartJS, Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement,

} from 'chart.js'
import { inject } from 'vue'
import servicesStore from '../stores/servicesStore'
inject(servicesStore)

ChartJS.register(Title, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale)

export default {
    name: 'LineChart',
    components: { Line },
    data() {
        return {
            chartData: {
                labels: servicesStore.state.stockChartData.t,
                datasets: [{ data: servicesStore.state.stockChartData.c }]
            },
            chartOptions: {
                responsive: true
            }
        }
    }
}

</script>

<template>
    <div class="chart">
        <Line id="my-chart-id" :options="chartOptions" :data="chartData" />
    </div>
</template>

<style scoped>
.chart {
    width: 60%;
}
</style>