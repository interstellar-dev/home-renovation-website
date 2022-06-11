<script setup lang="ts">
import { storeToRefs } from "pinia";

const modal = useModal()
const { isShowen } = storeToRefs(modal)
</script>

<template>

  <div
    class="modal"
    v-if="isShowen"
    @click.self="modal.close"
  >
    <div class="modal-content">
      <slot/>
    </div>
  </div>

</template>

<style lang="css" scoped>
.modal {
  position: fixed;
  z-index: 100;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.4);
  overflow: hidden;
}

.modal-content {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%)
}
</style>
