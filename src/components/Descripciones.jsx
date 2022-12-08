import React from 'react';

function Descripciones() {
  return (
    <div className='contenedor_descripciones'>
      <img className='imagen_descripciones' src='./img/ironman01.jpg' alt='imagen de Iron Man'/>
      <div className='contenedor-texto-descripcion'>
        <h4 className='nombre-descripciones'>Iron Man</h4>
        <h6 className='ocupacion-descripciones'>Magnate / Cientifico / Ingeniero</h6>
        <p className='texto-descripciones'>Iron Man es un superhéroe que aparece en los cómics estadounidenses publicados por Marvel Comics. El personaje fue cocreado por el escritor y editor Stan Lee y el guionista Larry Lieber. Los artistas Don Heck y Jack Kirby fueron los encargados de su diseño.</p>
      </div>
    </div>
  );
}

export default Descripciones;