'use client'

import React from 'react'

type Props = {
  handleKeyChange:(val:any)=>void
}

export default function Keypad({handleKeyChange}: Props) {

    // const handleClick=(val:any)=>{
    //     //console.log(val)
    //     handleKeyChange(val)
    // }
  return (
     <div className="grid grid-cols-5 gap-4">
      {["F1","F2","F3","F4","F5",1, 2, 3, 4, "A",5, 6, 7, 8, "C",9,0, ".",'V'].map((value: any) => (
        <button
          //key={value}
          className={`bg-green-200 p-4 rounded-md text-xl font-semibold hover:bg-green-300 focus:outline-none ${value === 'V' ? 'col-span-2' : ''} ${value==='C'? 'bg-red-300 hover:bg-red-400':''} ${value==='A'? 'bg-yellow-200 hover:bg-yellow-300':''}`}
          onClick={() => handleKeyChange(value)}
        >
          <p className='text-black text-2xl'>
            {value}
            </p>
        </button>
      ))}
    </div>
  )
}