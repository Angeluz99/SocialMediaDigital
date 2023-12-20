import React, { useState } from 'react';
const ServiceAccordion = ({ services }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      {services.map((service, index) => (
        <div key={index} id='service-container' className={`accordion-item ${index === activeIndex ? 'active' : ''}`}>
          <h5 id='service-title' className='d-flex justify-content-between' onClick={() => toggleAccordion(index)}>
            {service.title}
            <i className={`bi ${index === activeIndex ? 'bi-chevron-compact-up' : 'bi-chevron-compact-down'}`}></i>
          </h5>
          <div className={`accordion-content cascade-item ${index === activeIndex ? 'active' : ''}`}>
            <p><i className="bi bi-search-heart"></i> {service.description}</p>
            <p>Impartido por <strong>{service.ponente}</strong></p>
            <div><img src={process.env.PUBLIC_URL + service.imageUrl} alt={service.title}  loading="lazy"/></div>
            <p className='d-flex justify-content-end mt-1' > <strong> <i className="bi bi-calendar-heart"></i> {service.presentaciones}</strong></p>
            <p className='d-flex justify-content-end mt-1' > {service.lugar}</p>

          </div>
        </div>
      ))}
    </div>
  );
};

const Services = () => {
  const servicesData = [
    { title: 'Sueroterapia', presentaciones: "14 de noviembre. 20:00 hrs", lugar:"Via Zoom", description: 'Conoce la fórmula más innovadora que cambiará la vida tus pacientes', ponente: 'Andrés Castañeda Luna', imageUrl: '/images/service1.jpg' },
  ];
return (
  <section className='service-container'>
    <h2><i className="bi bi-clipboard2-heart"></i> Capacítate</h2>
    <p>
    ¿Eres profesional de la salud? ¿Te interesa ofrecer alternativas a tus pacientes?
    ¿Quieres mejorar calidad de vida con tratamientos efectivos y confiables?
    ¡Entonces este curso es para ti!
    </p>

    <ServiceAccordion services={servicesData} />
  </section>
);
};



export default Services;