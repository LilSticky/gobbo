<template>
  <div>
    <div class="card">
      <div class="p-fluid p-grid">
        <div class="p-field p-col-12">
          <span class="p-float-label">
            <InputText id="name" type="text" v-model="char.name" />
            <label for="name">Name</label>
          </span>
        </div>
        <div class="p-field p-col-12">
          <span class="p-float-label">
            <InputText id="race" type="text" v-model="char.race" />
            <label for="race">Race</label>
          </span>
        </div>
        <div class="p-field p-col-12 p-md-9">
          <span class="p-float-label">
            <InputText id="class" type="text" v-model="char.class" />
            <label for="class">Class</label>
          </span>
        </div>
        <div class="p-field p-col-12 p-md-3">
          <span class="p-float-label">
            <InputNumber id="lv" v-model="char.lv" />
            <label for="lv">lv.</label>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { reactive, inject } from "vue";

export default {
  setup() {
    const store: any = inject("store");
    const char = reactive(store.state.char);
    return {
      store,
      char,
    };
  },
};
</script>


<style>
</style>