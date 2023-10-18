import { defineStore } from "pinia";
export const useStoreNotes  = defineStore('storeNotes', {
  state: () => {
    return { notes:[
        {
            id:'id1',
            content:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid iste expedita voluptatum? Soluta nihil, repellendus architecto aut mollitia, unde non a temporibus commodi tempora sapiente atque consequatur doloremque, aliquam accusantium.'

        },
        {
           id:'id2',
           content:'Hellow world wooo '
        }
    ] }
  },
 
  actions: {
   addNote(newContent) {
    let currDate = new Date().getTime(),
         id=currDate.toString()
         let note ={
          id,
          content:newContent
         }
     
      this.notes.unshift(note)
    },
    updateNote(id,content){
      let index = this.notes.findIndex(note => note.id === id)
      this.notes[index].content = content
    },
  
    deleteNote(idToDelete){
      this.notes = this.notes.filter(note => { return note.id !== idToDelete})
    }
  },
  getters:{
    getNoteContent:(state) => {
      return (id) => 
        {return state.notes.filter(note => {return note.id ===id})[0].content
  }
},
  totalNotesCount:(state)=>{
   return state.notes.length
},
totalNotesCharecters:(state)=>{
  let count = 0
  state.notes.forEach(note=>{
    count += note.content.length
  })
  return count
}
  }
})