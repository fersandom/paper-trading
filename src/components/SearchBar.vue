<script setup>
import { inject } from "vue";
import servicesStore from "../stores/servicesStore";
inject[servicesStore]

const props = defineProps({

})
let searchQuery = "";

</script>

<template>
    <form @submit.prevent=servicesStore.methods.search(searchQuery)>
        <input type="text" placeholder="Search for a stock" v-model="searchQuery" >
        <input type="submit" value="Search">
    </form>
</template>

<styles></styles>