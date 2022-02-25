import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
    palette: {
        primary: {
            main: '#b65500',
        },
        secondary: {
            main: '#2F4F4F',
        },
        error: {
            main: red.A400,
        },
    },
});

export default theme;
