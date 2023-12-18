import React, { useState } from 'react';
const ProductAccordion = ({ products }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      {products.map((product, index) => (
        <div key={index} id='product-container' className={`accordion-item ${index === activeIndex ? 'active' : ''}`}>
          <h5 className='d-flex justify-content-between' onClick={() => toggleAccordion(index)}>
            {product.title}
            <i className={`bi ${index === activeIndex ? 'bi-chevron-compact-up' : 'bi-chevron-compact-down'}`}></i>
          </h5>
          <div className={`accordion-content cascade-item ${index === activeIndex ? 'active' : ''}`}>
            <p>{product.description}</p>
            <div><img src={product.imageUrl} alt={product.title} /></div>
            <h6 className='d-flex justify-content-end mt-1' ><i className="bi bi-prescription2"></i> {product.presentaciones}</h6>
          </div>
        </div>
      ))}
    </div>
  );
};







const Products = () => {
  // Sample data for 14 products
  const productsData = [
    { title: 'Células Madre', presentaciones: "1000uds 2000uds 3000uds", description: '1 Las células madre mesenquimales son capaces de auto renovarse. Tienen propiedades inmunomodulatorias, debido a que secretan citoquinas y receptores que son capaces de modificar el microambiente inmune del huésped.', imageUrl: '/images/product1.jpg' },
    { title: 'Implantes', presentaciones: "1000uds 2000uds 3000uds", description: '2 El implante liofilizado de placenta apoya a la homeostasis del organismo, es decir, a mantener el equilibrio natural del cuerpo. Como resultado, el proceso de envejecimiento se hace más lento y se mejora la producción de colágeno y elastina.', imageUrl: '/images/productsImages/product2.jpg' },
    { title: 'Fibroblastos', presentaciones: "1000uds 2000uds 3000uds", description: '3 Los fibroblastos son las principales células productoras de colágeno y elastina en nuestro cuerpo. Son esenciales en el rejuvenecimiento de la piel.', imageUrl: '/images/productsImages/product3.jpg' },
    { title: 'Exosomas', presentaciones: "1000uds 2000uds 3000uds", description: '4 los Exosomas son pequeñas vesículas, que provienen de las células, con un alto contenido en proteínas, lípidos, ARN mensajero, ARN mitocondrial, ADN y distintos factores de crecimiento.', imageUrl: '/images/product4.jpg' },
    { title: 'Factor de Transferencia', presentaciones: "1000uds 2000uds 3000uds", description: '5 El Factor de Transferencia es un producto que consta de moléculas mensajeras que llevan información al sistema inmunológico de un individuo (Inmunomodulador) para incrementar sus defensas y su función.', imageUrl: '/images/product5.jpg' },
    { title: 'NK', presentaciones: "1000uds 2000uds 3000uds", description: '6 Las células asesinas naturales (natural killer cells [NK]) son un tipo de linfocitos producidos en la médula ósea, cuya función efectora está mediada por la producción de citocinas y su actividad citotóxica.', imageUrl: '/images/product6.jpg' },
    { title: 'Factores de Crecimiento', presentaciones: "1000uds 2000uds 3000uds", description: '7 Los factores de crecimiento plasmático son proteínas que se encuentran en los tejidos y se encargan de la reparación de tejido dañado, en enfermedades como tendinopatías, lesiones meniscales o úlceras corneales y vasculares, o alopecia, entre otras', imageUrl: '/images/product7.jpg' },
    { title: 'Sueros', presentaciones: "1000uds 2000uds 3000uds", description: '13 Son diez tipos diferentes de sueros de regeneración acordes a la necesidad de cada paciente (Inmunológico, Osteo-regenerativo, hematopoyético, Regeneración hormonal, Dermo Artro Infeccioso, Anérgico, Energético entre otros)', imageUrl: '/images/product13.jpg' },
  ];

  return (
    <section className='products-container'>
      <h2><i className="bi bi-cookie"></i> Tratamientos</h2>
      <p>
        La medicina regenerativa ofrece tratamientos avanzados que aprovechan las propias capacidades
        curativas del cuerpo para acelerar la regeneración de tejidos, reducir el tiempo de
        recuperación y mejorar la calidad de vida de los pacientes.
      </p>

      <ProductAccordion products={productsData} />
    </section>
  );
};

export default Products;