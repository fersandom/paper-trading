<script setup>
import { inject } from 'vue';
import servicesStore from '../stores/servicesStore';

const props = defineProps({
    symbol: String,
    description: String
})
inject(servicesStore);
</script>

<template>
        <h4>{{ props.symbol }}</h4>
        <p>{{ props.description }}</p>
        <button @click="servicesStore.methods.fetchChartData(props.symbol)">Chart</button>
</template>

<style scoped>

</style>