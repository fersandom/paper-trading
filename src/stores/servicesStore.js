import axios from "axios";
import { reactive, readonly } from "vue";

const state = reactive({
    cleanResults: [],
    rawResults: {}
})

const methods = {

    async search(query) {
        state.cleanResults = []
        await axios.get(`https://finnhub.io/api/v1/search?q=${query}&token=${import.meta.env.VITE_API_KEY}`)
            .then(response => { state.rawResults = response.data })
        this.cleanResults(state.rawResults)
        console.log(state.cleanResults);
        
    },

    cleanResults(object){
        object.result.forEach(result => {
           if (!result.displaySymbol.includes(".")){
            state.cleanResults.push(result);
           } 
        });
    },

}

export default {
    state: readonly(state),
    methods
}