import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
    overrides: {
        MuiCssBaseline: {
            '@global': {
                html: {
                    fontSize: '14px',
                    margin: 0,
                    padding: 0,
                    height: '100vh',
                },
                body: {
                    height: '100%',
                    fontSize: '1rem',
                    fontWeight: 400,
                    lineHeight: '1.5rem',
                    backgroundColor: '#FFFFFF',
                    color: '#000000',
                }
            },
        },
    },
});