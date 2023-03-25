<script setup>
import SearchBar from "./SearchBar.vue";
const props = defineProps({
    title: String,

})
</script>

<template>

<nav>
    <h2>{{ props.title }}</h2>
    <SearchBar />
</nav>

</template>

<style scoped>
nav{
    display:flex;
    align-items: center;
    justify-content: space-between;
    height: 6rem;
}
</style>