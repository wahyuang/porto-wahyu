import { useRef, useEffect } from 'react'
import { gsap, Power2, Circ } from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

function SectionDescription({children}) {
    gsap.registerPlugin( ScrollTrigger )

    const refContent = useRef()

    useEffect( () => {
        const tl = gsap.timeline( {
            scrollTrigger: {
                trigger: refContent.current,
                start: 'top 55%',
                markers: false,
            }
        } )

        tl.to( refContent.current, {
            y: 0,
            autoAlpha: 1,
            duration: 0.7,
            ease: Circ.easeOut
        } ) 
    } )

    return(
        <div className="mb-80 opacity-0 transfrom translate-y-20" ref={refContent}>
            {children}
        </div>
    )
}

export default SectionDescription