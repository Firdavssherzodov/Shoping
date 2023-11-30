import "./assets/main.css";
import "primevue/resources/themes/lara-light-green/theme.css";


import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router";
import PrimeVue from "primevue/config";
import { createPinia } from 'pinia'

const app = createApp(App);
const pinia = createPinia()

app.use(pinia)
app.use(router);
app.use(PrimeVue);
app.mount("#app");



// function myFunction() {

// }  
// // export  { myFunction};


