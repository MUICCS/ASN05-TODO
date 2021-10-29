import { createApp } from "vue";
import App from "./App.vue";

// calling a factory function
const app = createApp(App);

// mount to a div with id #app
app.mount("#app");
