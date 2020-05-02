<template>
  <div class="wrapper">
    <!-- Header -->
    <div class="columns is-gapless is-vcentered is-mobile bg-ownplate-white">
      <div class="column">
        <div class="button w-48 h-48">
          <i class="material-icons s-24 c-ownplate-gray">menu</i>
        </div>
      </div>
      <div class="column align-center">
        <img src="@/assets/images/OwnPlate-Logo-Horizontal-YellowBlack.svg" width="124" height="24" />
      </div>
      <div class="column"></div>
    </div>

    <!-- Main -->
    <div class="main">
      <router-link to="/sample-user-restaurant">
        <div class="button bg-primary-bg p-l-16 p-r-16">User Restaurant</div>
      </router-link>
      <router-link to="/sample-buttons">
        <div class="button bg-primary-bg p-l-16 p-r-16">Buttons</div>
      </router-link>
    </div>

    <!-- Footer -->
    <div class="bg-ownplate-gray columns is-gapless is-mobile h-128">
      <div class="column">
        <div
          class="inline t-caption c-text-white-medium m-t-16 m-l-16"
        >Operated by Singularity Society</div>
      </div>
      <div class="column align-right">
        <div class="button bg-sattle-white r-36 p-l-8 p-r-8 m-r-16 m-t-16">
          <i class="material-icons s-18 c-text-white-full m-l-8 m-r-8">language</i>
          <span class="t-subtitle2 c-text-white-high m-r-8">English (US)</span>
          <i class="material-icons s-18 c-text-white-high">arrow_drop_down</i>
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
