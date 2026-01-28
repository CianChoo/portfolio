import { useGSAP } from '@gsap/react'
import { ScrollTrigger, SplitText } from 'gsap/all'
import gsap from 'gsap'
import React, { use, useLayoutEffect } from 'react'

const Hero = () => {

    useGSAP(() => {

        const timeline = gsap.timeline()

        timeline.fromTo('#hero .bar',
            {scaleX: 0, opacity: 0, transformOrigin: 'top left', ease: 'ease2.inOut', duration: 0.5},
            {scaleX: 1, opacity: 1, transformOrigin: 'top left', ease: 'power2.inOut', duration: 0.5, delay: 0.3}
        )

        .fromTo('#hero .bar',
            {scaleX: 1, transformOrigin: 'top left', ease: 'ease2.inOut', duration: 0.5, delay: 0.5},
            {scaleX: 0, transformOrigin: 'top right', ease: 'power2.inOut', duration: 0.5, delay: 0.3}
        )

        .fromTo('#hero .text',
            {scaleX: 0, opacity: 0, ease: 'ease2.inOut', duration: 0.5},
            {scaleX: 1, opacity: 1, ease: 'power2.inOut', duration: 0.5},
            '-=0.5'
        )
    }, [])

    return (
            <section id="hero">
                
                <div className="header">
                    <h1>
                        <div className="bar" />
                        <span className="text">CIAN CHOO</span>
                    </h1>
                </div>

                <div className="body">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda velit mollitia, animi odio magni quia vitae at earum blanditiis tempora nulla excepturi iure provident, minus rem ut. Adipisci, odit quaerat.</p>
                </div>
                
            </section>
    )
}

export default Hero