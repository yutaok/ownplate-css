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
      <div class="columns is-gapless">
        <!-- Left Gap -->
        <div class="column is-narrow w-24"></div>

        <!-- Left Column -->
        <div class="column">
          <!-- Restaurant Cover Photo -->
          <div class="columns is-gapless">
            <div class="column is-narrow w-24"></div>
            <div class="column">
              <div class="is-hidden-mobile h-24"></div>
              <div class="bg-form h-192">
                <img
                  src="@/assets/contents/r-taku-cover.png"
                  class="h-192 w-full cover is-hidden-tablet"
                />
                <img
                  src="@/assets/contents/r-taku-cover.png"
                  class="h-192 w-full cover r-4 is-hidden-mobile"
                />
              </div>
            </div>
            <div class="column is-narrow w-24"></div>
          </div>
          <!-- Restaurant Details -->
          <div class="m-l-24 m-r-24">
            <div class="bg-test m-t-24">hello hello</div>
            <div class="bg-test m-t-24">hello hello yes</div>
          </div>
        </div>

        <!-- Right Column -->
        <div class="column">
          <div class="m-l-24 m-r-24">
            <div class="bg-test m-t-24">hello hello</div>
            <div class="bg-test m-t-24">hello hello yes</div>
          </div>
        </div>

        <!-- Right Gap -->
        <div class="column is-narrow w-24"></div>
      </div>
    </div>

    <!-- Footer -->
    <div class="bg-ownplate-gray columns is-gapless is-mobile h-128">
      <div class="column">
        <div
          class="is-inlineblock t-caption c-text-white-medium m-t-16 m-l-16"
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
  name: "SampleUserRestaurant"
};
</script>
