import React from 'react';

const Contact = () => {
  return (
    <div className='contact-container'>
      {/* Add content for the bottom section */}
      <footer>
        <h3><i className="bi bi-send-arrow-up"></i> ¿Interesado en nuestros productos y servicios?</h3>
        <div className='text-center'>
        <h6>Escríbenos via <a href="https://wa.me/523345165088/?text=Mensaje%20de%20prueba%20desde%20el%20website`" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-whatsapp">WhatsApp.</i> </a> <br />
          O manda un mensaje privado a nuestras redes sociales: <a href="https://www.facebook.com/profile.php?id=61551370328412" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-facebook"> Facebook,</i>
          </a> <br />     
           <a href="https://www.instagram.com/regeneratecelulasmadre/" target="_blank" rel="noopener noreferrer"> 
            <i className="bi bi-instagram"> Instagram.</i></a><br />
            También puedes contactar via <a href="mailto:angelgldiaz@gmail.com">angelgldiaz@gmail.com.</a><br />
             O llamar al <a href="tel:3345165088">33 4516 5088</a> en horario de oficina.</h6>
      </div>
      </footer>
    </div>
  );
};

export default Contact;