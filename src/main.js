import "./assets/main.css";
import "primevue/resources/themes/lara-light-green/theme.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router";
import PrimeVue from "primevue/config";
import Rating from "primevue/rating";

const app = createApp(App);

app.use(router);
app.use(PrimeVue);
app.mount("#app");
