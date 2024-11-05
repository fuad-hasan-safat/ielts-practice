"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

export default function IeltsBook({bookNo}: {bookNo: string}) {
  const router = useRouter();
  const clickHandler = (bookNo: string) => {
    router.push(`/listening/${bookNo}`)
  }
  return (
    <div 
    onClick={()=>clickHandler(bookNo)}
    className="xl:w-[400px] lg:w-[350px] md:w-[250px] sm:w-[200px] w-[300px] h-[200px] backdrop-blur-sm bg-[#FEEC37]/40 rounded-xl shadow-md text-[#3D5300] p-[25px] cursor-pointer  hover:z-[999999] hover:p-[25px] hover:shadow-2xl">
        <h1>Practice {bookNo}</h1>
        <h6>Click to practice</h6>
    </div>
  )
}
