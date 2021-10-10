<template>
  <div class="home p-d-flex p-jc-center">
    <div class="p-d-flex-column p-md-4">
      <div class="card p-d-flex-inline">
        <form class="p-fluid" @submit.prevent="register">
          <h1>Register</h1>
          <div class="p-field p-col-12">
            <span class="p-float-label">
              <InputText id="email" type="email" v-model="email"></InputText>
              <label for="email">Email</label>
            </span>
          </div>
          <div class="p-field p-col-12">
            <span class="p-float-label">
              <InputText
                id="password"
                type="password"
                v-model="password"
              ></InputText>
              <label for="password">Password</label>
            </span>
          </div>
          <Divider></Divider>
          <div class="p-col-12">
            <Button type="submit" value="register">Submit</Button>
          </div>
        </form>
        <p>already registered? <router-link to="/login">Login</router-link></p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

export default {
  setup() {
    const email = ref("");
    const password = ref("");
    async function register(): Promise<void> {
      try {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email.value, password.value).then(
          () => console.log("registered user")
        );
      } catch (e: any) {
        const errCode = e.code;
        const errMsg = e.message;
        console.log({ errCode, errMsg });
      }
    }
    return {
      register,
      email,
      password,
    };
  },
};
</script>