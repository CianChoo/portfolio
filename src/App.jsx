import { useState, useEffect } from 'react'
import { ScrollTrigger, SplitText } from 'gsap/all'
import gsap from 'gsap'

import { ReactLenis, useLenis } from 'lenis/react'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TempSection from './components/TempSection'

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {

  useLenis((lenis) => {
    lenis.on('scroll', ScrollTrigger.update);
  });

  return (    
    <ReactLenis root options={{ smoothWheel: true, lerp: 0.1, duration: 1.2 }}>
      <main>
        <Navbar />
        <Hero />
        <TempSection />
      </main>
    </ReactLenis>
  )
}

export default App
