"use client";
import React, { useState } from 'react'
import Button from './Button'
import { useRouter } from 'next/navigation';
import { RiListView } from '@remixicon/react'


export default function Header() {
    const router = useRouter();
    const [isListOpen, setIsListOpen] = useState(false);
    function handleHome(): void {
        router.push('/')
    }

    function handleListning(): void {
        router.push('/listening')
    }

    function handleVocabulary(): void {
    }

    function handlemenu(): void {
        setIsListOpen(!isListOpen)
    }

    return (
        <header className="fixed z-20 row-start-1 flex items-center justify-between h-[100px] w-full backdrop-blur-sm bg-[#FFE31A]/40 shadow-md px-6 font-[lexendflex]">

            <div id="header" className="flex justify-between items-center w-full text-[#3D5300] text-[18px] font-[300] px-[25px] ">
                <div id="logo" className="text-left">
                    <h1>IELTS Prep</h1>
                </div>
                <div id="menu" className="text-right">
                    <menu>
                        <div className="flex space-x-6 mobile:hidden  md:block ">
                            <Button text="Home"
                                onClick={handleHome}
                            />
                            <Button text="Listning"
                                onClick={handleListning} />
                            <Button text="Vocabulary"
                                onClick={handleVocabulary} />
                        </div>
                        <div className='relative mobile:block  md:hidden'>
                            <RiListView
                                onClick={handlemenu}
                                color='#5a5353'
                                size={30} />
                            {isListOpen && (
                                <div className='absolute top-[100%] right-0 flex flex-col gap-4 items-start backdrop-blur-md bg-[#CFFF8D]/40 p-4 border-slate-900	'>
                                    <Button text="Home"
                                        onClick={handleHome}
                                    />
                                    <Button text="Listning"
                                        onClick={handleListning} />
                                    <Button text="Vocabulary"
                                        onClick={handleVocabulary} />
                                </div>
                            )}
                        </div>
                    </menu>
                </div>
            </div>
        </header>
    )
}
