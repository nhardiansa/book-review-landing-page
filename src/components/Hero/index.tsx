import React from 'react'
import { Container } from '../Layout/Container'

import addImage from '../../assets/images/add-element.png'

export const Hero: React.FC = () => {
  return (
    <Container>
      <div className='hero-container'>
        <div className="left-side font-Merriweather bg-primary rounded-xl p-4 md:p-7 relative overflow-hidden">
          <h2 className='text-secondary2 w-5/6 md:w-2/5 font-bold text-3xl mb-4'>Book is a window to the world</h2>
          <p className='font-normal w-5/6 md:w-2/4 mb-7'>wake up your dream by reading a book every day</p>
          <button className='bg-secondary py-2 px-5 rounded-md text-white'>
            Read Now
          </button>
          <img src={addImage} alt="additional" className='absolute w-1/2 md:w-1/3 md:bottom-[-5rem] bottom-[-4rem] right-2' />
        </div>
      </div>
    </Container>
  )
}
