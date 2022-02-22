import React from 'react';
import Section from "./section";
import {Stack, styled, Typography as MuiTypography} from "@mui/material";

const MySection = styled(Section)`
  background-image: linear-gradient(to top right, #ec1212, #cd1313);
`

const Typography = styled(MuiTypography)`
  color: white;
  text-align: center;
`

function SectionInfoBoard() {
    return (
        <MySection>
           <Stack direction={'row'} spacing={1}>
               <Typography>Token Supply<br/>
                   420,000,000,000,000,000,000,000</Typography>
               <Typography>Token Supply<br/>
                   420,000,000,000,000,000,000,000</Typography>
               <Typography>Token Supply<br/>
                   420,000,000,000,000,000,000,000</Typography>
               <Typography>Token Supply<br/>
                   420,000,000,000,000,000,000,000</Typography>
               <Typography>Token Supply<br/>
                   420,000,000,000,000,000,000,000</Typography>
               <Typography>Token Supply<br/>
                   420,000,000,000,000,000,000,000</Typography>
           </Stack>
        </MySection>
    );
}

export default SectionInfoBoard;
