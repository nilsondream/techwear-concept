import React, { useEffect, useRef } from 'react'
import gsap, { Power4 } from 'gsap';

const Navbar = () => {

    let navbar = useRef(null);

    const timeline_home = gsap.timeline();

    useEffect(() => {
        timeline_home.from(navbar, { opacity: 0, duration: .5, delay: 2, ease: Power4.easeInOut});
    });

    return (
        <nav ref={el => navbar = el } className='navbar'>
            <span>
                Streetwear Contemporary<br/>
                Meta Reality Labs<br/>
                Seattle
            </span>
            <span><a href="mailto:rexxree@gmail.com">rexxree@gmail.com</a></span>
            <span>• 2022</span>
        </nav>
    )
}

export default Navbar