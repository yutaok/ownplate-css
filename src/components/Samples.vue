<template>
  <div class="wrapper">
    <!-- Header -->
    <div class="columns is-gapless is-vcentered is-mobile bg-ownplate-white">
      <div class="column">
        <div class="is-invisible button w-48 h-48" @click="open = true">
          <i class="material-icons s-24 c-ownplate-gray">menu</i>
        </div>
      </div>
      <div class="column align-center">
        <router-link to="/">
          <img
            src="@/assets/images/OwnPlate-Logo-Horizontal-YellowBlack.svg"
            width="124"
            height="24"
          />
        </router-link>
      </div>
      <div class="column"></div>
    </div>

    <!-- Main -->
    <div class="main w-full">
      <div class="m-t-24">
        <div class="t-h5 c-text-black-medium align-center">OwnPlate CSS Samples</div>
      </div>
      <div class="m-t-24 align-center">
        <router-link to="/sample-user-restaurant">
          <div class="op-button-medium secondary">User - Restaurant page</div>
        </router-link>
      </div>
      <div class="m-t-24 align-center">
        <router-link to="/sample-buttons">
          <div class="op-button-medium secondary">Buttons</div>
        </router-link>
      </div>
    </div>

    <!-- Footer -->
    <div class="m-t-24">
      <div class="bg-ownplate-gray columns is-gapless is-mobile h-128">
        <div class="column">
          <div
            class="is-inline-block t-caption c-text-white-medium m-t-16 m-l-16"
          >Operated by Singularity Society</div>
        </div>
        <div class="column align-right">
          <div class="op-button-pill bg-sattle-white m-r-16 m-t-16">
            <i class="material-icons c-text-white-high">language</i>
            <span class="c-text-white-high">English</span>
            <i class="material-icons c-text-white-high">arrow_drop_down</i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "Samples"
};
</script>


