import React from 'react';
import Section from "./section";
import {Grid, Stack, styled, Typography as MuiTypography} from "@mui/material";

const MySection = styled(Section)`
  background-image: linear-gradient(to top right, #ec1212, #cd1313);
`

const Typography = styled(MuiTypography)`
  color: white;
  text-align: center;
  padding-bottom: 1em;
  padding-top: 1em;
`

function SectionInfoBoard() {
    return (
        <MySection>
            <Stack
                direction="row"
                justifyContent="space-evenly"
                alignItems="center"
                spacing={1.5}
                width={"100%"}
                flexWrap={"wrap"}
            >
                <Typography>Token Supply<br/>420,000,000,000,000,000,000,000</Typography>
                <Typography>Max Wallet<br/>
                    1%</Typography>
                <Typography>Burn On Launch<br/>
                    50%<br/>(deflationary)</Typography>
                <Typography>Redistributions<br/>
                    5%</Typography>
                <Typography>Liquidity<br/>
                    5%<br/>(locked)</Typography>
                <Typography>Marketing<br/>
                    5%</Typography>
            </Stack>
        </MySection>
    );
}

export default SectionInfoBoard;
