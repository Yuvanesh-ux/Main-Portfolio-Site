'use client'

import Image from 'next/image'
import Gif from '../../../assets/gif.gif'
import Grain from '../../../assets/grain.jpg'
import Blob1 from '../../../assets/gpt4all/blob1.svg'
import Blob2 from '../../../assets/gpt4all/blob2.svg'
import Blob3 from '../../../assets/gpt4all/blob3.svg'


export default function Gpt4all() {
  return (
    <div className='relative w-[55rem] h-[37rem] p-8 flex flex-col justify-start bg-red-300'>
      <div className='w-fit h-fit py-5 flex flex-col justify-start gap-1'>
        <div className='text-zinc-800 text-8xl font-black z-10 mix-blend-difference'>GPT4ALL</div>
        <div className="w-96 h-9 pl-1 text-zinc-800 text-base font-black mix-blend-overlay">An ecosystem of open-source on-edge large language models</div>
      </div>
      <div className="w-[33rem] h-[18rem] pt-1 bg-zinc-900 rounded-2xl border border-white justify-center items-center inline-flex overflow-hidden z-10">
        <Image src={Gif} className="tran" alt="" />
      </div>
      <div className="absolute top-10 right-3 w-28 h-16 pb-0.5 flex-col justify-center items-start gap-0.5 inline-flex">
        <div className="w-28 h-20 gap-3 relative flex-col justify-start items-start flex">
          {/* <div className="w-28 h-7 bg-rose-200 rounded-3xl" /> */}
          <div className="w-28 h-7 flex items-center pl-2 bg-rose-200 rounded-3xl text-zinc-800 text-base font-black">50.6 K ⭐ </div>
          <div className="w-28 h-8 flex items-center pl-2 bg-rose-200 rounded-3xl text-zinc-800 text-sm font-black">11 citations 📝</div>
        </div>
      </div>
      <div className='absolute w-full h-full top-0 left-0 '><Image className='w-full h-full mix-blend-soft-light opacity-40' src={Grain} alt="" /></div>
      <Image
        className='absolute top-0 right-0 z-0'
        priority
        src={Blob1}
        alt=""
      />
      <Image
        className='absolute bottom-0 left-0 z-0'
        priority
        src={Blob2}
        alt=""
      />
      <Image
        className='absolute -top-[75px] left-0 z-0'
        priority
        src={Blob3}
        alt=""
      />
    </div>
  )
}