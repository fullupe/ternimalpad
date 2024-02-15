'use client'

import React from 'react'

type Props = {}

export default function Keypad({}: Props) {

    const handleClick=(val:any)=>{
        console.log(val)
    }
  return (
     <div className="grid grid-cols-5 gap-4">
      {["F1","F2","F3","F4","F5",1, 2, 3, 4, "A",5, 6, 7, 8, "C",9,0, ".",'V'].map((key: any) => (
        <button
          key={key}
          className={`bg-green-200 p-4 rounded-md text-xl font-semibold hover:bg-green-300 focus:outline-none ${key === 'V' ? 'col-span-2' : ''} ${key==='C'? 'bg-red-300 hover:bg-red-400':''} ${key==='A'? 'bg-yellow-200 hover:bg-yellow-300':''}`}
          onClick={() => handleClick(key)}
        >
          <p className='text-black text-2xl'>
            {key}
            </p>
        </button>
      ))}
    </div>
  )
}