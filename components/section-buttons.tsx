import React from 'react';
import {Container as MuiContainer, Grid, Stack, styled, Typography as MuiTypography} from "@mui/material";
import Button from "./button";
import Image from "next/image";
import SectionImage from "../assets/IMG_0861_PNG.webp";
import Section from "./section";

const Typography = styled(MuiTypography)`
    color: white;
`

const Container = styled(MuiContainer)`
  justify-content: center;
  display: flex;
`

function SectionButtons() {
    return (
        <Section>
            <Stack direction={"row"} spacing={1}>
                <Container>
                    <Stack spacing={1}>
                        <Typography>Missed Shiba AND Doge?!?!</Typography>
                        <Typography variant={"h3"} sx={{fontWeight: 'bold'}}>$SHIBDOGE</Typography>
                        <Typography>The first community driven token created by Shiba & Dogecoin whales coming together for the greater good of both communities</Typography>
                        <Grid container spacing={2}>
                            <Grid item sm={6} xs={12}>
                                <Button>asd</Button>
                            </Grid>
                            <Grid item sm={6} xs={12}>
                                <Button>asd</Button>
                            </Grid>
                            <Grid item sm={6} xs={12}>
                                <Button>asd</Button>
                            </Grid>
                            <Grid item sm={6} xs={12}>
                                <Button>asd</Button>
                            </Grid>
                            <Grid item sm={6} xs={12}>
                                <Button>asd</Button>
                            </Grid>
                            <Grid item sm={6} xs={12}>
                                <Button>asd</Button>
                            </Grid>
                            <Grid item sm={6} xs={12}>
                                <Button>asd</Button>
                            </Grid>
                        </Grid>
                    </Stack>
                </Container>
                <Container>
                    <Image alt={'section image'} src={SectionImage}/>
                </Container>
            </Stack>
        </Section>
    );
}

export default SectionButtons;
