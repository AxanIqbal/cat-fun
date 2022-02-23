import {Stack, styled, Typography} from "@mui/material";
import Section from "./section";
import Image from 'next/image'
import Buy1 from '../assets/buy1.webp'
import Buy2 from '../assets/buy2.webp'
import Buy3 from '../assets/buy3.webp'
import Buy4 from '../assets/buy4.webp'

const MySection = styled(Section)`
  background-color: darkslategrey;
`

const MyTypo = styled(Typography)`
  color: white;
`
const MyStack = styled(Stack)`
      text-align: center;
    `

function SectionHowToBuy() {
    return (
        <MySection>
            <MyStack justifyItems="center" sx={{width: '100%'}}>
                <MyTypo my={2} variant={'h3'}>How to buy</MyTypo>
                <MyTypo fontWeight={'bold'}>Contract Address</MyTypo>
                <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="space-evenly" alignItems={{ xs: 'center', sm: 'start' }} my={3} spacing={1}>
                    <BuySteps img={Buy1}
                              body={`From The App Store or Google Play Store, for free. Or add the desktop browser extension on Google Chrome by going to metamask.io Follow their easy steps
from their guide to set up a wallet.`}
                              heading={`Download Metamask`}
                              step={1}
                              footer={"When Metamask asks for your signature go ahead and click sign."}
                    />
                    <BuySteps img={Buy2}
                              body={`You can buy ETH directly through Metamask or you can transfer some from another wallet or crypto exchange. You can follow tutorials on Youtube if you get stuck on this step.`}
                              heading={`Send ETH to Metamask`}
                              step={2}
                    />
                    <BuySteps img={Buy3}
                              body={`Go to uniswap.org via
a desktop browser or inside your Metamask wallet tap the three blue lines at the top left of your screen to reveal your browser.`}
                              heading={`Connect to Uniswap`}
                              step={3}
                              footer={"When Metamask asks for your signature go ahead and click sign."}
                    />
                    <BuySteps img={Buy4}
                              body={`Go to uniswap.org via a desktop browser or inside your Metamask wallet. Or click here. Click the cog button and change the “Slippage" amount to 12-15%. Add your desired ETH amount you’d like to swap, once you’re happy click the “Swap” button to finalize the trade. `}
                              heading={`Swap your ETH for $SHIBDOGE`}
                              step={4}
                    />
                </Stack>
            </MyStack>
        </MySection>
    );
}

interface BuyStepsProps {
    step: number
    heading: string
    body: string
    footer?: string
    img: string | StaticImageData
}

function BuySteps(props: BuyStepsProps) {
    const {step, body, heading, footer, img} = props

    const MyStack = styled(Stack)`
      text-align: center;
      width: 15em;
      align-items: center;
    `

    return (
        <MyStack spacing={1}>
            <Image src={img} alt={heading} width={120} height={60} />
            <Typography variant={"h6"} color={"#A15200FF"}>step {step}</Typography>
            <Typography fontWeight={'bold'} color={"#d06b00"}>{heading}</Typography>
            <MyTypo>{body}</MyTypo>
            {footer && <Typography color={"#9e5309"}>{footer}</Typography>}
        </MyStack>
    );
}

export default SectionHowToBuy;
