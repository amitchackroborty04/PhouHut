import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <section>
      <div className='w-full h-auto lg:h-[65vh] flex '>
        <Image src="/assets/hero.png" alt="Hero Image" width={1000} height={1000} className='w-full h-full' />
      </div>
    </section>
  )
}

export default Hero