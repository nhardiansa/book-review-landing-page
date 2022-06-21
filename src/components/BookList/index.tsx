import React from 'react'
import { BookItem } from '../BookItem'
import { Container } from '../Layout/Container'

export const BookList = () => {
  return (
    <Container>
      <section className='book-list-container mt-8 lg:mt-14'>
        <div className='book-list-container__header md:flex items-baseline justify-between'>
          <h2 className="leading-tight text-xl md:text-2xl mt-0 mb-2 text-secondary2 text-center md:text-left font-Merriweather font-bold ">Popular Now</h2>
          <a className='hidden md:block font-Merriweather text-md text-gray-400 hover:text-gray-500' href="#iniasd">
            View All
          </a>
        </div>
        <div className="book-list pb-5 mt-8 flex overflow-x-scroll">
          <BookItem containerClass='mr-4' />
          <BookItem containerClass='mr-4' />
          <BookItem containerClass='mr-4' />
          <BookItem />
        </div>

      </section>
    </Container >
  )
}
