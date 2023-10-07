'use client'

import Image from 'next/image'
import Gif from '../../../assets/gif.gif'
import Grain from '../../../assets/grain.jpg'
import Blob1 from '../../../assets/experience/blob1.svg'
import Blob2 from '../../../assets/experience/blob2.svg'
import Blob3 from '../../../assets/experience/blob3.svg'
import Map from '../../../assets/experience/map.png'
import Logo from '../../../assets/experience/nomic_logo_white 1.png'


export default function Experience() {
  return (
    <div className='relative w-[55rem] h-[37rem] p-8 flex flex-col justify-start bg-indigo-400' onClick={console.log("HI")}>
      <div className='w-fit h-fit py-5 flex flex-col justify-start gap-1'>
        <div className='text-white text-8xl font-black z-10 mix-blend-overlay'>Experience</div>
        <div className="w-96 h-9 pt-5 pl-1 text-white text-base font-black mix-blend-soft">"Destiny Is A Funny Thing. You Never Know How Things Are Going To Work Out."</div>
      </div>
      <div className="w-96 h-96 pr-64 pt-10 pb-5 justify-start items-center inline-flex">
        <div className="w-fit self-stretch pr-52 pb-6 justify-start items-start gap-1.5 inline-flex " >
          <div className="w-fit h-40 relative rounded-2x flex-col justify-start items-start flex overflow-hidden">
            <div className="w-72 h-full relative bg-white mix-blend-overlay opacity-100 z-10 rounded-2xl border border-neutral-300" />
            <div className='absolute bottom-0 right-0 mix-blend-multiply'><Image priority src={Map} alt="" /></div>
            <div className='absolute h-[120px] w-[90px] top-2 left-2 z-20'><Image priority src={Logo} alt="" /></div>
            <div className="w-72 h-4 text-black text-xs font-black absolute bottom-2 left-5">Junior Software Engineer</div>
          </div>
        </div>
      </div>
      <div className='absolute w-full h-full top-0 left-0 '><Image className='w-full h-full mix-blend-soft-light opacity-20' src={Grain} alt="" /></div>
      <Image
        className='absolute top-0 left-0 z-0'
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
        className='absolute top-0 right-0 z-0'
        priority
        src={Blob3}
        alt=""
      />
    </div>
  )
}