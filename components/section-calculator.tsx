import Section from "./section";
import {Card, CardContent, Stack, styled, Typography as MuiTypography} from "@mui/material";
import Button from "./button";
import Image from 'next/Image';
import SecCalc from '../assets/secCalc.png';

const MySection = styled(Section)`
  background-color: black;
  justify-content: center;
`
const Typography = styled(MuiTypography)`
  color: white;
`

const MyButton = styled(Button)`
    color: white;
`
function SectionCalculator() {
    return (
        <MySection>
            <Image src={SecCalc} alt={"Calculator"}/>
            {/*<Stack spacing={1}>*/}
            {/*    <Stack direction={"row"} spacing={20}>*/}
            {/*        <MyButton variant={"outlined"}>buy eth</MyButton>*/}
            {/*        <MyButton variant={"outlined"} backColor={'#dc6600'}>Connect</MyButton>*/}
            {/*    </Stack>*/}
            {/*    <Card variant={'elevation'} color={"darkslategrey"}>*/}
            {/*        <CardContent>*/}
            {/*            asd*/}
            {/*        </CardContent>*/}
            {/*    </Card>*/}
            {/*</Stack>*/}
        </MySection>
    );
}

export default SectionCalculator;
