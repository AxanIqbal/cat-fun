import {Toolbar, useScrollTrigger, AppBar as MuiAppBar, Typography, styled} from "@mui/material";
import {cloneElement, ReactElement} from "react";
import Button from "./button";


const Heading = styled(Typography)`
  flex-grow: 1;
`
const CustomAppBar = styled(MuiAppBar)`
  background-color: rgba(147, 79, 16, 0.83);
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

    return cloneElement(children, {
        elevation: trigger ? 5 : 0,
    });
}


function AppBar(props: {window?: () => Window;}) {
    return (
        <ElevationScroll {...props}>
            <CustomAppBar position={"sticky"}>
                <Toolbar>
                    <Heading variant="h6" component="div">
                        DODGE FUN
                    </Heading>
                    <Button>Uniswap Link</Button>
                </Toolbar>
            </CustomAppBar>
        </ElevationScroll>
    );
}

export default AppBar;
