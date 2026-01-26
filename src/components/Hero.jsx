import { useGSAP } from '@gsap/react'
import { ScrollTrigger, SplitText } from 'gsap/all'
import gsap from 'gsap'
import React, { use } from 'react'

const Hero = () => {

    useGSAP(() => {
        const splitText = new SplitText('.body h1', { type: 'words,chars' });
        
        gsap.from(splitText.chars, {
            duration: 1,
            opacity: 0,
            y: 50,
            stagger: 0.05,
            ease: 'power1.out',
            scrollTrigger: {
                trigger: '#hero',
                start: 'top 80%',
            },
        });
    }, [])



    return (
            <section id="hero">
                
                <div className="header">
                    <h1 >CIAN CHOO</h1>
                </div>

                <div className="body">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda velit mollitia, animi odio magni quia vitae at earum blanditiis tempora nulla excepturi iure provident, minus rem ut. Adipisci, odit quaerat.</p>
                </div>
                
            </section>
    )
}

export default Hero