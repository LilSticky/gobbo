<template>
  <div class="p-grid container">
    <div class="p-col-3" v-if="!store.state.mobile">
      <PanelMenu :model="items"></PanelMenu>
    </div>
    <div class="p-col-9">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { ref, onBeforeMount, provide } from "vue";
import { useRouter, useRoute } from "vue-router";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import store from "@/store/index";

export default {
  name: "App",
  setup() {
    provide("store", store);
    const router = useRouter();
    const route = useRoute();
    const auth = getAuth();

    // Menu Items
    const items = ref([
      {
        key: "0",
        label: "Home",
        icon: "pi pi-fw pi-home",
        url: "/",
      },
      {
        key: "1",
        label: "Game",
        icon: "pi pi-fw pi-star",
        items: [
          {
            key: "1_0",
            label: "Character",
            icon: "pi pi-fw pi-id-card",
            url: "/character",
          },
          {
            key: "1_1",
            label: "Map",
            icon: "pi pi-fw pi-map",
            url: "/game",
          },
        ],
      },
      {
        key: "2",
        label: "Settings",
        icon: "pi pi-fw pi-cog",
        url: "/settings",
      },
    ]);

    onBeforeMount(() => {
      onAuthStateChanged(auth, (user) => {
        if (!user) {
          router.replace("/login");
        } else if (route.path == "/login" || route.path == "/register") {
          router.replace("/");
        }
      });
    });

    return {
      items,
      store,
    };
  },
};
</script>

<style lang="scss">
body {
  margin: 0;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: var(--surface-a);
  font-family: var(--font-family);
  font-weight: 400;
  color: var(--text-color);
}
.container {
  padding: 15px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: inherit;
}
a {
  color: #ffd54f;
}
</style>
