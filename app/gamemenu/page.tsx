"use client"
import React from 'react'
import { useRouter } from 'next/navigation'

import {useGameSelectionStore} from "../store"

type gameType={
  id: string,
    game: string,
    date: string,
}

const games =[
    {
      id:"1",
      game:"Monday special",
      date: new Date().toString()
    },
    {
      id:"2",
      game:"Clube Master",
      date: new Date().toString()
    },
    {
      id:"3",
      game:"National east",
      date: new Date().toString()
    },
    {
      id:"4",
      game:"Fortune east",
      date: new Date().toString()
    },
    {
      id:"5",
      game:"Cross Rivers sp",
      date: new Date().toString()
    },
    {
      id:"6",
      game:"LUcky NG east",
      date: new Date().toString()
    },
    {
      id:"7",
      game:"Bonanza east",
      date: new Date().toString()
    },
    {
      id:"8",
      game:"vag monday",
      date: new Date().toString()
    },
    {
      id:"9",
      game:"Sawaki",
      date: new Date().toString()
    },
    {
      id:"10",
      game:"Sawaki",
      date: new Date().toString()
    },
    {
      id:"11",
      game:"Sawaki",
      date: new Date().toString()
    },
    {
      id:"12",
      game:"Sawaki",
      date: new Date().toString()
    },
    {
      id:"13",
      game:"Sawaki",
      date: new Date().toString()
    },
    {
      id:"14",
      game:"Sawaki",
      date: new Date().toString()
    },
  ]

type Props = {
  
}

export default function page({}: Props) {

  const router = useRouter()

  const selectGame = useGameSelectionStore((state)=>state.selectGame);

  const handleGameSelection =(game: string, id: string, date: string)=>{

    let check ={
      game,
      id,
      date
    }
    //console.log(check)

     selectGame(check)

    router.push("/mainmenu")


   
  }

  return (
    <div className=" h-screen justify-center items-center"> 

    <div className="flex justify-center h-full w-full items-center">

          <div className=" flex flex-col justify-center w-full md:max-w-[80%] bg-blackj h-full">

            {/* screen */}
            <div className="w-full h-[80%] pb-20 bg-[#AFB83B]  border-4 border-white shadow-lg">

              <div className="flex w-full h-6 bg-cyan-100/20  font-mono justify-between px-2">
                <p>Machine #:1000</p>
                <p>{new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"}) }</p>
              </div>
              <div className="grid grid-cols-3  h-full w-full gap-4 my-4 items-center  justify-center  ">

                {
                  games.map((val)=>(

                <div onClick={()=>handleGameSelection(val.game,val.id,val.date)} key={val.id} className="bg-white py-1 cursor-pointer hover:opacity-80 h-[80px] text-center justify-center text-black shadow-lg mx-auto rounded-sm  text-sm font-mono font-medium  w-24 ">
                  <p className="uppercase">
                    {val.game}
                    </p>
                    {/* <p>{val.date.toLocaleDateString("en-us",{day:"numeric",month:"short"})}</p> */}
                </div>
                  ))
                }

        
              </div>
              <div>v3.3</div>

            </div>

          </div>
   
      
    </div>

      </div>
  )
}