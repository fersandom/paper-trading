<script setup>
const props = defineProps({
    symbol: String,
    description: String
})
</script>

<template>
        <h4>{{ props.symbol }}</h4>
        <p>{{ props.description }}</p>
</template>

<style scoped></style>