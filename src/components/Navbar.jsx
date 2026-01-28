import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { navLinks } from "../../constants"
import { use, useState } from "react"

import MenuOverlay from "./MenuOverlay"

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useGSAP(() => {
    gsap.set("#menu-overlay", { xPercent: 100 });

    if (isMenuOpen) {

      gsap.fromTo("#menu-overlay", 
        { xPercent: 100 }, 
        { xPercent: 0, duration: 0.5, ease: "power2.inOut" }
      );
    
      gsap.fromTo("#menu-overlay li", 
        { opacity: 0, xPercent: 50, rotateX: -90 }, 
        { opacity: 1, xPercent: 0, rotateX: 0, duration: 0.3, stagger: 0.1, delay: 0.2}
      );
    } else {
      gsap.fromTo("#menu-overlay li",
        { opacity: 1, xPercent: 100 },
        { opacity: 0, xPercent: 0, duration: 0.2, stagger: 0.1 }
      );

      gsap.fromTo("#menu-overlay > p",
        { opacity: 0, xPercent: 100 },
        { opacity: 1, xPercent: 0, duration: 0.2 }
      );
    }
  }, [isMenuOpen])


  const handleClose = () => {
    gsap.to("#menu-overlay", 
      { xPercent: 100, duration: 0.5, ease: "power1.inOut", onComplete: () => setIsMenuOpen(false) }
    );
  }

  return (
    <>
      <nav>
        <div>
          <p onClick={() => setIsMenuOpen(!isMenuOpen)}>Menu</p>
        </div>
      </nav>

      {isMenuOpen && <MenuOverlay onClose={handleClose} />}

    </>
  )
}

export default Navbar