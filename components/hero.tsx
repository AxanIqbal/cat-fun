import React from 'react';
import Image from 'next/image'
import HeroImage from '../assets/hero.jpeg'
import styled from "@emotion/styled";

const HeroImageStyled = styled(Image)`
  background-size: cover;
  
`

const Section = styled.section`
    //margin-top: 10px;
  background-color: #0070f3;
`

function Hero() {
    return (
        <Section>
            <HeroImageStyled alt={"Hero Image"} src={HeroImage} />
        </Section>
    );
}

export default Hero;
