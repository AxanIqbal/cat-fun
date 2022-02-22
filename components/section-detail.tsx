import Section from "./section";
import {Container, Grid, styled, Typography as MuiTypography} from "@mui/material";
import Image from "next/image";
import SectionImage from "../assets/IMG_0861_PNG.webp";
import React from "react";

const Typography = styled(MuiTypography)`
  color: white;
  padding-bottom: 0.5em;
`
function SectionDetail() {
    return (
        <Section>
            <Grid container>
                <Grid item xs={12} sm={6}>
                    <Container>
                        <Typography variant={"h3"} >Bringing together two mortal enemies for the greater good</Typography>
                        <Typography variant={"subtitle1"}>
                            Two kingdoms, one purpose: To see the evolution of currency evolve from government controlled monopolies and give back the power to the people.
                            <br/>
                            <br/>
                            One problem...
                            <br/>
                            <br/>
                            The only way that can happen is if the community comes together for the greater good of all mankind. That, at its core, is the mission of ShibaDoge - to ultimately merge the communities behind Shiba Inu and Dogecoin.
                            <br/>
                            <br/>
                            The combined market cap of both currencies currently stands above $40 billion USD and represents more than 5 million token holders.
                            <br/>
                            <br/>
                            Our short term goal is to merge 1% of that audience, creating value for 50,000+ holders and $400+ million in value. By focusing on the initial one percent we believe that we can bring more people together as the community embraces $SHIBDOGE.</Typography>
                    </Container>
                </Grid>
                <Grid item xs={12} sm={6} sx={{margin: 'auto'}}>
                    <Container>
                        <Image alt={'section image'} src={SectionImage} width={'500em'} height={"500em"}
                               layout={'fixed'}/>
                    </Container>
                </Grid>
            </Grid>
        </Section>
    );
}

export default SectionDetail;
