import {Toolbar, useScrollTrigger, AppBar as MuiAppBar, Typography, styled, Slide} from "@mui/material";
import {cloneElement, ReactElement} from "react";
import Button from "./button";


const Heading = styled(Typography)`
  flex-grow: 1;
`
const CustomAppBar = styled(MuiAppBar)`
  background-color: rgb(184, 97, 7);
  min-height: 5rem;
  display: flex;
  margin: auto;
  justify-items: center;
`

interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window?: () => Window;
    children: ReactElement;
}

function ElevationScroll(props: Props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    const trigger1 = useScrollTrigger({
        target: window ? window() : undefined,
    });

    return <Slide appear={false} direction="down" in={!trigger1}>
        {cloneElement(children, {
                elevation: trigger ? 5 : 0,
            })}
    </Slide>;
}


function AppBar(props: {window?: () => Window;}) {
    return (
        <ElevationScroll {...props}>
            <CustomAppBar position={"sticky"}>
                <Toolbar>
                    <Heading variant="h6">
                        DODGE FUN
                    </Heading>
                    <Button variant={'outlined'} style={{width: "17em"}}>Uniswap Link</Button>
                </Toolbar>
            </CustomAppBar>
        </ElevationScroll>
    );
}

export default AppBar;
