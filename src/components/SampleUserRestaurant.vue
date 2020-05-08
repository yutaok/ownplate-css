<template>
  <div class="wrapper">
    <!-- Header -->
    <div class="columns is-gapless is-vcentered is-mobile bg-ownplate-white">
      <div class="column">
        <div class="button w-48 h-48" @click="open = true">
          <i class="material-icons s-24 c-ownplate-gray">menu</i>
        </div>
      </div>
      <div class="column align-center">
        <img src="@/assets/images/OwnPlate-Logo-Horizontal-YellowBlack.svg" width="124" height="24" />
      </div>
      <div class="column"></div>
    </div>
    <!-- Side Bar -->
    <b-sidebar
      type="is-light"
      :fullheight="fullheight"
      :fullwidth="fullwidth"
      :overlay="overlay"
      :right="right"
      :open.sync="open"
    >
      <div class="align-center m-t-24">
        <img src="@/assets/images/OwnPlate-Logo-Stack-YellowBlack.svg" width="92" height="104" />
      </div>
      <div class="align-center m-t-24">
        <div class="op-button-medium tertiary w-192">Home</div>
      </div>
      <div class="align-center m-t-24">
        <div class="op-button-small tertiary">About</div>
      </div>
      <div class="align-center m-t-24">
        <div class="op-button-small tertiary">Privacy</div>
      </div>
      <div class="align-center m-t-24">
        <div class="op-button-small tertiary">Terms</div>
      </div>
      <div class="align-center m-t-24">
        <div class="op-button-small tertiary">Sign Out</div>
      </div>
    </b-sidebar>

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
            <div class="m-t-24 align-center">
              <img src="@/assets/contents/r-taku-profile.png" class="h-64 r-64 cover" />
            </div>

            <div class="m-t-8 align-center t-h6 c-text-black-high">Taku Seattle</div>

            <div class="m-t-8 align-center">
              <div class="op-button-text m-r-8">
                <i class="material-icons">launch</i>
                <span>Share</span>
              </div>
              <div class="op-button-text">
                <i class="material-icons">rate_review</i>
                <span>Write Review</span>
              </div>
            </div>

            <div class="m-t-24">
              <div class="t-h6 c-text-black-disabled">Restaurant Details</div>

              <div class="bg-surface r-8 d-low m-t-8">
                <div class="button h-160 w-full bg-form r-8 r-b-0">
                  <i class="material-icons s-48 c-primary">place</i>
                </div>

                <div class="level is-mobile m-t-16 m-l-16 m-r-16">
                  <div class="level-left">
                    <div class="t-body1 c-text-black-high">
                      706 E Pike St
                      <br />Seattle, WA 98122
                    </div>
                  </div>
                  <div class="level-right">
                    <div class="op-button-text">
                      <i class="material-icons">file_copy</i>
                      <span>Copy</span>
                    </div>
                  </div>
                </div>

                <div class="m-t-8 m-l-16 m-r-16">
                  <div class="op-button-text">
                    <i class="material-icons">phone</i>
                    <span>(456) 789-0123</span>
                  </div>
                </div>

                <div class="m-t-8 m-l-16 m-r-16">
                  <div class="op-button-text">
                    <i class="material-icons">language</i>
                    <span>takuseattle.com</span>
                  </div>
                </div>

                <div class="align-center">
                  <div class="op-status c-status-green bg-status-green-bg m-t-16">Open Now</div>
                  <div class="p-t-8 t-caption c-status-green">Tue 4:30 AM - 9:00 PM</div>
                </div>

                <div class="align-center">
                  <div class="op-button-text m-t-8 m-b-16">
                    <span>View All Hours</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Column -->
        <div class="column">
          <div class="m-l-24 m-r-24">
            <div class="m-t-24">
              <!-- Menu Category -->
              <div class="t-h6 c-text-black-disabled m-t-24">Most popular</div>

              <!-- Menu Item -->
              <div class="touchable bg-surface r-8 d-low m-t-8" @click="isCardModalActive = true">
                <div class="cols">
                  <div class="flex-1 p-l-16 p-r-16 p-t-16 p-b-16">
                    <div class="t-h6 c-text-black-high">Kushikatsu Special Platter</div>
                    <div class="t-body1 c-text-black-high m-t-8">$26.00</div>
                    <div
                      class="t-body2 c-text-black-medium m-t-8"
                    >11 pieces assorted kushikatsu. Served with miso soup and salad.</div>
                  </div>
                  <div class="p-r-16 p-t-16 p-b-16">
                    <img
                      src="@/assets/contents/r-taku-item-1.png"
                      width="96"
                      height="96"
                      class="is-pulled-right r-4"
                    />
                  </div>
                </div>
              </div>
              <!-- Menu Item Popup-->
              <b-modal :active.sync="isCardModalActive" scroll="keep">
                <div class="p-l-24 p-r-24">
                  <div class="op-dialog">
                    <div class="cols">
                      <div class="flex-1 p-l-16 p-r-16 p-t-16 p-b-16">
                        <div class="t-h6 c-text-black-high">Kushikatsu Special Platter</div>
                        <div class="t-body1 c-text-black-high m-t-8">$26.00</div>
                        <div
                          class="t-body2 c-text-black-medium m-t-8"
                        >11 pieces assorted kushikatsu. Served with miso soup and salad.</div>
                      </div>
                      <div class="p-r-16 p-t-16 p-b-16">
                        <img
                          src="@/assets/contents/r-taku-item-1.png"
                          width="96"
                          height="96"
                          class="is-pulled-right r-4"
                        />
                      </div>
                    </div>
                    <div class="m-l-16 m-r-16 p-b-16">
                      <hr class="devider m-t-0 m-b-0" />
                      <div class="m-t-16">
                        <div class="t-caption c-text-black-medium">Options</div>
                        <ul>
                          <li class="m-t-8">
                            <b-checkbox>Vegetarian</b-checkbox>
                          </li>
                          <li class="m-t-8">
                            <b-radio v-model="radio" name="name" native-value="Miso Soup">Miso Soup</b-radio>
                            <b-radio
                              v-model="radio"
                              name="name"
                              native-value="Chiken Soup"
                            >Chiken Soup</b-radio>
                          </li>
                          <li class="m-t-8">
                            <b-checkbox>Gluten Free</b-checkbox>
                          </li>
                        </ul>
                      </div>
                      <div class="m-t-16">
                        <div class="t-caption c-text-black-medium">Special instructions</div>
                        <div class="m-t-8">
                          <b-input type="textarea" placeholder="Enter special instructions here."></b-input>
                          <div
                            class="t-caption c-text-black-medium m-l-16 m-r-16 m-t-8"
                          >Please note that special requests may result in price adjustment after your order is processed.</div>
                        </div>
                        <div class="m-t-24 align-center">
                          <div
                            class="op-button-small tertiary m-r-16"
                            @click="isCardModalActive = false"
                          >Close</div>
                          <div class="op-button-small primary">Add</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </b-modal>

              <!-- Menu Item -->
              <div class="touchable bg-surface r-8 d-low m-t-8">
                <div class="cols">
                  <div class="flex-1 p-l-16 p-r-16 p-t-16 p-b-16">
                    <div class="t-h6 c-text-black-high">Spicy Eggplant</div>
                    <div class="t-body1 c-text-black-high m-t-8">$8.00</div>
                    <div
                      class="t-body2 c-text-black-medium m-t-8"
                    >11 pieces assorted kushikatsu. Served with miso soup and salad.</div>
                  </div>
                  <div class="p-r-16 p-t-16 p-b-16">
                    <img
                      src="@/assets/contents/r-taku-item-2.png"
                      width="96"
                      height="96"
                      class="is-pulled-right r-4"
                    />
                  </div>
                </div>
              </div>

              <!-- Menu Category -->
              <div class="t-h6 c-text-black-disabled m-t-24">Appetizers</div>

              <!-- Menu Item -->
              <div class="touchable bg-surface r-8 d-low m-t-8">
                <div class="cols">
                  <div class="flex-1 p-l-16 p-r-16 p-t-16 p-b-16">
                    <div class="t-h6 c-text-black-high">Spicy Eggplant</div>
                    <div class="t-body1 c-text-black-high m-t-8">$8.00</div>
                    <div
                      class="t-body2 c-text-black-medium m-t-8"
                    >11 pieces assorted kushikatsu. Served with miso soup and salad.</div>
                  </div>
                </div>
              </div>

              <!-- Menu Item -->
              <div class="touchable bg-surface r-8 d-low m-t-8">
                <div class="cols">
                  <div class="flex-1 p-l-16 p-r-16 p-t-16 p-b-16">
                    <div class="t-h6 c-text-black-high">Edamame</div>
                    <div class="t-body1 c-text-black-high m-t-8">$8.00</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Gap -->
        <div class="column is-narrow w-24"></div>
      </div>
    </div>

    <div class="op-cartbutton">
      <div class="level is-mobile w-full p-l-32 p-r-32">
        <div class="level-left">3items</div>
        <div class="level-right">
          <span class="m-r-8">View Cart</span>
          <i class="material-icons">shopping_cart</i>
        </div>
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
  name: "SampleUserRestaurant",
  data() {
    return {
      isCardModalActive: false,
      open: false,
      overlay: true,
      fullheight: true,
      fullwidth: false,
      right: false
    };
  }
};
</script>


