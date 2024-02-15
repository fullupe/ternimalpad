import React from 'react'
import Keypad from '../components/Keypad'


type Props = {}



export default function page({}: Props) {
  return (
    <div className=" h-screen justify-center items-center"> 

    <div className="flex justify-center h-full w-full items-center">

          <div className=" flex flex-col w-full md:max-w-[80%] bg-black h-full">

            {/* screen */}
            <div className="w-full h-[50%] pb-20 bg-[#AFB83B]  border-4 border-white shadow-lg">

              <div className="flex w-full h-6 bg-cyan-100/20  font-mono justify-between px-2">
                <p>Machine #:1000</p>
                <p>{new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"}) }</p>
              </div>
              <div className="grid grid-cols-3  h-full w-full gap-4 my-4 items-center  justify-center  ">

              {/* screen */}

        
              </div>
              <div>v3.3</div>

            </div>



            <div className="p-4">
              {/* keypad */}
              <Keypad/>

            </div>

          </div>
   
      
    </div>

      </div>
  )
}