import { useRef, useEffect } from 'react'
import { gsap, Circ } from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import Image from 'next/image'

function CardGallery({ img }) {
    gsap.registerPlugin( ScrollTrigger )
    const itemGallery = useRef()

    useEffect( () => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: itemGallery.current,
                start: 'top 40%',
            }
        })

        tl.to( itemGallery.current, {
            y: 0,
            autoAlpha: 1,
            duration: 0.5,
            ease: Circ.easeOut,
        } )
    } )

    return (
        <div className="transfrom translate-y-40 opacity-0" ref={itemGallery}>
            <Image src={img.photo.url} width={img.photo.dimensions.width} height={img.photo.dimensions.height} />
        </div>
    )
}

export default CardGallery