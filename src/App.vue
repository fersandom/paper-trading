<script setup>
import axios from "axios";
import NavigatorBar from "./components/NavigatorBar.vue";

console.log(import.meta.env.VITE_API_KEY);
async function fetchApple() {
  let dataStock;
  await axios.get(`https://finnhub.io/api/v1/stock/candle?symbol=IBML&resolution=D&count=500&token=${import.meta.env.VITE_API_KEY}`)
    .then(response => { dataStock = response.data });
  console.log(dataStock);
}

fetchApple();
</script>

<template>
<NavigatorBar title="Paper Trading"/>
</template>

<style scoped></style>
