import {
    AppBar as MuiAppBar,
    Box,
    Container,
    Divider,
    IconButton,
    Slide,
    Stack,
    styled,
    SwipeableDrawer,
    Toolbar,
    Typography,
    useScrollTrigger
} from "@mui/material";
import {cloneElement, ReactElement, useState} from "react";
import Button from "./button";
import {Divide as Hamburger} from 'hamburger-react'
import {useRouter} from "next/router";
import {FaTelegram, FaTwitter} from "react-icons/fa";

const Heading = styled(Typography)`
  flex-grow: 1;
`
const CustomAppBar = styled(MuiAppBar)`
  //background-color: rgb(184, 97, 7);
  background-image: linear-gradient(to right bottom, rgb(220, 124, 39), rgb(182, 85, 0));
  display: flex;
  margin: auto;
  justify-items: center;
`

const MyButton = styled(Button)`
  padding: 5px 10px;
`

const MyToolbar = styled(Toolbar)(({theme}) => ({
    alignItems: 'center',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    // Override media queries injected by theme.mixins.toolbar
    '@media all': {
        minHeight: 80,
    },
}));

const MyDrawer = styled(SwipeableDrawer)`


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
    const {children, window} = props;
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

const DrawerStack = styled(Stack)`
  margin: auto;
  transform: translateY(-4rem);
`

// const MyHamburger = styled(Hamburger)`
//   position: absolute;
//   z-index: 10;
// `

function AppBar(props: { window?: () => Window; }) {
    const [drawer, setDrawer] = useState(false);
    const router = useRouter()

    return (
        <ElevationScroll {...props}>
            <CustomAppBar position={"sticky"} color={'primary'}>
                <Container maxWidth={"xl"}>
                    <MyToolbar disableGutters>
                        <Heading variant="h6">
                            DOGEFUN
                        </Heading>
                        <Box sx={{display: {xs: 'flex', sm: 'none'}}}>
                            <Hamburger color={"whitesmoke"} toggled={drawer}
                                       onToggle={() => setDrawer(prevState => !prevState)}/>
                            <MyDrawer anchor={'right'} open={drawer}
                                      onClose={() => setDrawer(false)} PaperProps={{
                                sx: {
                                    // backgroundColor: 'rgba(184, 97, 7,0.8)',
                                    backgroundImage: 'linear-gradient(to right bottom, rgba(220, 124, 39, 0.8), rgba(182, 85, 0, 0.90))',
                                    // justifyContent: 'center',
                                    width: '80%'
                                }
                            }}
                                      onOpen={() => setDrawer(true)}>
                                <DrawerStack spacing={4}>
                                    <Stack spacing={2}>
                                        <MyButton variant={'outlined'} style={{width: "15em"}}>PancakeSwap
                                            Link</MyButton>
                                        <MyButton variant={'outlined'} style={{width: "15em"}} onClick={async event => {
                                            event.preventDefault()
                                            await router.push('WHITEPAPER.pdf')
                                        }}>WHITEPAPER</MyButton>
                                    </Stack>
                                    <Divider color={'darkslategrey'}/>
                                    <Stack spacing={2}>
                                        <MyButton variant={'outlined'} href={'https://twitter.com/dogefuncoin'}
                                                  style={{width: "15em", display: 'flex'}}
                                                  endIcon={<FaTwitter color={'darkslategrey'}/>}>Twitter</MyButton>
                                        <MyButton variant={'outlined'} href={'https://t.me/DOGEFUNOfficial'}
                                                  style={{width: "15em", display: 'flex'}}
                                                  endIcon={<FaTelegram color={'darkslategrey'}/>}>Telegram</MyButton>
                                    </Stack>
                                </DrawerStack>
                            </MyDrawer>
                        </Box>
                        <Stack direction={'row'} spacing={1} sx={{display: {xs: 'none', sm: 'flex'}}}>
                            <IconButton href={'https://twitter.com/dogefuncoin'}>
                                <FaTwitter color={'darkslategrey'}/>
                            </IconButton>
                            <IconButton href={'https://t.me/DOGEFUNOfficial'}>
                                <FaTelegram color={'darkslategrey'}/>
                            </IconButton>
                            <MyButton variant={'outlined'} style={{width: "15em"}}>PancakeSwap Link</MyButton>
                            <MyButton variant={'outlined'} style={{width: "15em"}} onClick={async event => {
                                event.preventDefault()
                                await router.push('WHITEPAPER.pdf')
                            }}>WHITEPAPER</MyButton>
                        </Stack>
                    </MyToolbar>
                </Container>
            </CustomAppBar>
        </ElevationScroll>
    );
}

export default AppBar;
