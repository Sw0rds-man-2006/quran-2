import { defineStore } from "pinia"
import { QuranStatic_SuraList } from "../Quran/QuranData"

const route = useRoute()

export const usesuraname = defineStore( 'suraname' , ()=>{
    const sura :string= ''
    return {sura}
  })