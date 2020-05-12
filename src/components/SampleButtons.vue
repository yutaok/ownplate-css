<template>
  <div>
    <!-- <b-button
      tag="nuxt-link"
      :to="'/admin/restaurants/' + restaurantid + '/orders'"
      :style="{'margin-right': 'auto', height: '40px'}"
      type="is-primary"
      class="counter-button"
      expanded
      rounded
      contained
    >{{ $tc('admin.incompleteOrders', numberOfOrders, {count:numberOfOrders}) }}</b-button>-->

    <div class="op-button-medium primary w-256">Add</div>

    <router-link to="/">
      <img src="@/assets/images/OwnPlate-Logo-Horizontal-YellowBlack.svg" width="124" height="24" />
    </router-link>

    <!-- Add New Restaurant Button with Buefy button component -->
    <!-- <b-button
      style="margin-right:auto"
      type="is-primary"
      class="counter-button"
      expanded
      rounded
      @click="handleNew"
      :loading="isCreating"
    >{{$t('admin.addNewRestaurant')}}</b-button>-->

    <!-- A button div with OwnPlate-CSS -->
    <div class="op-button-medium primary w-256">Add New Restaurant</div>

    <!-- Is this how implement without Buefy component? -->
    <!-- <div class="op-button-medium primary w-256" @click="handleNew">{{$t('admin.addNewRestaurant')}}</div> -->

    <!-- ____________________________________________________________ -->

    <!-- Link to external website with Buefy button component -->
    <!-- <b-button
      tag="a"
      target="_blank"
      href="https://gluepass.jp/g/ownplatejp/pages"
      style="margin-right:auto;min-width: 30%;"
      type="is-primary"
      class="counter-button"
      rounded
      outlined
    >{{$t("admin.userManual")}}</b-button>-->

    <!-- A button div with OwnPlate-CSS -->
    <div class="op-button-medium primary w-256">User Manual</div>

    <!-- Is this how implement without Buefy component? -->
    <!-- <a href="https://gluepass.jp/g/ownplatejp/pages" target="_blank">
      <div class="op-button-medium primary w-256">aaaaaaaaaa{{$t("admin.userManual")}}</div>
    </a>-->

    <!-- ____________________________________________________________ -->

    <!-- ____________________________________________________________ -->

    <div>hello buttons smaples</div>
    <i class="material-icons s-18">face</i>
    <i class="material-icons s-24">face</i>
    <i class="material-icons s-36">face</i>

    <div>
      <span class="bg op-primary row inline">
        <i class="material-icons s-24">fingerprint</i>
        <span class="m-l-8">This is fingerpring</span>
      </span>
      <div></div>
    </div>
    <div class="t-h4">Hi, This is text style test! Again</div>
    <div class="columns is-gapless op-status-red">Hello</div>
    <div class="columns is-gapless">
      <div class="column">
        <div class="op-status-red p-b-16">First column</div>
      </div>
      <div class="column">
        <div class="op-status-red">Second columnThisis</div>
      </div>
      <div class="column">Third column</div>
      <div class="column">Fourth column</div>
    </div>
    <div>
      <div class="button bg-primary h-64 r-64 w-256 d-medium">
        <span class="c-onprimary t-h6">This is fingerprint</span>
      </div>

      <div class="button p-l-8 p-r-8">
        <i class="material-icons md-18 m-r-8 c-primary">call</i>
        <span class="c-primary t-button">(456) 789-0123</span>
      </div>

      <div class="button bg-form r-36 p-l-16 p-r-16">
        <i class="material-icons md-18 m-r-8 c-primary">add</i>
        <span class="c-primary t-button">Add Restaurant</span>
      </div>

      <div class="button border-primary r-48 h-48 w-192">
        <span class="t-subtitle1 c-primary">Edit Page</span>
      </div>

      <div class="button bg-form h-48 r-48 w-128">
        <span class="t-subtitle1 c-text-black-medium">Close</span>
      </div>

      <div class="button bg-primary d-low h-48 r-48 w-128">
        <span class="t-subtitle1 c-onprimary">Next</span>
      </div>
      <div class="align-right m-t-8">
        <div class="op-button-pill bg-form">
          <i class="material-icons">add</i>
          <span>Add</span>
        </div>
      </div>

      <div class="bg-ownplate-gray p-t-32 p-b-32">
        <div class="button border-primary r-48 h-48 w-192">
          <span class="t-subtitle1 c-primary">Edit Page</span>
        </div>
        <div class="button bg-sattle-white r-36 p-l-8 p-r-8">
          <i class="material-icons md-18 m-r-8 c-text-white-full">language</i>
          <span class="c-text-white-high t-subtitle2">English (US)</span>
          <i class="material-icons md-18 c-text-white-high">arrow_drop_down</i>
        </div>
      </div>
      <div
        class="inline bg-status-red-bg c-status-red p-l-16 p-r-16 p-t-4 p-b-4 t-subtitle2 r-32"
      >Order Placed kjyavkuy sgf uvtvciuytv IEW</div>
      <div class="t-h6 c-text-black-medium m-b-8">Your restaurants</div>
      <div class="border-primary r-8 p-t-16 p-b-16 w-440">
        <div class="c-primary t-body1 m-b-8 align-center">
          Please create restaurant from
          <br />the button below
        </div>
        <div class="align-center">
          <div class="button bg-form r-36 p-l-16 p-r-16">
            <i class="material-icons md-18 m-r-8 c-primary">add</i>
            <span class="t-button c-primary">Add Restaurant</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SampleButtons"
};
</script>
