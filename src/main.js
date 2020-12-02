import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import BaseInput from "@/components/BaseInput";

const app = createApp(App);
app.component("base-text", BaseInput);
app.use(router);
app.mount("#app");
