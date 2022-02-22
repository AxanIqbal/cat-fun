import Section from "./section";
import {Stack, styled, Typography as MuiTypography} from "@mui/material";
import Image from 'next/Image';
import Stage0 from '../assets/Stage0.webp';
import Stage1 from '../assets/Stage1.webp';
import Stage2 from '../assets/Stage2.webp';
import Stage3 from '../assets/Stage3.webp';

const Typography = styled(MuiTypography)`
  color: white;
`

const stages = [
    {
        name: 'Stage 1',
        features: [
            {
                has: true,
                text: "Retain Proven Marketing Agency"
            }
        ]
    }
]

function SectionCards() {
    return (
        <Section>
            <Stack sx={{width: '100%'}}>
                <Typography variant={"h2"} align={'center'}>Agenda for the coming months</Typography>
                <Typography align={'center'}>We have a targeted roadmap inspired by the trajectory and series of events
                    that both Shiba Inu and Dogecoin have followed.<br/>Their combined marketcap today sits above $40
                    billion USD</Typography>
                <Stack direction={"row"} justifyContent="space-evenly" alignItems="center" flexWrap={"wrap"} pt={5}>
                    <Image src={Stage0} alt={"Stage0"} width={300} height={400}/>
                    <Image src={Stage1} alt={"Stage1"} width={300} height={450}/>
                    <Image src={Stage2} alt={"Stage2"} width={300} height={400}/>
                    <Image src={Stage3} alt={"Stage3"} width={300} height={400}/>
                </Stack>
            </Stack>
        </Section>
    );
}

export default SectionCards;
