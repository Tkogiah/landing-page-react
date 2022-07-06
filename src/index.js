import React from 'react';
import ReactDOM from 'react-dom/client';
import Hero from './Hero';
import Services from './Services';
import Email from './Email';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Hero />
      {/* 
        div -- img
          nav
            link
            link
            link
          h2 
      */}
    <Services />
    <Email />
  </React.StrictMode>
);
