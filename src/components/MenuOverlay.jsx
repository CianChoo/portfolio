import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"

import { SplitText } from "gsap/all"

import { useRef } from "react"
import { navLinks } from "../../constants"

const MenuOverlay = ({ onClose }) => {

    const linksRef = useRef([]);
    const splitTextRef = useRef([]);

    const duplicateRef = useRef([]);
    const splitDuplicateRef = useRef([]);

    useGSAP(() => {

        // Create split text
        linksRef.current.forEach((link, index) => {
            if (!link) return;
            splitTextRef.current[index] = new SplitText(link, { type: "chars" });
        });

        // Create split text for duplicate links
        duplicateRef.current.forEach((link, index) => {
            if (!link) return;
            splitDuplicateRef.current[index] = new SplitText(link, { type: "chars" });
        });

        const hoverIn = (index) => {
            const splitText = splitTextRef.current[index];
            const splitDuplicate = splitDuplicateRef.current[index];

            if (!splitText || !splitDuplicate) return;

            const timeline = gsap.timeline();

            timeline.to(splitText.chars, {
                y: 0,
                opacity: 1,
                duration: 0.1,
                stagger: 0.03,
                ease: "power1.out"
            }, 0);

            timeline.to(splitDuplicate.chars, {
                y: 50,
                opacity: 1,
                duration: 0.1,
                stagger: 0.03,
                ease: "power1.out",
            }, 0);

        }

        const hoverOut = (index) => {

            const splitText = splitTextRef.current[index];
            const splitDuplicate = splitDuplicateRef.current[index];

            if (!splitText || !splitDuplicate) return;

            gsap.to(splitText.chars, {
                y: 0,
                opacity: 1,
                duration: 0.1,
                stagger: 0.03,
                ease: "power1.out"
            });

            gsap.to(splitDuplicate.chars, {
                y: 0,
                opacity: 0,
                duration: 0.1,
                stagger: 0.03,
                ease: "power1.out",
            });
        }

        const cleanupFunctions = [];

        linksRef.current.forEach((link, index) => {
            if (!link) return;

            const enterHandler = () => hoverIn(index);
            const leaveHandler = () => hoverOut(index);

            link.addEventListener("mouseenter", enterHandler);
            link.addEventListener("mouseleave", leaveHandler);

            cleanupFunctions.push(() => {
                link.removeEventListener("mouseenter", enterHandler);
                link.removeEventListener("mouseleave", leaveHandler);
            });
        });

        return () => {
            cleanupFunctions.forEach((cleanup) => cleanup());
            splitTextRef.current.forEach((splitText) => {
                if (splitText) splitText.revert();
            });
        };   

    }, [])

    return (
        <div id="menu-overlay">
            <ul>
                {navLinks.map((link, index) => (
                    <li
                        key={link.id}
                        >
                        <a 
                            href={`#${link.id}`}
                            ref={el => linksRef.current[index] = el}
                            onClick={onClose}
                        >
                            {link.title}
                        </a>
                        <a 
                            href={`#${link.id}`}
                            onClick={onClose}
                            ref = {el => duplicateRef.current[index] = el}
                            style= {{
                                position: 'absolute',
                                top: '100%',
                                left: 0,
                                display: 'inline-block',
                                opacity: 0,
                            }}
                        >
                            {link.title}
                        </a>
                    </li>
                ))}
            </ul>

            <p onClick={onClose} className="cursor-pointer">CLOSE</p>
        </div>
    )
}

export default MenuOverlay