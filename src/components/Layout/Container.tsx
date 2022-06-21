import React, { useEffect, useState } from 'react'

interface ContainerProps {
  children: JSX.Element;
  navBellow?: boolean;
}

export const Container = (props: ContainerProps) => {
  const [navHeight, setNavHeight] = useState(0);
  const [navBellow, setNavBellow] = useState('');

  useEffect(() => {
    const navbarHeight = document.querySelector('nav')?.scrollHeight;
    setNavHeight(navbarHeight || 10)
  }, [])

  useEffect(() => {
    const { navBellow } = props

    if (navBellow) {
      setNavBellow('container md:px-5 px-3 pt-16 md:pt-24')
    } else {
      setNavBellow('container md:px-5 px-3')
    }

  }, [props.navBellow])

  return (
    <div className={navBellow}>
      {props.children}
    </div>
  )
}
