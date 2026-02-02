import { useGSAP } from '@gsap/react'
import { ScrollTrigger, SplitText } from 'gsap/all'
import gsap from 'gsap'
import React, { use, useLayoutEffect } from 'react'

const Hero = () => {

    useGSAP(() => {

        const timeline = gsap.timeline()

        const splitText = new SplitText('#hero .text', {type: 'chars, words, lines'})

        timeline
        // .fromTo('#hero .bar',
        //     {scaleX: 0, opacity: 0, transformOrigin: 'top left', ease: 'ease2.inOut', duration: 0.5},
        //     {scaleX: 1, opacity: 1, transformOrigin: 'top left', ease: 'power2.inOut', duration: 0.5, delay: 0.3}
        // )

        // .fromTo('#hero .bar',
        //     {scaleX: 1, transformOrigin: 'top left', ease: 'ease2.inOut', duration: 0.5, delay: 0.5},
        //     {scaleX: 0, transformOrigin: 'top right', ease: 'power2.inOut', duration: 0.5, delay: 0.3}
        // )

        // .fromTo('#hero .text',
        //     {scaleX: 0, opacity: 0, ease: 'ease2.inOut', duration: 0.5},
        //     {scaleX: 1, opacity: 1, ease: 'power2.inOut', duration: 0.5},
        //     '-=0.5'
        // )

        .fromTo(splitText.words,
            {opacity: 1, rotationX: 90, yPercent: 100, ease: 'ease2.inOut', duration: 1},
            {opacity: 1, rotationX: 0, yPercent: 0, ease: 'power2.inOut', duration: 0.5, stagger: 0.05}
        )

        .fromTo('#hero .body p',
            {opacity: 0, yPercent: 20, ease: 'ease2.inOut', duration: 0.5},
            {opacity: 1, yPercent: 0, ease: 'power2.inOut', duration: 0.5},
            '-=0.1'
        )

        return () => {
            splitText.revert()
            timeline.kill()
        }   
    }, [])

    return (
            <section id="hero">
                {/* <div className="foreground-overlay"/>  */}


                <div className="header">
                    <h1>
                        {/* <div className="bar" /> */}
                        <span className="text">CIAN CHOO//</span>
                    </h1>
                    <h1>
                        <span className="text">DESIGNER//</span>
                    </h1>
                    <h1>
                        <span className="text">DEVELOPER//</span>
                    </h1>
                </div>

                <div className="body">
                    {/* <p>Move at your own pace. </p> */}
                </div>
                
            </section>
    )
}

export default Hero