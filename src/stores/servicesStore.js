import axios from "axios";
import { reactive, readonly } from "vue";

const state = reactive({
    results: null

})

const methods = {

    async search(query) {
        await axios.get(`https://finnhub.io/api/v1/search?q=${query}&token=${import.meta.env.VITE_API_KEY}`)
            .then(response => { state.results = response.data });
        console.log(state.results);
    }
}

export default {
    state: readonly(state),
    methods
}