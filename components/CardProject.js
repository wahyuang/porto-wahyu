import { useRef, useEffect } from "react"
import { gsap, Circ, Power2 } from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import Image from "next/image"
import Link from "next/link"

function CardProject ( { number, title, thumbnail, postslug, reverse } ) {
    gsap.registerPlugin( ScrollTrigger )

    const ProjectThumbnail = thumbnail
    const cardWrapper = useRef()
    const cardImageBox = useRef()
    const cardImage = useRef()
    const cardTitle = useRef()
    const cardNumber = useRef()
    const cardBorder = useRef()

    useEffect( () => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: cardWrapper.current,
                start: 'top 45%',
                markers: false,
                ease: Circ.easeOut,
            }
        })

        tl.to( cardImageBox.current, {
            x: 0,
            duration: 1.2,
            ease: Power2.easeOut,
        }, 'cardImage' )
        .to( cardImage.current, {
            x: 0,
            scale: 1,
            duration: 1.2,
            ease: Power2.easeOut,
        }, 'cardImage' ) 
        .to( cardNumber.current, {
            y: 0,
            duration: 0.3,
        }, '-=0.4' )
        .to( cardBorder.current, {
            scale: 1,
            duration: 0.3,
        }, '-=0.4')
        .to( cardTitle.current, {
            y: 0,
            autoAlpha: 1,
            duration: 0.5,
        }, '-=0.2')
    }, [] )

    return (
        <div className="flex flex-wrap -mx-10" ref={cardWrapper}>
            <div className={`w-full tablet-landscape:w-8/12 px-10 ${reverse ? 'tablet-landscape:order-2' : ''}`}>
                <div className="relative mb-32 tablet-landscape:mb-0 block text-0">
                    <div className="overflow-hidden">
                        <div className="transform -translate-x-full overflow-hidden" ref={cardImageBox}>
                            <Link href={`/projects/${postslug}`}>
                                <a>
                                    <div className="relative transform scale-110 translate-x-full" ref={cardImage}>
                                        <Image src={ProjectThumbnail} width={820} height={500} objectFit={`cover`} className="relative block" />
                                    </div>
                                </a>
                            </Link>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className={`w-full tablet-landscape:w-4/12 px-10 flex flex-col justify-end ${reverse ? 'tablet-landscape:order-1' : ''}`}>
                <div className="tablet-landscape:pl-32 tablet-landscape:pb-80">
                    <div className="text-primary relative flex flex-wrap items-center">
                        <div className="pr-20 overflow-hidden">
                            <div className="transform translate-y-full" ref={cardNumber}>{number}</div>
                        </div>
                        <div className="h-px bg-gray flex-auto w-auto transform origin-left scale-0" ref={cardBorder}></div>
                    </div>
                    <div className="font-black text-primary text-6xl tablet-landscape:text-heading-md uppercase transform translate-y-20 opacity-0" ref={cardTitle}>
                        <Link href={`/projects/${postslug}`}>{title}</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardProject