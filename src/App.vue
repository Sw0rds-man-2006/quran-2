<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { usedialog } from "./stores/dialog";
import { usesuraname } from "./stores/suraname";
import { useghari } from "./stores/ghari";
import { usetranslate } from "./stores/translate";
const dialogStore = usedialog();

const translateStore = usetranslate();

const route = useRoute();

const suranameStore = usesuraname();

const ghariStore = useghari();

onMounted(() => {
  console.log(route.params);
});
</script>

<template>
  <div
    class="continer overflow-hidden relative bg-repeat bg-fixed max-w-1920px mx-auto"
  >
    <nav
      class="h-100px sm:h-105px w-[90%] bg-repeat opacity-90 max-w-1920px fixed ml-5% z-10000 border-blue border-8px border-solid shadow-lg rounded-50px shadow-blue"
    >
      <div class="w-[100%] mx-auto">
        <div
          class="div-route-links right-10px top-10% sm:right-20px md:right-30px"
        >
          <span>
            <router-link to="/" class="m-3">
              <v-btn icon="$vuetify" class="hover:color-blue">
                <i class="i-fa:home"></i>
              </v-btn>
            </router-link>
            <span class="hidden md:inline-block">
              <v-btn
                icon="$vuetify"
                class="hover:color-blue"
                @click="dialogStore.dialog = true"
              >
                <i class="i-fa:search"></i> </v-btn
            ></span>
          </span>
        </div>
        <div
          class="text-center block sm:text-70px text-40px text-white suraname"
          id="start"
        >
          {{ suranameStore.sura }}
        </div>
        <span class="inline-block left-5% absolute top-8%">
          <v-col cols="auto" class="inline-block">
            <v-dialog transition="dialog-top-transition" width="auto">
              <template v-slot:activator="{ props }">
                <v-btn color="light" v-bind="props" icon="$vuetify"
                  ><i class="i-fa:bars"></i
                ></v-btn>
              </template>
              <template v-slot:default="{ isActive }">
                <v-card>
                  <v-toolbar color="gray" title="settings"></v-toolbar>
                  <v-card-text>
                    <div class="w-100vw md:w-40vw">
                      <!-- <v-radio-group
                        v-model="ghariStore.ghari"
                        label="Readers">
                        <v-radio
                          label="Abdulbasit"
                          color="dark"
                          value="Abdulbasit"
                          theme="black"
                        ></v-radio>
                        <v-radio
                          label="Parhizgar"
                          color="dark"
                          value="Parhizgar"
                        ></v-radio>
                        <v-radio
                          label="Ghamadi"
                          color="dark"
                          value="Ghamadi"
                        ></v-radio>
                        <v-radio
                          label="Minshawy"
                          color="dark"
                          value="Minshawy_Murattal"
                        ></v-radio>
                      </v-radio-group> -->

                      <div class="w-70vw sm:w-90%">
                        <div class="mx-auto">
                          <v-select
                            v-model="ghariStore.ghari"
                            label="Reader"
                            :items="[
                              'Abdulbasit',
                              'Parhizgar',
                              'Ghamadi',
                              'Minshawy_Murattal',
                            ]"
                            variant="outlined"
                          ></v-select>
                        </div>
                      </div>

                      <v-switch
                        label="translate"
                        color="success"
                        value="primary"
                        hide-details
                        v-model="translateStore.translate"
                        class="inline yekan text-blueGray"
                      >
                      </v-switch>
                    </div>
                  </v-card-text>
                  <v-card-actions class="justify-end">
                    <v-btn variant="text" @click="isActive.value = false"
                      >Close</v-btn
                    >
                  </v-card-actions>
                </v-card>
              </template>
            </v-dialog>
          </v-col>
        </span>
      </div>
    </nav>
    <div class="router-content">
      <div class="h-90px"></div>
      <RouterView />
    </div>
  </div>
</template>

<style>
@font-face {
  font-family: suraname;
  src: url("./Quran/sura_names.woff");
}
.suraname {
  font-family: suraname;
}
.continer {
  height: 100px;
  margin: 0px;
  padding: 0px;
  background-image: url("./Quran/image/bg4.png");
}
nav {
  background-image: url("./Quran/image/main-header2-pattern.b530a3c.png");
}
.div-route-links {
  margin: 10px;
  align-items: center;
  position: absolute;
}
.route-links {
  border: 3px solid white;
  color: black;
}
.router-content {
  width: 100%;
  margin: 5px auto;
}
.hr {
  margin-top: 7vh;
}
</style>

<!-- <RouterView /> -->
