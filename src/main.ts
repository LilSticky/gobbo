import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";

const app = createApp(App);

// Modules
import router from "./router";
import PrimeVue from "primevue/config";
app
  .use(router)
  .use(PrimeVue, { ripple: true, zIndex: true, inputStyle: "filled" });

// CSS
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "primevue/resources/themes/arya-orange/theme.css";

// Components
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import Toast from "primevue/toast";
import InputSwitch from "primevue/inputswitch";
import Divider from "primevue/divider";
import Dropdown from "primevue/dropdown";

app
  .component("Button", Button)
  .component("InputText", InputText)
  .component("Toast", Toast)
  .component("InputSwitch", InputSwitch)
  .component("Divider", Divider)
  .component("Dropdown", Dropdown);

// Initialize
app.mount("#app");
