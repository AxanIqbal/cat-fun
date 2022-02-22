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
  align-items: center;
  margin: auto;
  display: flex;
`

function SectionButtons() {
    return (
        <Section>
            <Grid container spacing={1}>
                <Grid item sm={12} md={6}>
                    <Container>
                        <Stack spacing={1}>
                            <Typography>Missed Shiba AND Doge?!?!</Typography>
                            <Typography variant={"h3"} sx={{fontWeight: 'bold'}}>$SHIBDOGE</Typography>
                            <Typography>The first community driven token created by Shiba & Dogecoin whales coming
                                together for the greater good of both communities</Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <Button variant={'outlined'}>Dextools Link</Button>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Button variant={'outlined'}>Medium Article</Button>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Button variant={'outlined'}>Uniswap Link</Button>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Button variant={'outlined'}>Liquidity Lock</Button>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Button variant={'outlined'}>Telegram Chat</Button>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Button variant={'outlined'}>CERTIK Audit</Button>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Button variant={'outlined'}>Twitter</Button>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Button variant={'outlined'}>Buy on Hotbit</Button>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Button variant={'outlined'}>Whitepaper</Button>
                                </Grid>
                            </Grid>
                        </Stack>
                    </Container>
                </Grid>
                <Grid item sm={12} md={6} sx={{margin: 'auto'}}>
                    <Container>
                        <Image alt={'section image'} src={SectionImage} width={'300em'} height={"300em"}
                               layout={'fixed'}/>
                    </Container>
                </Grid>
            </Grid>
        </Section>
    );
}

export default SectionButtons;
