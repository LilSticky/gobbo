import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";

const app = createApp(App);

// DB
import { initializeApp } from "firebase/app";
initializeApp({
  apiKey: "AIzaSyA3S3iheJPl3k1ZsgkaPJB-RDDhdWamLDY",
  authDomain: "gobbo-88113.firebaseapp.com",
  databaseURL:
    "https://gobbo-88113-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "gobbo-88113",
  storageBucket: "gobbo-88113.appspot.com",
  messagingSenderId: "15022917957",
  appId: "1:15022917957:web:1c7a64be1cdd723ebed62c",
  measurementId: "G-D3DX0KLQHR",
})

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
import PanelMenu from 'primevue/panelmenu';
import MenuBar from 'primevue/menubar';
import InputNumber from 'primevue/inputnumber';

app
  .component("Button", Button)
  .component("InputText", InputText)
  .component("Toast", Toast)
  .component("InputSwitch", InputSwitch)
  .component("Divider", Divider)
  .component("Dropdown", Dropdown)
  .component("PanelMenu", PanelMenu)
  .component("MenuBar", MenuBar)
  .component("InputNumber", InputNumber);

// Initialize
app.mount("#app");
