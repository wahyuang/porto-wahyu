import { useRef, useEffect } from "react"
import { gsap, Circ } from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import SectionDescription from "./SectionDescription"
import SectionTitle from "./SectionTitle"
import SkillText from "./SkillText"

const shuffleArray = ( array ) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        const temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }

    return array
}

function SectionSkills () {
    gsap.registerPlugin( ScrollTrigger )

    const itemSkill = useRef([])
    const skillWrapper = useRef()

    useEffect( () => {

        const itemSkillRand = shuffleArray( itemSkill.current )

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: skillWrapper.current,
                start: 'top 60%',
                markers: false,
            }
        })

        tl.to( itemSkillRand, {
            scale: 1,
            autoAlpha: 1,
            duration: 0.3,
            ease: Circ.easeOut,
            stagger: 0.07,
        } )
    }, [] )


    return (
        <div className="container py-80">
            <SectionTitle title="Skills & Tools" subtitle="Development Toys" />
            
            <SectionDescription>
                <p>The skills, tools and technologies I use to bring your products to life.<br />
                Improving my skills, currently I am learning <strong>React</strong> and <strong>Next JS</strong>. Love to dive to something new  :)</p>
            </SectionDescription>
            
            <div className="mt-40" ref={skillWrapper}>
                <div className="flex flex-wrap -mx-10 tablet-landscape:-mx-20">
                    <div className="px-10 tablet-landscape:px-20">
                        <div className="transform scale-75 opacity-0" ref={(el) => {itemSkill.current.push(el)}}>
                            <SkillText text="PHP" />
                        </div>
                    </div>
                    <div className="px-10 tablet-landscape:px-20">
                        <div className="transform scale-75 opacity-0" ref={(el) => {itemSkill.current.push(el)}}>
                            <SkillText text="HTML" />
                        </div>
                    </div>
                    <div className="px-10 tablet-landscape:px-20">
                        <div className="transform scale-75 opacity-0" ref={(el) => {itemSkill.current.push(el)}}>
                            <SkillText text="JAVASCRIPT" />
                        </div>
                    </div>
                    <div className="w-full"></div>
                    <div className="px-10 tablet-landscape:px-20">
                        <div className="transform scale-75 opacity-0" ref={(el) => {itemSkill.current.push(el)}}>
                            <SkillText text="CSS3" />
                        </div>
                    </div>
                    <div className="px-10 tablet-landscape:px-20">
                        <div className="transform scale-75 opacity-0" ref={(el) => {itemSkill.current.push(el)}}>
                            <SkillText text="SASS" />
                        </div>
                    </div>
                    <div className="px-10 tablet-landscape:px-20">
                        <div className="transform scale-75 opacity-0" ref={(el) => {itemSkill.current.push(el)}}>
                            <SkillText text="JQUERY" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-10 tablet-landscape:-mx-20 mt-40">
                    <div className="px-10 tablet-landscape:px-20">
                        <div className="transform scale-75 opacity-0" ref={(el) => {itemSkill.current.push(el)}}>
                            <SkillText text="BOOTSTRAP" />
                        </div>
                    </div>
                    <div className="px-10 tablet-landscape:px-20">
                        <div className="transform scale-75 opacity-0" ref={(el) => {itemSkill.current.push(el)}}>
                            <SkillText text="TAILWIND" />
                        </div>
                    </div>
                    <div className="px-10 tablet-landscape:px-20">
                        <div className="transform scale-75 opacity-0" ref={(el) => {itemSkill.current.push(el)}}>
                            <SkillText text="GSAP" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-10 tablet-landscape:-mx-20 mt-40">
                    <div className="px-10 tablet-landscape:px-20">
                        <div className="transform scale-75 opacity-0" ref={(el) => {itemSkill.current.push(el)}}>
                            <SkillText text="WORDPRESS" />
                        </div>
                    </div>
                    <div className="px-10 tablet-landscape:px-20">
                        <div className="transform scale-75 opacity-0" ref={(el) => {itemSkill.current.push(el)}}>
                            <SkillText text="SHOPIFY" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-10 tablet-landscape:-mx-20 mt-40">
                    <div className="px-10 tablet-landscape:px-20">
                        <div className="transform scale-75 opacity-0" ref={(el) => {itemSkill.current.push(el)}}>
                            <SkillText text="NPM" />
                        </div>
                    </div>
                    <div className="px-10 tablet-landscape:px-20">
                        <div className="transform scale-75 opacity-0" ref={(el) => {itemSkill.current.push(el)}}>
                            <SkillText text="GIT" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionSkills