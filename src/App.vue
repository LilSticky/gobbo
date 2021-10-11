<template>
  <div class="app">
    <div class="p-grid" v-if="!mobile">
      <div class="p-col-2">
        <Button @click="toggleMobile">Hide Menu</Button>
        <PanelMenu :model="items">
          <!-- TODO: Fill Menu -->
        </PanelMenu>
      </div>
      <div class="p-col-10">
        <router-view />
      </div>
    </div>
    <div class="p-grid" v-else-if="mobile">
      <div class="p-col-12">
        <div class="p-d-flex p-flex-row p-jc-between">
          <div class="p-md-3">
            <router-link to="/"
              ><icon class="pi pi-fw pi-home"></icon
            ></router-link>
          </div>
          <div class="p-md-3">
            <Button @click="toggleMobile">Show Menu</Button>
          </div>
        </div>
      </div>
      <div class="p-col-12">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, onBeforeMount } from "vue";
import { useRouter, useRoute } from "vue-router";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default {
  name: "App",
  components: {},
  computed: {},
  setup() {
    const router = useRouter();
    const route = useRoute();
    const auth = getAuth();
    let mobile = ref(false);
    function toggleMobile() {
      mobile.value = !mobile.value;
    }
    const items = ref([
      {
        key: "0",
        label: "File",
        icon: "pi pi-fw pi-file",
        items: [
          {
            key: "0_0",
            label: "New",
            icon: "pi pi-fw pi-plus",
            items: [
              {
                key: "0_0_0",
                label: "Bookmark",
                icon: "pi pi-fw pi-bookmark",
              },
              {
                key: "0_0_1",
                label: "Video",
                icon: "pi pi-fw pi-video",
              },
            ],
          },
          {
            key: "0_1",
            label: "Delete",
            icon: "pi pi-fw pi-trash",
          },
          {
            key: "0_2",
            label: "Export",
            icon: "pi pi-fw pi-external-link",
          },
        ],
      },
      {
        key: "1",
        label: "Edit",
        icon: "pi pi-fw pi-pencil",
        items: [
          {
            key: "1_0",
            label: "Left",
            icon: "pi pi-fw pi-align-left",
          },
          {
            key: "1_1",
            label: "Right",
            icon: "pi pi-fw pi-align-right",
          },
          {
            key: "1_2",
            label: "Center",
            icon: "pi pi-fw pi-align-center",
          },
          {
            key: "1_3",
            label: "Justify",
            icon: "pi pi-fw pi-align-justify",
          },
        ],
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
      mobile,
      toggleMobile,
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
