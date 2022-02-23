import Section from "./section";
import {Stack, styled, Typography as MuiTypography} from "@mui/material";
import Card from "./card";

const Typography = styled(MuiTypography)`
  color: whitesmoke;
`


function SectionCards() {
    return (
        <Section>
            <Stack sx={{width: '100%'}}>
                <Typography variant={"h2"} align={'center'}>Agenda for the coming months</Typography>
                <Typography align={'center'}>We have a targeted roadmap inspired by the trajectory and series of events
                    that both Shiba Inu and Dogecoin have followed.<br/>Their combined marketcap today sits above $40
                    billion USD</Typography>
                <Stack direction={"row"} justifyContent="space-evenly" py={5} spacing={1} flexWrap={"wrap"} >
                    <Card
                        title={<Typography>JOKE<br/>(Development)</Typography>}
                        select={false}
                        features={["DEVELOPMENT OF PROJECT","WHITEPAPER LAUNCH",
                            "WEBSITE LAUNCH",
                            "PRIVATE SALE (50 BNB)",
                            "DEPLOY SMART CONTRACT ON BSC",
                            "KYC+AUDIT",
                            "BUILDING TELEGRAM COMMUNITY",
                            "SWEEPWIDGET FOR WHITELIST PRESALE",]}
                    />
                    <Card
                        title={<Typography>MEMES<br/>(Phase 1)</Typography>}
                        select={false}
                        features={["LAUNCH ON PANCAKESWAP",
                            "CMC LISTING",
                            "POOCOIN ADS/COINSNIPER ADS - TWITTER CAMPAIGN",
                            "Influencers Marketing",
                            "Asian Marketing",
                            "2000 HOLDERS",]}
                    />
                    <Card
                        title={<Typography>STANDUP COMEDY<br/>(Phase 2)</Typography>}
                        select={false}
                        features={["CG Listing/Crypto.com Tracker - DEXTOOL TRENDING",
                            "MEME/GIF CONTESTS",
                            "LUNARCRUSH (SOCIAL RANKS) - BILLBOARD ADS",
                            "8000 HOLDERS",
                        ]}
                    />
                    <Card
                        title={<Typography>HODL<br/>(Phase 3)</Typography>}
                        select={false}
                        features={["Mid Tier CEX Listings",
                            "DEVELOPMENT OF GAMING BEGINS - YouTube Influencers",
                            "MEME/GIF CONTESTS",
                            "REVAMP WEBSITE",
                            "15000 HOLDERS",
                        ]}
                    />
                    <Card
                        title={<Typography>JOKE <br/> (Phase 4)</Typography>}
                        select={false}
                        features={["DFUN SWAP",
                            "SATOSHISTREETBETS PARTNERSHIP",
                            "DFUN MERCHSTORE/DFUN GAME LAUNCH",
                            "TIER 1 CEX LISTINGS",
                            "40000 HOLDERS",]}
                    />
                    {/*<Image src={Stage0} alt={"Stage0"} width={300} height={400}/>*/}
                    {/*<Image src={Stage1} alt={"Stage1"} width={300} height={450}/>*/}
                    {/*<Image src={Stage2} alt={"Stage2"} width={300} height={400}/>*/}
                    {/*<Image src={Stage3} alt={"Stage3"} width={300} height={400}/>*/}
                </Stack>
            </Stack>
        </Section>
    );
}

export default SectionCards;
