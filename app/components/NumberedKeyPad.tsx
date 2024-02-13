'use client'

import React from 'react'
type Props = {

  handleKeyPress: (value:any)=>void;
  password: string
};

const NumberedKeyPad =({handleKeyPress,password}:Props) => {

  return (
    <div className="grid grid-cols-3 gap-4">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 'clear', 0, 'enter'].map((key: any) => (
        <button
          key={key}
          className="bg-gray-200 p-4 rounded-md text-xl font-semibold disabled:font-thin hover:bg-gray-300 focus:outline-none disabled:bg-gray-500"
          onClick={() => handleKeyPress(key)}
          disabled={(key !== 'enter' && key !== 'clear'&& password.length == 4)}
        >
          <p className='text-black text-2xl'>
            {key}
            </p>
        </button>
      ))}
    </div>
  );
};

export default NumberedKeyPad;
