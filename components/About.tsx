import { aboutImages } from '@/constants'
import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div className="md:px-[22rem] px-6 md:py-[6rem] py-[2rem]">
    <div className="flex flex-col gap-4 justify-between items-center text-center">
      <h1 className="text-3xl font-medium md:max-w-2xl">Why choose us ?</h1>
      <p className="max-w-sm text-zinc-300">Lorem ipsum dolor sit amet consectetur elit adipiscing elit, sed do eiusmod tempor.</p>
    </div>
      <div className='pt-[4rem]'>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {
                aboutImages.map((item, index) => (
                    <Image src={item.img}       alt={`about-img-${index}`}
                    width={500} height={500} className="rounded-md" key={index}/>
                ))
            }
        </div>
      </div>
    </div>
  )
}

export default About
