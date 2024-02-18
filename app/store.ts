import { create } from 'zustand'



type gameselect={
    game:string,
    id:string,
    date:string,

}

type GameSelectionStore ={
    gameSelected:{
        game:string,
        id:string,
        date:string,
    }
    selectGame:({game,id,date}:gameselect)=>void,

  
}



export const useGameSelectionStore = create<GameSelectionStore>((set) => ({
    gameSelected:{
        game:"",
        id:"",
        date:""
    },


    selectGame:(gameselected: { game: string; id: string; date: string; })=>{

   set((state) => ({
    ...state,
    gameSelected: {
      ...state.gameSelected,
      game: gameselected.game,
      id:   gameselected.id,
      date: gameselected.date
    },
  }));

 },

}))