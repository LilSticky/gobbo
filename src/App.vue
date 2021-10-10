<template>
  <router-view />
</template>

<script lang="ts">
import { onBeforeMount } from "vue";
import { useRouter, useRoute } from "vue-router";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default {
  setup() {
    const router = useRouter();
    const route = useRoute();
    const auth = getAuth();

    onBeforeMount(() => {
      onAuthStateChanged(auth, (user) => {
        if (!user) {
          router.replace("/login");
        } else if (route.path == "/login" || route.path == "/register") {
          router.replace("/");
        }
      });
    });
    return {};
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
