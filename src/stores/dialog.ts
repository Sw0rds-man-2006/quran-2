import { defineStore } from "pinia"

export const usedialog = defineStore( 'dialog' , ()=>{
    const dialog = ref(false)
    return {dialog}
  })
