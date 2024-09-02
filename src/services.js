import React, { useState } from 'react';

// ServiceAccordion Component
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
            <div>
              <img
                src={process.env.PUBLIC_URL + service.imageUrl}
                alt={service.title}
                loading="lazy"
                id='serviceimages'
              />
            </div>
            <p className='d-flex justify-content-end mt-1'>
              <strong> <i className="bi bi-calendar-heart"></i> {service.presentaciones}</strong>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

// Main Services Component
const Services = () => {
  const [hoveredImage, setHoveredImage] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredImage(index);
  };

  const handleMouseLeave = () => {
    setHoveredImage(null);
  };

  const getClassName = (index) => {
    if (hoveredImage === null) {
      return index === 2 ? 'bannerImg defaultRotation' : 'bannerImg defaultRotation';
    }
    if (hoveredImage === index) {
      return 'bannerImg rotateTo0';
    }
    return 'bannerImg rotateTo80';
  };

  const servicesData = [
    { icon: 'fa-play', title: 'Plan Mini', presentaciones: "$800", lugar: "Hotel Baruk, GDL", description: 'Facebook con una publicación por semana + promoción pagada mensual', ponente: 'Varios Expertos', imageUrl: '/images/service0.jpg', linkZoom: '', code: '' },
    { icon: 'fa-forward-step', title: 'Plan Medio', presentaciones: "$1000", lugar: "Via Zoom", description: 'Facebook con 2 publicaciones por semana + 1 promoción pagada al mes, además perfil en Instagram con contenido ligado', ponente: 'Andrés Castañeda Luna', imageUrl: '/images/service0.jpg', linkZoom: 'https://us06web.zoom.us/rec/share/Uwp-qWRW6RrpBwd7N54wjeWNM67v3jfBRzj68T4WbWOYalbkfLQygtCr_bGXV9Hy._kBmDC5P9Yoq3rQ5', code: '@zN7gCh=' },
    { icon: 'fa-forward-fast', title: 'Plan Grande', presentaciones: "$1200", lugar: "Via Zoom", description: 'Facebook con 3 publicaciones por semana + 2 promociones pagadas al mes, además perfil en Instagram con contenido ligado. Y Whatsapp empresarial con imagen de perfil', ponente: 'Dr. Alexis Monge', imageUrl: '/images/service0.jpg', linkZoom: 'https://us06web.zoom.us/rec/share/4ui9kNBMlMj68XsJSdau-ZuUVx4cLii3scoSkCfs2-HZAE1bwsmGDywHH5Jkjzwz.hhcnPENeP3wMiDk7', code: 'zd#l3e%%' },
  ];

  return (
    <section className='allServices-container'>
      <div className='bannersDiv'>
        <img
          src={process.env.PUBLIC_URL + '/images/banner1.jpg'}
          alt="Interactuar"
          loading="lazy"
          className={getClassName(1)}
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={handleMouseLeave}
        />
        <img
          src={process.env.PUBLIC_URL + '/images/banner2.jpg'}
          alt="Interactuar"
          loading="lazy"
          className={getClassName(2)}
          onMouseEnter={() => handleMouseEnter(2)}
          onMouseLeave={handleMouseLeave}
        />
        <img
          src={process.env.PUBLIC_URL + '/images/banner3.jpg'}
          alt="Interactuar"
          loading="lazy"
          className={getClassName(3)}
          onMouseEnter={() => handleMouseEnter(3)}
          onMouseLeave={handleMouseLeave}
        />
      </div>
      <h2><i className="bi bi-people-fill"></i> Redes</h2>
      <p>
        Posiciona tu marca o negocio a través de redes sociales. Conoce los planes de manejo de redes que tenemos para ti.
      </p>
      <ServiceAccordion services={servicesData} />
    </section>
  );
};

export default Services;
