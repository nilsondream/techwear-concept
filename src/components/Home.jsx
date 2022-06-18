import React, { useEffect, useRef } from 'react'
import gsap, { Expo } from 'gsap'
import img1 from '../assets/img/techwear1.jpg'
import img2 from '../assets/img/techwear2.jpg'
import img3 from '../assets/img/techwear3.jpg'
import img4 from '../assets/img/techwear4.jpg'
import img5 from '../assets/img/techwear5.jpg'
import img6 from '../assets/img/techwear6.jpg'
import img7 from '../assets/img/techwear7.jpg'
import img8 from '../assets/img/techwear8.jpg'
import img9 from '../assets/img/techwear9.jpg'
import img10 from '../assets/img/techwear10.jpg'
import img11 from '../assets/img/techwear11.jpg'
import img12 from '../assets/img/techwear12.jpg'
import img13 from '../assets/img/techwear13.jpg'
import img14 from '../assets/img/techwear14.jpg'
import img15 from '../assets/img/techwear15.jpg'
import img16 from '../assets/img/techwear16.jpg'
import img17 from '../assets/img/techwear17.jpg'
import img18 from '../assets/img/techwear18.jpg'
import img19 from '../assets/img/techwear19.jpg'
import img20 from '../assets/img/techwear20.jpg'
import img21 from '../assets/img/techwear21.jpg'
import img22 from '../assets/img/techwear22.jpg'
import img23 from '../assets/img/techwear23.jpg'
import img24 from '../assets/img/techwear24.jpg'

