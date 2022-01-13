import { useRef, useEffect } from "react"
import { gsap, Power2, Circ } from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"

function SectionTitle ({ title, subtitle, theme }){
    gsap.registerPlugin( ScrollTrigger )

    const titleWrapper = useRef()
    const refTitle = useRef()
    const refSubtitle = useRef()
    
    useEffect( () => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: titleWrapper.current,
                markers: false,
                start: 'top 60%',
            }
        })

        tl.to( refTitle.current, {
            y: 0,
            autoAlpha: 1,
            duration: 0.5,
            ease: Circ.easeOut,
        } )
        .to( refSubtitle.current, {
            y: 0,
            autoAlpha: 1,
            duration: 0.3,
            ease: Circ.easeOut,
        } )
    }, [] )

    return (
        <div className={`text-primary mb-40 ${theme==="white" ? 'text-white' : ''}`} ref={titleWrapper}>
            <div className="text-4xl tablet-landscape:text-heading-sm overflow-hidden">
                <div className="transform translate-y-full opacity-0" ref={refSubtitle}>{subtitle}</div>
            </div>
            <div className="font-black text-heading-xl tablet-landscape:text-heading-3xl leading-none overflow-hidden">
                <div className="transform translate-y-full opacity-0" ref={refTitle}>{title}</div>
            </div>
        </div>
    )
}

export default SectionTitle