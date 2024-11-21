<script setup lang="ts">
import { QuranStatic_SuraList } from "@/Quran/QuranData"
import ayat from "@/Quran/quran-text-hafs.json"
import translations from "@/Quran/quran-translate.fa.ansarian.json"
import { useghari } from "@/stores/ghari";
import { usesuraname } from "@/stores/suraname"
import { usetranslate } from "@/stores/translate";
const route = useRoute()

const suranameStore = usesuraname()

const translateStore = usetranslate()

const ghariStore = useghari()

const sura = computed(() => QuranStatic_SuraList[+route.params.id - 1])

const suraAyat = computed(() =>
  ayat.slice(sura.value[0], sura.value[0] + sura.value[1])
)

const suraTranslations = computed(() =>
  translations.slice(sura.value[0], sura.value[0] + sura.value[1])
)

let surastring = sura.value[10]

let audio = new Audio()

let playingAya: number | null = null

audio.onended = () => {
  if (playingAya == null) return
  if (playingAya == suraAyat.value.length) return
  playingAya++
  play(playingAya)
}

const play = (ayaNumber: number) => {
  playingAya = ayaNumber
  audio.src = `https://asset.nasimrezvan.com/data/${ghariStore.ghari}/${surastring
    .toString()
    .padStart(3, "0")}${(ayaNumber + 1).toString().padStart(3, "0")}.mp3`
  audio.play()
  console.log(playingAya)
}

function pause(ayaNumber: number) {
  audio.pause()
}

watchEffect(() => {
  suranameStore.sura = sura.value?.[10].toString().padStart(3, "0")
})
onUnmounted(() => {
  audio.pause()
  suranameStore.sura = ""
})
</script>

<template>
  <div class="w-100% relative">


    <div class="mt-10%">
      <div v-for="(aya, i) in suraAyat">
        <div class="flex mx-auto">
          <div class="mx-auto">
            <v-btn variant="plain" class="p-1 m-1" @click="play(i)">
              <i class="i-fa:play"></i>
            </v-btn>
            <br />
            <v-btn variant="plain" class="p-1 m-1" @click="pause(i)">
              <i class="i-fa:pause"></i>
            </v-btn>
          </div>
          <br />
          <p
            class="aye hover:( color-white bg-blue rounded-1) m-1px inline-block md:p-35px p-35px pl-0px mr-5% sm:text-25px text-18px basis-12/12 md:basis-10/12"
          >
            {{ aya }}
          </p>
        </div>
        <hr class="w-90% mx-auto" />
        <p
          v-show="translateStore.translate"
          class="mani sm:text-20px text-15px hover:( color-white bg-blue) md:p-35px p-35px pl-0px mx-auto m-1px rounded-1 bg-gray-2"
        >
          {{ suraTranslations[i] }}
        </p>
        <hr v-show="translateStore.translate" class="w-90% mx-auto" />
      </div>
    </div>

    <div class="w-300px mx-auto h-90px">
      <v-btn variant="tonal" class="m-3">
        <RouterLink
          :to="'/sura/' + (+route.params.id + 1)"
          class="color-black decoration-none yekan text-10px"
        >
          next
        </RouterLink>
      </v-btn>
      <v-btn variant="tonal" class="m-3">
        <RouterLink
          :to="'/sura/' + (+route.params.id - 1)"
          class="color-black decoration-none yekan text-10px"
        >
          previous
        </RouterLink>
      </v-btn>
      <v-btn variant="tonal" class="m-2 inline">
        <a href="#start" class="color-black decoration-none yekan text-10px">
          start
        </a>
      </v-btn>
    </div>
  </div>
</template>
<style>
@font-face {
  font-family: yekan;
  src: url("../Quran/Yekan.ttf");
}
@font-face {
  font-family: quran;
  src: url("../Quran/UthmanicHafs1-Ver18.ttf");
}
@font-face {
  font-family: suraname;
  src: url("../Quran/sura_names.woff");
}
.aye {
  font-family: quran;
}
.mani {
  font-family: yekan;
}
.aye,
.mani {
  direction: rtl;
  transition: ease-in-out 150ms;
  width: 90%;
}
.yekan {
  font-family: yekan;
}
.suraname {
  font-family: suraname;
}

@media screen and (max-width: 1023px) {
  .buttonmodal {
    display: block;
  }
}
</style>
<!-- :@click="audio.src=`https://asset.nasimrezvan.com/data/Ghamadi/${'sura.value[10]'.padStart(3)}${'i'.padStart(3)}.mp3`" -->
<!-- :@click="audio.play()" -->
