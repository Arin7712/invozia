import React from 'react'
import { Button } from './ui/button'

const Footer = () => {
  return (
    <div className="md:px-[22rem] px-6 md:py-[6rem] py-[2rem]">
      <div className='border-t-[1px] border-b-[1px] py-[6rem]'>
        <div className='flex flex-col gap-6 md:w-[30%] w-[50%]'>
            <h1 className="text-3xl font-medium">Invozia</h1>
            <p className="max-w-sm text-zinc-300">Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
            <Button className='rounded-full px-6 w-fit'>Download app</Button>
        </div>
      </div>
      <div className='py-6'>
        <p className='text-sm text-zinc-500'>
        Copyright © Devio X | Designed by BRIX Templates - Powered by Webflow
        </p>
      </div>
    </div>
  )
}

export default Footer
