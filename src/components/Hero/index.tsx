import React from 'react'
import { Container } from '../Layout/Container'

import addImage from '../../assets/images/add-element.png'
import illustration from '../../assets/images/ilustration.png'

export const Hero: React.FC = () => {
  return (
    <Container navBellow={true}>
      <div className='hero-container bg-primary lg:flex justify-around relative items-center rounded-xl overflow-hidden'>
        <div className="left-side font-Merriweather rounded-xl p-4 md:p-7 z-10">
          <h2 className='text-secondary2 w-5/6 md:w-2/5 font-bold text-3xl lg:text-4xl mb-4 lg:w-full'>Book is a <br className='hidden lg:block' /> window to the world</h2>
          <p className='font-normal w-5/6 md:w-2/4 mb-7 lg:w-full'>wake up your dream by reading a book every day</p>
          <button className='bg-secondary py-2 px-5 rounded-md text-white'>
            Read Now
          </button>
          <img src={addImage} alt="additional" className='absolute w-1/2 lg:hidden md:w-1/3 md:bottom-[-5rem] bottom-[-3rem] right-2' />
        </div>
        <div className="right-side hidden lg:block w-1/3">
          <img src={illustration} alt="illustration" className='w-full' />
        </div>
        <img src={addImage} alt="additional" className='absolute hidden lg:block w-1/5 top-[-2.5rem] left-[3rem]' />
      </div>
    </Container>
  )
}
