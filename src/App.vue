<script setup>
import { inject } from "vue";
import NavBar from "./components/NavBar.vue";
import SearchResultsContainer from "./components/SearchResultsContainer.vue";
import servicesStore from "./stores/servicesStore";
import StockChart from "./components/StockChart.vue";
inject(servicesStore);

</script>

<template>
  <NavBar title="Paper Trading" />

  <section v-if="servicesStore.state.cleanResults.length !== 0">
    <SearchResultsContainer :results=servicesStore.state.cleanResults />
  </section>

  <section>
    <StockChart />
  </section>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Karla&display=swap');

* {
  font-family: 'Karla', sans-serif;
}
</style>
