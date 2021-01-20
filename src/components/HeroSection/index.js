import React, { useState } from 'react'
import Video from '../../videos/video.mp4'
// import { Button } from '../ButtonElement'
import { HeroContainer, HeroBtn, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements'

export const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Full Stack Web Developer</HeroH1>
                <HeroP>Welcome to my website.</HeroP>
                <HeroBtnWrapper>
                    <HeroBtn to="/contact" onMouseEnter={onHover} onMouseLeave={onHover}>
                        Contact Me! {hover ? <ArrowForward /> : <ArrowRight />}
                    </HeroBtn>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}
