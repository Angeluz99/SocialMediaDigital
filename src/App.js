import React, { useState, useEffect } from 'react';
import Products from './products';
import Services from './services';
import Contact from './contact';
import './App.css';  // Import the global styles

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <div>
            <Products />
            <Services />
            <Contact />
          </div>
        );
      case 'products':
        return <div> <Products />
        <Contact />;</div>
      case 'services':
        return <div><Services />
        <Contact /></div>;
      case 'contact':
        return <Contact />;
      default:
        return null;
    }
  };

  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    // Calculate the 25% scroll position
    const scrollPosition = window.innerHeight * 0.28;

    // Get the element to change
    const whatsAppfloat = document.querySelector('.whatsAppfloat');

    // Function to check and update the style based on scroll position
    const checkScrollPosition = () => {
      if (window.scrollY > scrollPosition) {
        whatsAppfloat.style.display = 'block';
      } else {
        whatsAppfloat.style.display = 'none';
      }
    };

    // Attach the function to the scroll event
    window.addEventListener('scroll', checkScrollPosition);

    // Initial check on component mount
    checkScrollPosition();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', checkScrollPosition);
    };
  }, []); 

  return (
    <div>
    <div className="head-container">
      <nav className="navbar p-1 fixed-top ">
        <div onClick={() => navigateTo('home')}><img id='smlogo' src={process.env.PUBLIC_URL + '/images/smlogo.png'} alt="smlogo"  loading="lazy"/></div>
        <button onClick={() => navigateTo('products')}><i className="bi bi-cookie"></i> Impresiones</button>
        <button onClick={() => navigateTo('services')}><i className="bi bi-clipboard2-heart"></i> Redes</button>
        <button onClick={() => navigateTo('contact')}><i className="bi bi-send-arrow-up"></i> Contacto</button>
      </nav>
      
      <div id='head-content'>
        <p >
        Dedicados al manejo de <strong>redes sociales</strong>, creación de contenido diseño y rediseño de logotipo, así como <strong>diseño e impresión de material gráfico</strong> para pequeños negocios. </p>
        <img id='head-image' src={process.env.PUBLIC_URL + '/images/smlogo.png'} alt='smlogo'  loading="lazy"/>
        {/* <img id='head-image2' src={process.env.PUBLIC_URL + '/images/headimage2.png'} alt='pharmaceutical'  loading="lazy"/> */}
      </div>

      <div className='social-head d-flex justify-content-end'>
        {/* <div className='social-head-child d-flex justify-content-around border border-success' > */}
        <a className="whatsAppHead" href="https://wa.me/523345165088/?text=Quisiera%20saber%20más%20de%20sus%20productos" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-whatsapp"></i>
        </a>
          <a href="https://www.facebook.com/profile.php?id=61551370328412" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-facebook"></i>
          </a>        
  
          {/* </div>     */}
        </div>
    </div>
    <a className="whatsAppfloat" href="https://wa.me/523345165088/?text=Quisiera%20saber%20más%20de%20sus%20productos`" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-whatsapp"></i>
        </a>

    
    <div>{renderPage()}</div>

    </div>
      
    
  );

  
};

export default App;

