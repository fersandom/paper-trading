<script setup>
import Search from "./Search.vue";
const props = defineProps({
    title: String,

})
</script>

<template>

<nav>
    <h2>{{ props.title }}</h2>
    <Search />
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