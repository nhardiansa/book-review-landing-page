import React, { useEffect, useState } from 'react'

interface ContainerProps {
  children: JSX.Element;
}

export const Container = (props: ContainerProps) => {
  const [navHeight, setNavHeight] = useState(0);

  useEffect(() => {
    const navbarHeight = document.querySelector('nav')?.scrollHeight;
    setNavHeight(navbarHeight || 10)
  }, [])
  return (
    <div className='container md:px-5 px-3 pt-16 md:pt-24'>
      {props.children}
    </div>
  )
}
