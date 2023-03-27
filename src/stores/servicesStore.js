import axios from "axios";
import { reactive, readonly } from "vue";

const state = reactive({
    cleanResults: [],
    stockChartData: Object
})

const methods = {

    async search(query) {
        let rawResults
        state.cleanResults = []
        await axios.get(`https://finnhub.io/api/v1/search?q=${query}&token=${import.meta.env.VITE_API_KEY}`)
            .then(response => { rawResults = response.data })
        this.cleanResults(rawResults)        
    },

    cleanResults(object){
        object.result.forEach(result => {
           if (!result.displaySymbol.includes(".")){
            state.cleanResults.push(result);
           } 
        });
    },

    async fetchChartData(symbol) {
        await axios.get(`https://finnhub.io/api/v1/stock/candle?symbol=${symbol}&resolution=D&count=200&token=${import.meta.env.VITE_API_KEY}`)
            .then(response => { state.stockChartData = response.data });
            console.log(state.stockChartData);
    },


}

export default {
    state: readonly(state),
    methods
}