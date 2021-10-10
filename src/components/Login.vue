<template>
<div class="card p-d-flex-inline">
  <div class="p-fluid">
    <div class="p-field p-col-12">
      <span class="p-float-label">
        <InputText id="username" type="text" v-model="username"></InputText>
        <label for="username">Username</label>
      </span>
    </div>
    <div class="p-field p-col-12">
      <span class="p-float-label">
        <InputText id="password" type="password" v-model="password"></InputText>
        <label for="password">Password</label>
      </span>
    </div>
    <div class="p-field p-col-12">
      <span class="p-float-label">
        <Dropdown v-model="role" :options="roles" optionLabel="name" optionValue="name" placeholder="Select a Role" />
      </span>
    </div>
    <Divider></Divider>
    <div class="p-col-12">
      <Button @submit.prevent="login">Submit</Button>
    </div>
  </div>
</div>
</template>

<script lang="ts">
import { ref } from "vue";

export default {
    setup() {
      function login () {
        console.log('login called')
      }
        const username = ref('');
        const password = ref('');
        const role = ref({name: 'Player'});
        const roles = ref([
          {name: 'Player'},
          {name: 'Game Master'},
          {name: 'Spectator'}
        ])
        return {
          login,
          username,
          password,
          role,
          roles
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
