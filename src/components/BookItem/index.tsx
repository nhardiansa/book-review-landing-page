import React from 'react'

import BTIBook from '../../assets/images/bti-cover.jpg'

interface BookItemProps {
  containerClass?: string
}

export const BookItem = ({ containerClass }: BookItemProps) => {
  return (
    <div className={`book-item-container p-8 rounded-xl border drop-shadow-md min-w-[16rem] md:w-[18.5rem] ${containerClass}`}>
      <img src={BTIBook} alt="beyond-the-inspiration" className='rounded-xl w-full max-w-[14.4rem] h-[22rem] object-cover' />
      <h3 className='font-Merriweather text-xl md:text-2xl mt-7 mb-2'>Beyond The Inspiration</h3>
      <div className="stars">
        <span className="material-symbols-outlined text-secondary mr-2">star</span>
        <span className="material-symbols-outlined text-secondary mr-2">star</span>
        <span className="material-symbols-outlined text-secondary mr-2">star</span>
        <span className="material-symbols-outlined text-secondary mr-2">star</span>
        <span className="material-symbols-outlined text-gray-300 mr-2">star</span>
      </div>
      <p className='writer font-Inter md:text-lg text-gray-400 my-5'>Felix Y. Siauw</p>
      <div className="reviewer flex items-center">
        <div className='avatar-image w-4 h-4 md:w-6 md:h-6 rounded-full bg-secondary mr-2'></div>
        <p className='text-xs md:text-sm font-Inter'>Nabil Hardiansa <span className='text-gray-400'><br className='md:hidden' />• 1 week ago</span></p>
      </div>
    </div>
  )
}
