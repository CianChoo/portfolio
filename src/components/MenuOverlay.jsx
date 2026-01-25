import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"

import { SplitText } from "gsap/all"

import { useRef } from "react"
import { navLinks } from "../../constants"
import AnimatedLink from "./AnimatedLink"

const MenuOverlay = ({ onClose }) => {

    return (
        <div id="menu-overlay">
            <AnimatedLink />
            <p onClick={onClose} className="cursor-pointer">CLOSE</p>
        </div>
    )
}

export default MenuOverlay