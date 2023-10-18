import { watch } from 'vue'
export function useWatchCharecters(valueToWatch,maxChars){
    watch(valueToWatch,(newValue)=>{
        if (newValue.length===maxChars)
        alert(`Only ${ maxChars } charecters allowed hannoa `)
      
      })
}
