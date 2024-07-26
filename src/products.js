import React, { useState } from 'react';

const ProductAccordion = ({ products }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isHovered, setIsHovered] = useState(null);
  const [isImageTapped, setIsImageTapped] = useState(false);
  const [isImageHovered, setIsImageHovered] = useState(false);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleHover = (index) => {
    setIsHovered(index);
  };

  const handleLeave = () => {
    setIsHovered(null);
  };

  const handleImageHover = () => {
    setIsImageHovered(true);
  };

  const handleImageLeave = () => {
    setIsImageHovered(false);
  };

  const handleImageTap = () => {
    setIsImageTapped(!isImageTapped);
  };

  return (
    <div className='accordions-container'>
      {products.map((product, index) => (
        <div
          key={index}
          className={`accordion ${index === activeIndex ? 'active' : ''}`}
          onMouseEnter={() => handleHover(index)}
          onMouseLeave={handleLeave}
        >
          <h5
            className={`d-flex justify-content-between`}
            onClick={() => toggleAccordion(index)}
          >
            <p>
              <i className={`fa-solid ${product.icon}`}></i> {product.title}
            </p>
            {isHovered === index && (
              <span className="presentaciones-tooltip">
                <strong>{product.presentaciones}</strong>
              </span>
            )}
            <i className={`bi ${index === activeIndex ? 'bi-chevron-compact-up' : 'bi-chevron-compact-down'}`}></i>
          </h5>
          <div
            className={`accordion-content cascade-item ${index === activeIndex ? 'active' : ''}`}
            onClick={() => handleImageTap()}
          >
            <p>
              <strong> <i className="bi bi-body-text"></i></strong> {product.description}
            </p>
            <div
            className="productsImg"
              // onMouseEnter={handleImageHover}
              // onMouseLeave={handleImageLeave}
            >
              <img
                src={process.env.PUBLIC_URL + product.imageUrl}
                alt={product.title}
                loading="lazy"
                className= {isImageTapped ? 'scaleImage' : '' }
              />
              {/* {isImageHovered && (
                <span className="img-message">*Imagen de referencia. <strong>Contáctanos para reibir nuestros catálogos.</strong></span>
              )} */}
            </div>
            <p className='productPresentaciones' >
              <strong> <i className="bi bi-prescription2"></i> {product.presentaciones}</strong>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};


const Products = () => {
  // Sample data for 14 products
  const productsData = [
    { icon: 'fa-id-card', title: 'Tarjetas de Presentación', presentaciones: "Disponible", description: 'Tarjetas de presentación para tu negocio. Nosotros las diseñamos. Entregas personales en Guadalajara y envíos a toda la República', imageUrl: '/images/product1.jpg' },
    { icon: 'fa-sheet-plastic', title: 'Lona Impresa', presentaciones: "Disponible", description: 'Lona impresa para tu negocio o eventos. Contamos con diferentes medidas, te incluimos el diseño.', imageUrl: '/images/product2.jpg' },
    { icon: 'fa-envelopes-bulk', title: 'Volantes', presentaciones: "Disponible", description: 'Date a conocer con nuestros volantes impresos, a la medida y diseño deseado. ', imageUrl: '/images/product3.jpg' },
    { icon: 'fa-clipboard-list', title: 'Banner Publicitario', presentaciones: "Disponible", description: 'Date a conocer con nuestros banners publicitarios, a la medida y diseño deseado. ', imageUrl: '/images/product4.jpg' },
    { icon: 'fa-flag', title: 'Bandera Publicitaria', presentaciones: "Disponible", description: 'Incluye diseño, tela sublimada, estructura y estaca.', imageUrl: '/images/product5.jpg' },
    { icon: 'fa-border-all', title: 'Muro Publicitario', presentaciones: "Disponible", description: 'Muro publicitario expansible con tela sublimada.Incluye diseño', imageUrl: '/images/product6.jpg' },
    { icon: 'fa-dumpster', title: 'Demo Stand', presentaciones: "Disponible", description: 'Date a conocer con nuestros banners publicitarios, a la medida y diseño deseado.', imageUrl: '/images/product7.jpg' },
    { icon: 'fa-circle-stop', title: 'Caja de Luz', presentaciones: "Disponible", description: 'Caja de luz redonda de 40 cm. Incluye diseño', imageUrl: '/images/product8.jpg' },
    

  ];

  return (
    <section className='allProducts-container'>
      <h2><i class="bi bi-laptop"></i> Diseños e Impresiones</h2>
      <p>
      ¿Ya conoces nuestros servicios?
En SM contamos con diseño e impresión de material publicitario.
      </p>
      <div className="productItemsContainer">     
         <ProductAccordion products={productsData} />
      </div>

    </section>
  );
};

export default Products;
