import { createApp } from 'vue'
import App from './App.vue'
import { provide } from 'vue'
import servicesStore from './stores/servicesStore'


createApp(App)
    .provide(servicesStore)
    .mount('#app')
