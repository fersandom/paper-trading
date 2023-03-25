<script setup>
import SearchResult from './SearchResult.vue';

const props = defineProps({
    results: Object
})
</script>

<template>
    <div v-for="result, index in props.results">
        <SearchResult :symbol=result.displaySymbol :description=result.description />
    </div>
</template>

<style scoped>
section {
    width: 60%;
    background-color: grey;
}
</style>