// App.js
import React, { useState } from 'react';
import Products from './products';
import Services from './services';
import Contact from './contact';
import './App.css';  // Import the global styles

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        // Display all sections on the Home page
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

  return (
    <div>
    <div className="head-container">
      <nav className="navbar p-1 ">
      <div onClick={() => navigateTo('home')}><img id='smlogo' src={process.env.PUBLIC_URL + '/images/smlogo.png'} alt="Logo" /></div>
        <button onClick={() => navigateTo('products')}><i className="bi bi-cookie"></i> Tratamientos</button>
        <button onClick={() => navigateTo('services')}><i className="bi bi-clipboard2-heart"></i> Capacítate</button>
        <button onClick={() => navigateTo('contact')}><i className="bi bi-send-arrow-up"></i> Contacto</button>
      </nav>
      <p className='p-1'>
      Somos un equipo de distribuidores especializados en medicina y terapia celular. Contamos con médicos certificados en el area regenerativa para apoyar en tus tratamientos. ¡Contáctanos para asesorías y pedidos!
      </p>
      <div className='social-head d-flex justify-content-end'>
        {/* <div className='social-head-child d-flex justify-content-around border border-success' > */}
        <a href="https://wa.me/523345165088/?text=Mensaje%20de%20prueba%20desde%20el%20website`" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-whatsapp"></i>
        </a>
          <a href="https://www.facebook.com/profile.php?id=61551370328412" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-facebook"></i>
          </a>        
          <a href="https://www.instagram.com/regeneratecelulasmadre/" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-instagram"></i>
          </a>    
          {/* </div>     */}
        </div>
    </div>

    
    <div>{renderPage()}</div>

    </div>
      
    
  );
};

export default App;

