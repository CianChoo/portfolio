    import { useGSAP } from "@gsap/react"
    import { SplitText } from "gsap/all"
    import gsap from "gsap"
    import { useRef } from "react"
    import { navLinks } from "../../constants"

    const AnimatedLink = () => {
    const linksRef = useRef([]);
    const splitTextRefs = useRef([]);

    useGSAP(() => {
        // Create split text for ALL <a> tags within each link
        linksRef.current.forEach((linkContainer, index) => {
        if (!linkContainer) return;
        
        // Select both <a> tags and create SplitText for each
        const aTags = linkContainer.querySelectorAll('.my-tag');
        splitTextRefs.current[index] = Array.from(aTags).map(tag => 
            new SplitText(tag, { type: "chars" })
        );
        
        // Set initial position for duplicate (second <a> tag)
        gsap.set(splitTextRefs.current[index][0].chars, { yPercent: 0 });
        gsap.set(splitTextRefs.current[index][1].chars, { yPercent: 100 });
        });

        const hoverIn = (index) => {
        const [original, duplicate] = splitTextRefs.current[index];
        if (!original || !duplicate) return;

        const timeline = gsap.timeline();
        
        // Move both at the same time
        timeline
            .to(original.chars, {
            yPercent: -100,
            duration: 0.4,
            stagger: 0.03,
            ease: "power2.in",
            }, 0)
            .to(duplicate.chars, {
            yPercent: 0,
            duration: 0.4,
            stagger: 0.03,
            ease: "power2.in",
            }, 0);
        };

        const hoverOut = (index) => {
        const [original, duplicate] = splitTextRefs.current[index];
        if (!original || !duplicate) return;

        const timeline = gsap.timeline();
        
        timeline
            .to(original.chars, {
            yPercent: 0,
            duration: 0.4,
            stagger: 0.03,
            ease: "power2.out",
            }, 0)
            .to(duplicate.chars, {
            yPercent: 100,
            duration: 0.4,
            stagger: 0.03,
            ease: "power2.out",
            }, 0);
        };

        // Attach hover events
        linksRef.current.forEach((link, index) => {
        if (!link) return;
        link.addEventListener("mouseenter", () => hoverIn(index));
        link.addEventListener("mouseleave", () => hoverOut(index));
        });
    }, []);

    return (
        <div id="animated-link">  
            {navLinks.map((link, index) => (
                <li 
                key={link.id}
                ref={el => linksRef.current[index] = el}
                >
                <div className="liBox">
                    <a 
                        href={`#${link.id}`}
                        className="my-tag"
                    >
                        {link.title}
                    </a>
                    <a 
                        href={`#${link.id}`}
                        className="my-tag duplicate"
                    >
                        {link.title}
                    </a>
                </div>
                </li>
            ))}
        </div>
    )
    }

    export default AnimatedLink