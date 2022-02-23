import React from 'react';
import Image from 'next/image'
import HeroImage from '../assets/hero.jpeg'
import styled from "@emotion/styled";
import Button from "./button";

const HeroImageStyled = styled(Image)`
  background-size: cover;
  
`

const Section = styled.section`
    //margin-top: 10px;
  background-color: #5363FF;
  position: relative;
  overflow: clip;
`

const MyButton = styled(Button)`
  position: absolute;
  bottom: 1%;
  right: -2%;
  z-index: 10;
  color: whitesmoke;
  font-size: 2rem;
  width: 50%;
  height: 2.5em;
  
  &:hover {
    background-color: #5363FF;
  }
`

function Hero() {
    return (
        <Section>
            <HeroImageStyled alt={"Hero Image"} src={HeroImage} />
            <MyButton backColor={"#5363FF"}>Join Now</MyButton>
        </Section>
    );
}

export default Hero;
