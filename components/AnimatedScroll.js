import { useEffect, useRef } from "react"
import Lottie from "lottie-web"
import animasi from '../public/animated-scroll.json'

function AnimatedScroll () {
    const lottieBox = useRef( null );

    useEffect( () => {
        Lottie.loadAnimation( {
            container: lottieBox.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: animasi,
        } )
    }, [] )

    return (
        <div className="mx-auto h-56" ref={lottieBox}></div>
    )
}

export default AnimatedScroll