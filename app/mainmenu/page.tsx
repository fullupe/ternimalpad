"use client"
import React, { useEffect, useState } from 'react'
import Keypad from '../components/Keypad'
import {useGameSelectionStore} from "../store"


type Props = {}



export default function page({}: Props) {
  const selectGame = useGameSelectionStore((state)=>state.gameSelected);

  const [selectedKey, setSelectedKey] = useState('');

  const [inputFields, setInputFields] = useState([]);

  const [number,  setNumber]=useState("")


  console.log("okay",selectedKey)

  useEffect(() => {
    setSelectedKey("F2");
    generateInputFields()
  
    
  }, [])
  

  const generateInputFields = () => {
    const numInputs = parseInt(selectedKey.slice(1));
    const fields = [];
    for (let i = 0; i < numInputs; i++) {
      fields.push(
        <div key={i} className="">
        
          <input maxLength={2} minLength={2} className="flex  h-12 w-12 rounded-full text-center " type="text" id={`input-${i}`} />
        </div>
      );
    }
    return fields;
  };

  const handleKeyChange = (event:any) => {

  
     // Clear existing fields

   if(event ==="C"){
    setSelectedKey(event);
    generateInputFields()

   }else if(event === "V"){
    setSelectedKey(event);
    generateInputFields()

    
   }else if(event === "A"){
    setSelectedKey(event);
    generateInputFields()
    //setInputFields([]);


   }else if(event === "F1"){
    setSelectedKey(event);
    generateInputFields()

  
   }else if(event === "F2"){
    setSelectedKey(event);
    generateInputFields()


   }else if(event === "F3"){
    setSelectedKey(event);
    generateInputFields()
 
  }else if(event === "F4"){
    setSelectedKey(event);
    generateInputFields()

  
   }else if (event === "F5"){
    setSelectedKey(event);
    generateInputFields()


   }else if (event === "."){
    setSelectedKey(event);


   }else{

    setNumber(event)
   }

  };


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
              <div className=" flex   h-full w-full  my-4d items-center  justify-center  ">

              {/* screen */}
              <div className=" w-full flex  justify-center items-center space-x-2 ">{  generateInputFields()}</div>
        
              </div>
              <div>v3.3 {selectedKey}</div>
             
              

            </div>



            <div className="p-4">
              {/* keypad */}
              <Keypad handleKeyChange={handleKeyChange}/>

            </div>

          </div>
   
      
    </div>

      </div>
  )
}