import React, { useState } from 'react';
const ServiceAccordion = ({ services }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className='accordions-container'>
      {services.map((service, index) => (
        <div key={index} className={`accordion ${index === activeIndex ? 'active' : ''}`}>
          <h5 className='d-flex justify-content-between' onClick={() => toggleAccordion(index)}>
          <p><i className={`fa-solid ${service.icon}`}></i> {service.title}</p> 
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
    { icon:'fa-person-dots-from-line', title: 'Sueroterapia', presentaciones: "14 de noviembre. 20:00 hrs", lugar:"Via Zoom", description: 'Conoce la fórmula más innovadora que cambiará la vida tus pacientes', ponente: 'Andrés Castañeda Luna', imageUrl: '/images/service1.jpg' },
    { icon:'fa-person-dots-from-line', title: 'Medicina Estética', presentaciones: "30 de enero. 20:00 hrs", lugar:"Via Zoom", description: 'Explorar nuestros productos de medicina estética. Respaldados por la última investigación científica, que proporcionan soluciones para realzar la belleza y mejorar la salud de la piel.', ponente: 'Andrés Castañeda Luna', imageUrl: '/images/service2.jpg' },
    { icon:'fa-person-dots-from-line', title: 'Endocrinogenética', presentaciones: "7 de diciembre. 20:00 hrs", lugar:"Via Zoom", description: 'Endocrinogenética y hormonas bioidénticas', ponente: 'Dr. Alexis Monge', imageUrl: '/images/service3.jpg' },

  ];
return (
  <section className='allServices-container'>
    <h2><i className="bi bi-clipboard2-heart"></i> Capacítate</h2>
    <p>
    ¿Eres profesional de la salud? <strong>¿Te interesa ofrecer alternativas a tus pacientes?</strong>
    ¿Quieres mejorar calidad de vida con tratamientos efectivos y confiables?
    ¡Entonces estos cursos son para ti!
    </p>

    <ServiceAccordion services={servicesData} />
  </section>
);
};



export default Services;