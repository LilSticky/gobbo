<template>
  <div>
    <div class="card">
      <div class="p-fluid p-grid">
        <div class="p-field p-col-12">
          <span class="p-float-label">
            <label for="mobile">Mobile</label>
            <InputSwitch v-model="mobile" />
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, inject } from "vue";

export default {
  setup() {
    const store: any = inject("store");
    const mobile = ref(store.state.mobile);

    // TODO: Missing Update Function i guess, it doesn't save
    return {
      mobile,
    };
  },
};
</script>


<style>
</style>