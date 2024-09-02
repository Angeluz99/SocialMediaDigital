import React from 'react';

const Contact = () => {
  return (
    <div className='contact-container text-center'>
      {/* Add content for the bottom section */}
      <footer>
        <h3><i className="bi bi-send-arrow-up"></i>  ¡Contáctanos para asesorías y pedidos!</h3>
        <div className='contact-info text-center'>
        <h6>Escríbenos via <a className='whatsAppfoot' href="https://wa.me/523141061520/?text=Quisiera%20saber%20más%20de%20sus%20productos..." target="_blank" rel="noopener noreferrer">
          <i className=" bi bi-whatsapp">WhatsApp.</i> </a> <br />
          <p> O visita nuestras redes sociales para enterarte de las últimas promociones: <a href="https://www.facebook.com/profile.php?id=100071994851927" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-facebook"> Facebook</i>
          </a> <br />     
          </p>
         
          </h6>
      </div>
      <section>
        PÁGINA CREADA POR  <a href='https://angeluz99.github.io/Portfolio/indexEsp.html' target='_blank' rel="noopener noreferrer">Angel Diaz.</a> 
      </section>
      </footer>
    </div>
  );
};

export default Contact;