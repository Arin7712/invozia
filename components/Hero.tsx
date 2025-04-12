import React from 'react'
import { Button } from './ui/button'
import { Star } from 'lucide-react'

const Hero = () => {
  return (
    <div className="md:px-[22rem] px-6 md:py-[6rem] py-[2rem]">
      <div className='flex flex-col justify-center items-center text-center gap-6'>
        <div className='flex gap-2 justify-between items-center'>
        {[...Array(5)].map((_, i) => (
            <Star key={i} className="fill-yellow-300 text-yellow-300 size-3" />
          ))} 4.9 star rating on Google
        </div>
        <h1 className='text-5xl font-medium md:max-w-2xl'>The world’s most powerful terminal</h1>
        <p className='md:max-w-xl text-zinc-300'>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eius tempor incididunt ut labore et dolore magna aliqua.</p>
        <div className='flex gap-6'>
          <Button className='rounded-full'>Download app</Button>
          <Button className='rounded-full' variant={'outline'}>View prices</Button>
        </div>
      </div>
    </div>
  )
}

export default Hero
