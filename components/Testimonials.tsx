import React from 'react'
import { Button } from './ui/button'
import { testimonialItems } from '@/constants'
import Image from 'next/image'

const Testimonials = () => {
  return (
<div className="md:px-[22rem] px-6 md:py-[6rem] py-[2rem]">
      <div className="flex md:flex-row flex-col md:gap-0 gap-4 justify-between items-center md:text-start text-center">
        <h1 className="text-3xl font-medium md:max-w-2xl">Testimonials</h1>
        <Button className="rounded-full">Browse articles</Button>
      </div> 
      <div className="flex flex-col pt-10 gap-[4rem]">
                      {
                          testimonialItems.map((item, index) => (
                              <div key={index} className="rounded-md border-[1px] p-6 flex md:flex-row flex-col gap-6 items-start text-start">
                                  <div className='px-4 py-2 bg-neutral-900 rounded-full border-[1px] text-sm'>
                                      {item.tag}
                                  </div>
                                  <div className="space-y-[4rem]">
                                    <div className='space-y-2'>
                                      <h1 className='text-3xl font-medium'>{item.title}</h1>
                                      <p className="text-sm text-zinc-300 md:w-[70%]">{item.description}</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                      <Image src={item.img} alt='img' width={30} height={30} className="rounded-full"/>
                                      <div>
                                        <h1 className='text-sm'>{item.name}</h1>
                                        <p className="text-xs text-zinc-500">{item.date}</p>
                                      </div>
                                    </div>
                                  </div>
                              </div>
                          ))
                      }
                  </div>     
    </div>
  )
}

export default Testimonials
