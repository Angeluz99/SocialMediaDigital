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
          <h5 className='d-flex justify-content-between' onClick={() => toggleAccordion(index)}>
            {service.title}
            <i className={`bi ${index === activeIndex ? 'bi-chevron-compact-up' : 'bi-chevron-compact-down'}`}></i>
          </h5>
          <div className={`accordion-content cascade-item ${index === activeIndex ? 'active' : ''}`}>
            <p>{service.description}</p>
            <div><img src={service.imageUrl} alt={service.title} /></div>
            <h6 className='d-flex justify-content-end mt-1' ><i className="bi bi-prescription2"></i> {service.presentaciones}</h6>
          </div>
        </div>
      ))}
    </div>
  );
};

const Services = () => {
  const servicesData = [
    { title: 'Sueroterapia', presentaciones: "14 DE NOVIEMBRE. 20:00 hrs", description: 'Ponente: Andrés Castañeda Luna. Conoce la fórmula más innovadora que cambiará la vida tus pacientes ', imageUrl: '/images/servicesImages/service1.jpg' },
  ];
return (
  <section className='service-container'>
    <h2><i className="bi bi-clipboard2-heart"></i> Capacítate</h2>
    <p>
    ¿Eres profesional de la salud? ¿Te interesa ofrecer alternativas a tus pacientes?
    ¿Quieres mejorar calidad de vida con tratamientos efectivos y confiables?
    ¡Entonces este curso es para ti!.
    </p>

    <ServiceAccordion services={servicesData} />
  </section>
);
};



export default Services;