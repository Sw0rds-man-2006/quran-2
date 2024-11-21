import { defineStore } from "pinia"

export const usetranslate = defineStore( 'translate' , ()=>{
    const translate = ref(false)
    return {translate}
  })