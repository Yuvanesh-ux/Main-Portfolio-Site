'use client'

import Image from 'next/image'
import Grain from '@/assets/grain.jpg'
import Blob1 from '@/assets/creative/blob1.svg'
import Blob2 from '@/assets/creative/blob2.svg'
import Blob3 from '@/assets/creative/blob3.svg'
import styles from './creative.module.css'

import Cmoon from '@/assets/creative/cmoon.jpg'
import Eren from '@/assets/creative/eren.jpg'
import Giorno from '@/assets/creative/giorno.jpg'
import Gojo from '@/assets/creative/gojo.jpg'
import Guts from '@/assets/creative/guts.jpg'
import Isagi from '@/assets/creative/isagi.jpg'
import Jiraiya from '@/assets/creative/jiraiya.jpg'
import Jolyne from '@/assets/creative/jolyne.jpg'
import Katana from '@/assets/creative/katana.jpg'
import Musashi from '@/assets/creative/musashi.jpg'
import Yelena from '@/assets/creative/yelena.jpg'

export default function Creative() {

  const allImages = [
    <div className={styles.imageContainer}><Image src={Cmoon} alt="" /></div>,
    <div className={styles.imageContainer}><Image src={Eren} alt="" /></div>,
    <div className={styles.imageContainer}><Image src={Giorno} alt="" /></div>,
    <div className={styles.imageContainer}><Image src={Guts} alt="" /></div>,
    <div className={styles.imageContainer}><Image src={Gojo} alt="" /></div>,
    <div className={styles.imageContainer}><Image src={Jiraiya} alt="" /></div>,
    <div className={styles.imageContainer}><Image src={Isagi} alt="" /></div>,
    <div className={styles.imageContainer}><Image src={Jolyne} alt="" /></div>,
    <div className={styles.imageContainer}><Image src={Katana} alt="" /></div>,
    <div className={styles.imageContainer}><Image src={Musashi} alt="" /></div>,
    <div className={styles.imageContainer}><Image src={Yelena} alt="" /></div>,
  ]

  const halfwayPoint = Math.ceil(allImages.length / 2);
  const firstHalfImages = allImages.slice(0, halfwayPoint);
  const secondHalfImages = allImages.slice(halfwayPoint);

  return (
    <div className='relative w-[55rem] h-[37rem] p-8 flex flex-col justify-start bg-teal-600'>
      <div className='w-fit h-fit py-5 flex flex-col justify-start gap-1'>
        <div className='text-white text-8xl font-black z-10 mix-blend-soft-light'>Creative Works</div>
        <div className="w-96 h-9 pt-5 pl-1 text-white text-base font-black mix-blend-soft-light">"Life Happens Wherever You are, Whether You Make It Or Not."</div>
      </div>
      <div className="w-[50rem] h-96 mt-8 justify-center gap-8 flex flex-row overflow-hidden">
        <div className="w-fit self-stretch pb-6 justify-start items-start gap-8 flex " >
          <div className={`w-96 h-96 flex flex-col justify-center gap-8 ${styles.infiniteScrollUp}`}>
            {firstHalfImages.map((image, index) => (
                <div key={index} className={"rounded-2xl border border-neutral-600"}>
                    {image}
                </div>
            ))}
          </div>
          
          <div className={`w-96 h-96 flex flex-col justify-center gap-8 ${styles.infiniteScrollDown}`}>
              {secondHalfImages.map((image, index) => (
                  <div key={index} className={styles.imageContainer}>
                      {image}
                  </div>
              ))}
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