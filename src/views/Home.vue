<template>
  <h1>Welcome, {{ name }}</h1>
  <Button class="logout" @click="logout">Logout</Button>
</template>

<script>
import { ref, onBeforeMount } from "vue";
import { getAuth } from "firebase/auth";

export default {
  setup() {
    const name = ref("");
    onBeforeMount(() => {
      const user = getAuth().currentUser;
      if (user) {
        name.value = user.email.split("@")[0];
      }
    });

    const logout = () => {
      getAuth()
        .signOut()
        .then(() => "signed out")
        .catch((e) => console.error(e.message));
    };
    return {
      name,
      logout,
    };
  },
};
</script>

<style>
</style>