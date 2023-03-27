<script setup>
import SearchResult from './SearchResult.vue';

const props = defineProps({
    results: Object
})
</script>

<template>
    <section v-for="result in props.results">
        <SearchResult :symbol=result.displaySymbol :description=result.description />
    </section>
</template>

<style scoped>
section {
    width: 60%;
    background-color: grey;
}
</style>