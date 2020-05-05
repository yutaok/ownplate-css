<template>
  <div>
    <button class @click="isCardModalActive = true">Launch card modal (keep scroll)</button>

    <b-modal :active.sync="isCardModalActive" scroll="keep">
      <div class="bg-test">hello</div>
    </b-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCardModalActive: false
    };
  }
};
</script>