import React from 'react'

export const Navbar: React.FC = () => {
  return (
    <nav className='container px-3 md:p-5 py-3 flex align-middle justify-between fixed z-10 bg-white'>
      <h1 className='font-McLaren text-xl'>
        <span className='text-secondary2'>Review</span>
        <span className='text-secondary'>Book</span>
      </h1>
      <form className='w-1/2 relative hidden md:block' action="#">
        <input className='bg-primaryBg w-full  py-2 px-3 rounded-md text-sm font-Merriweather' type="text" placeholder='Find the book you are looking for' />
        <i className='absolute right-4 top-2'>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 text-secondary2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </i>
      </form>
      <div className='menu-icon md:hidden'>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </div>
      <div className='profile-image md:block hidden'>
        <div className='p-[0.4rem] bg-secondary rounded-full'>
          <p className='font-Merriweather'>NH</p>
        </div>
      </div>
    </nav>
  )
}
