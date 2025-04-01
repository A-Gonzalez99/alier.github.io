import Header from '../componentes/header';
import './inicio.css'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Importa los estilos del carrusel

export default function Inicio() {
    return (
        <>
            <Header />
            <div className='hero-banner'>
                <Carousel className='carousel-style'
                    showArrows={false}
                    showThumbs={false}
                    infiniteLoop={true}
                    autoPlay={true}
                    interval={5000} >
                    <div>
                        <img src="https://cdna.artstation.com/p/assets/images/images/086/381/340/large/aleksei-konzelko-green.jpg" alt="Imagen 1" />
                    </div>
                    <div>
                        <img src="https://cdna.artstation.com/p/assets/images/images/086/544/064/large/caio-vinicius-002.jpg" alt="Imagen 2" />
                    </div>
                    <div>
                        <img src="https://cdna.artstation.com/p/assets/images/images/086/523/900/large/sergio-khazov-serghaz-front.jpg" alt="Imagen 3" />
                    </div>
                </Carousel>
            </div>
        </>
    )
}