import { defineStore } from "pinia"

export const useghari = defineStore( 'ghari' , ()=>{
    const ghari = ref('Ghamadi')
    return {ghari}
  })