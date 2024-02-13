'use client'

import React, { useState } from 'react'
import NumberedKeyPad from './NumberedKeyPad'

import { useRouter } from 'next/navigation'
 

type Props = {}

export default function Login({}: Props) {
  
  const router = useRouter()
  const [password,setPassword]=useState<string>("")

  const[erromessage,setErrormessage]=useState("")

    const dbPassword = '1234'

    // const handleSubmit = (e:any)=>{
    //     e.preventDefault();
    //    const code = "1234"

    //    if(code === password){
    //     console.log('Logged In')
    //    }
    //    setPassword("")
    // }
    const getPinCode = (val:string)=>{
        
        if (val === 'clear') {
           setPassword('');
           setErrormessage(" ")

    }   else if (val === 'enter') {
      // Call handleSubmit
          if(dbPassword === password){
            router.push("/mainmenu")
          }else{
            setErrormessage("pls enter Correct PinCode")
          }
         console.log('Entered:', password);
    }   else {
      
        if(password?.length < 4){
         setPassword((preVal)=> preVal + val)
        }
    }
        
        console.log(val)
    }

  return (
    <>
     <div className="flex  space-x-2 flex-col">

     <input type= "password" value= {password} onChange={(e)=> setPassword(e.target.value)} className="h-12 w-32 text-center rounded-md border-2 border-red-300 text-black text-2xl" />
     {
      erromessage && (

        <p className="text-white text-xs text-center pt-2">{erromessage}</p>
      )
     }

      </div>
      <NumberedKeyPad handleKeyPress={getPinCode} password={password}/>
      </>
  )
}