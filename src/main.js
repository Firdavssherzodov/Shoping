import "./assets/main.css";
import 'primeicons/primeicons.css'
import "primevue/resources/themes/lara-light-green/theme.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router";
import PrimeVue from "primevue/config";
import { createPinia } from "pinia";
import ToastService from 'primevue/toastservice';

const app = createApp(App);
const pinia = createPinia();
app.use(pinia);
app.use(router);
app.use(PrimeVue);
app.use(ToastService);
app.mount("#app");
