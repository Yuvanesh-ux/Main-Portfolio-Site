'use client'

import Image from 'next/image'

import blobBottom from '@/assets/blob3.svg'
import blobBottom2 from '@/assets/blob2.svg'
import blobText from '@/assets/blob1.svg'
import Grain from '@/assets/grain.jpg'
import LeftButton from '@/assets/Left.svg'
import RightButton from '@/assets/Right.svg'
import Gpt4all from '@/components/cards/gpt4all'
import Experience from '@/components/cards/experience'
import Creative from '@/components/cards/creative'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const pages = [<Creative />, <Gpt4all />, <Experience />]

export default function Home() {
  const [activePageIndex, setActivePageIndex] = useState(1);
  
  return (
    <>
      <div className='w-full max-h-fit flex flex-col'>
        <div className="w-full h-screen bg-stone-300 relative">
          <div className="pl-40 w-fit h-screen flex flex-row">
            <div className="w-10 h-96 ml-35 pt-60 flex-col gap-7 flex relative">
              <div className="w-10 h-10 relative flex-col justify-start items-start flex">
                <div className="w-10 h-10 rounded-full border border-black absolute flex justify-center items-center" />
                <div className="w-7 h-7 bg-zinc-800 rounded-full absolute top-[15%] left-[15%]" />
                <div className="w-2.5 h-2.5 bg-white rounded-full absolute top-[40%] left-[37%]" />
              </div>
              <div className="w-1 h-screen bg-zinc-800 absolute left-[48%] top-[72.5%] z-10" />
            </div>
            <div className='w-fit h-full flex flex-col pt-[14.5rem] z-10'>
              <div className="h-24 pl-1.5 pb-1.5 flex-col justify-start items-left gap-0.5 flex">
                <div className="h-11 flex flex-row gap-2"><p className="text-zinc-800 text-5xl font-semibold drop-shadow-3xl m-0">Hey I'm</p><p className="text-zinc-800 text-5xl font-black drop-shadow-3xl italic">Yuvanesh</p></div>
                <br/>
                <div className="h-10 flex flex-row gap-2"><p className="text-zinc-800 text-4xl font-normal">I </p><p className="text-zinc-800 text-4xl font-thin italic">design </p><p className="text-zinc-800 text-4xl font-normal">and </p><p className="text-zinc-800 text-4xl font-extrabold">develop... </p></div>
              </div>
            </div>
          </div>
          <Image
            className='absolute bottom-0 right-0 z-0'
            priority
            src={blobBottom}
            alt=""
          />
          <Image
            className='absolute bottom-0 left-0 z-0'
            priority
            src={blobBottom2}
            alt=""
          />
          <Image
            className='absolute -top-[75px] left-[150px] z-0'
            priority
            src={blobText}
            alt=""
          />
          <div className='absolute w-full h-full top-0 left-0 '><Image className='w-full h-full mix-blend-soft-light opacity-20' src={Grain} alt="" /></div>
          <div className='absolute w-fit h-2 bottom-5 right-5 flex flex-row gap-1'></div>
        </div>
        <div className='w-screen h-screen bg-zinc-800 flex justify-center items-center'>
          <div className='w-fit h-fit relative'>
            <div className='w-[54rem] h-[36rem] rounded-2xl border-4 border-white flex justify-center items-center relative overflow-hidden'>
              {pages.map((PageComponent, index) => (
                <div 
                  key={index}
                  className={`
                    absolute top-0 left-0 w-full h-full 
                    transition-transform ease-[cubic-bezier(1,-0.01,.76,.77)] duration-700
                    ${activePageIndex === index ? 'translate-x-0' : index < activePageIndex ? '-translate-x-full' : 'translate-x-full'}`}
                >
                  {PageComponent}
                </div>
              ))}
              </div>
              {/* Buttons are here but remain static */}
              <div 
                className='absolute w-fit h-fit top-[40%] -left-[15%] hover:scale-110 active:scale-95 cursor-pointer transition-transform' 
                onClick={() => setActivePageIndex(prev => Math.max(prev - 1, 0))}
              >
                <Image src={LeftButton} alt="" />
              </div>
              <div 
                className='absolute w-fit h-fit top-[40%] -right-[15%] hover:scale-110 active:scale-95 cursor-pointer transition-transform'
                onClick={() => setActivePageIndex(prev => Math.min(prev + 1, pages.length - 1))}
              >
                <Image src={RightButton} alt="" />
              </div>
            
          </div>
        </div>  
      </div>
    </>
  )
}
