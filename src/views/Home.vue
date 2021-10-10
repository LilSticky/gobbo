<template>
  <div class="home p-d-flex p-jc-center">
    <div class="p-d-flex-column p-md-4">
      <img alt="Vue logo" src="../assets/logo.png" />
      <Login />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Login from "@/components/Login.vue";

export default defineComponent({
  name: "Home",
  components: {
    Login,
  },
});
</script>
