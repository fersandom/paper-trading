<script setup>
import axios from "axios";

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
  <h1>Hola</h1>
</template>

<style scoped></style>