const Home = () => {

    let image = useRef(null);
    let title = useRef(null);
    let subtitle = useRef(null);
    let image1 = useRef(null);
    let image2 = useRef(null);
    let image3 = useRef(null);

    const timeline_home = gsap.timeline();

    useEffect(() => {
        timeline_home.from(image, { width: 0, duration: 1.5, ease: Expo.easeInOut });
        timeline_home.from([title, subtitle], { y: 150, duration: 1, ease: Expo.easeInOut, stagger: { amount: .2 } });
        timeline_home.from([image1, image2, image3], { opacity: 0, duration: .5, ease: Expo.easeInOut, stagger: { amount: .2 } });
    });

    return (
        <section className='home'>
            <div className='hero-home'>
                <div className='hero-title-home'>
                    <div className='title'><h1 ref={el => title = el}>T-Wear Concept</h1></div>
                    <div className='subtitle'><p ref={el => subtitle = el}>Streetwear Contemporary</p></div>
                </div>
                <img ref={el => image = el} src={img1} alt='techwear' />
            </div>

            <div className='grid-home'>
                <img ref={el => image1 = el} src={img2} alt='techwear' />
                <img ref={el => image2= el} src={img3} alt='techwear' />
            </div>

            <div className="grid-home-content">
                <div className='img-content'><img ref={el => image3 = el} src={img4} alt="techwear" /></div>
                <div className='text-content'>
                    <p>
                        Queda claro que la industria de la moda crece día a día, ahora no solo para vestir bien,
                        sino también para hacer tu vida más sencilla, esa es la primicia que se le puede dar al
                        llamado techwear, el cual busca la inclusión de la tecnología en prendas para tener ciertos
                        beneficios al momento de vestir, mirando más lejos que solo tu outfit.
                    </p>
                </div>
            </div>

            <div className='grid-home-two'>
                <img src={img5} alt='techwear' />
                <img src={img6} alt='techwear' />
            </div>

            <div className="grid-home-content-two">
                <div className='text-content'>
                    <p>
                        La influencia del techwear está creciendo bastante en los últimos años, brindando un atractivo 
                        futurista con comodidad y modernismo para vestimentas de la vida diaria, resaltando tejidos 
                        especiales con propiedad y construcciones que aportan beneficios como la transpiración, comodidad 
                        destacada y resistencia al agua o cualquier tipo de clima que se presente.
                    </p>
                </div>
                <div className='img-content'><img src={img7} alt="techwear" /></div>
            </div>

            <div className='grid-home'>
                <img src={img8} alt='techwear' />
                <img src={img9} alt='techwear' />
            </div>

            <div className="grid-home-content">
                <div className='img-content'><img src={img10} alt="techwear" /></div>
                <div className='text-content'>
                    <p>
                        Este nuevo movimiento busca la predominancia de la estética y el utilitarismo, con un perfecto balance 
                        entre estilo, funcionabilidad y carácter. Otro beneficio de este tipo de ropa es la producción, con 
                        buenos acabados y una larga durabilidad, que es proporcional con los elevados precios de dichas piezas, 
                        pero haciendo muy válida la inversión realizada.
                    </p>
                </div>
            </div>

            <div className='grid-home-two'>
                <img src={img11} alt='techwear' />
                <img src={img12} alt='techwear' />
            </div>

            <div className="grid-home-content-two">
                <div className='text-content'>
                    <p>
                        La mayoría de pantalones y camisetas se cortan según diseños estándar, pero gracias a la tecnología, 
                        estas prendas desafían lo convencional tomando en cuenta el movimiento natural del ser humano. El llamado 
                        “diseño anatómico” cuenta todos los factores que envuelven las acciones del cuerpo, permitiendo a los usuarios 
                        moverse libremente sin que la tela principal se deshaga o se alargue de más.
                    </p>
                </div>
                <div className='img-content'><img src={img13} alt="techwear" /></div>
            </div>

            <div className='grid-home'>
                <img src={img14} alt='techwear' />
                <img src={img15} alt='techwear' />
            </div>

            <div className="grid-home-content">
                <div className='img-content'><img src={img16} alt="techwear" /></div>
                <div className='text-content'>
                    <p>
                        La prenda más común en el techwear es la chaqueta, mejor conocida como ‘jacket’, que se reparten comúnmente en dos 
                        tipos: las ‘softshells’ y las ‘hardshells’.
                        <br/>
                        <br/>
                        Las hardshells brindan mayor protección al clima, con impermeabilidad, transpirabilidad y a prueba de vientos, 
                        proporcionando capas exteriores versátiles para fuertes lluvias y nevadas. Mientras las softshells repelen a 
                        las precipitaciones pequeñas, como llovizna o nevada, enfatizando más la comodidad y el movimiento.
                    </p>
                </div>
            </div>

            <div className='grid-home-two'>
                <img src={img17} alt='techwear' />
                <img src={img18} alt='techwear' />
            </div>

            <div className="grid-home-content-two">
                <div className='text-content'>
                    <p>
                        Otro punto clave son los pantalones, incluyendo funciones como la absorción de la humedad al usar 
                        cualquier tipo de vehículo, sumándole la repelencia al agua, el estiramiento y los bolsillos extras.
                        En cuanto a sneakers, Nike y adidas siguen siendo los principales exponentes de la innovación, experimentando 
                        con diferentes tipos de materiales tanto para zapatillas como para calcetines, con la finalidad de crear pares 
                        que se puedan utilizar para absolutamente todas las actividades posibles.
                    </p>
                </div>
                <div className='img-content'><img src={img19} alt="techwear" /></div>
            </div>

            <div className='grid-home'>
                <img src={img20} alt='techwear' />
                <img src={img21} alt='techwear' />
            </div>

            <div className="grid-home-content">
                <div className='img-content'><img src={img22} alt="techwear" /></div>
                <div className='text-content'>
                    <p>
                        Entre las marcas que más están incursionando en este terreno tenemos a Acronymr, Stone Island, Nike ACG, Adidas, Y-3, 
                        Guerrila Group, con algunas otras promoviendo la accesibilidad económica como Cloudburst, Riot Division, 0608, 4 
                        Dimension, entre otras.
                        <br/>
                        <br/>
                        La industria de la moda está evolucionando rápidamente, trayéndonos esta rama que se complementa a la perfección con 
                        el streetwear para la construcción de cualquier outfit. Estilos minimalistas, mono colores, elegancia, comodidad y 
                        aerodinamicidad.
                    </p>
                </div>
            </div>

            <div className='grid-home-two'>
                <img src={img23} alt='techwear' />
                <img src={img24} alt='techwear' />
            </div>

        </section>
    )
}

export default Home