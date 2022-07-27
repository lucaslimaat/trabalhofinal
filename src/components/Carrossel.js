import Carousel from 'react-bootstrap/Carousel';
import React from 'react';

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="First slide"
          height="550"
        />
        <Carousel.Caption>
          <h3>As Melhores Roupas</h3>
          <p>Roupas de qualidade de várias marcas você encontra aqui!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/1336873/pexels-photo-1336873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Second slide"
          height="550"
        />

        <Carousel.Caption>
          <h3>Os Melhores Preços</h3>
          <p>Só aqui você encontra os melhores preços do mercado!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/2129970/pexels-photo-2129970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Third slide"
          height="550"
        />

        <Carousel.Caption>
          <h3>Vários Estilos</h3>
          <p>Só na Outer você entontra roupas que se adequam ao seu dia a dia!</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;