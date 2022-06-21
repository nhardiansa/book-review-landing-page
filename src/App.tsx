import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { BookList } from './components/BookList';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';

const App: React.FC = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link href="https://fonts.googleapis.com/css2?family=Inter&family=McLaren&family=Merriweather:wght@300;400;700&family=Poppins&display=swap" rel="stylesheet" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
          <title>Review Book</title>
        </Helmet>

        <Navbar />
        <Hero />
        <BookList />
      </HelmetProvider>
    </>
  );
}

export default App;
