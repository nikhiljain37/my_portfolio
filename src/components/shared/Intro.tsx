import Image from 'next/image'
import React from 'react'
import dragon from '@/assets/Dragon.png'

const Intro = () => {
  return (
    <div className='mx-[21%] mt-10 flex'>
        <div>
        <h1 className='text-3xl'>Hey,I&apos;m Nikhil</h1>
        <p>
        Final year BTech student, thrilled by front-end development - building visually stunning, user-friendly websites. 
        </p>
        <p>Welcome to my digital garden. 🌱</p>
        </div>
        <Image
        src={dragon}
        alt='Loading'
        className='w-80 h-80'
        />
        
    </div>
  )
}

export default Intro