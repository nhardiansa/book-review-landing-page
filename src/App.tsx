import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
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
          <title>Review Book</title>
        </Helmet>

        <Navbar />
        <Hero />
      </HelmetProvider>
    </>
  );
}

export default App;
