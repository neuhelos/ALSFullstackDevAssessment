import React, { useState } from 'react';

import PublicAPI from './Components/PublicAPI';
import UserTable from './Components/UserTable'
import { RESULTS } from './Data/results'

import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from './theme'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import ALSLogo from './Assets/AnneLewisStrategiesLogo.png'


const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      backgroundImage: `url(${ALSLogo})`,
      backgroundPosition: 'center',
      textAlign: 'center',
      display: 'flex',
      flex: 1,
      alignItems: 'center',
      flexDirection: 'column',
      '& *': {
        fontFamily: 'montserrat'
      },
    },
    container: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
      backgroundColor: 'rgba(255,255,255,0.90)'
    },
    margin: {
      margin: theme.spacing(2)
    }
}))

const ALS = () => {
  
  const classes = useStyles()

  const [toggle, setToggle] = useState(false)

  const toggleExercise = () => {
    setToggle(!toggle)
  }
  
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={classes.root}>
        <div className={classes.container}>
          <Typography className={classes.margin}  variant='h3'>ALS Fullstack Dev Exercises</Typography>
          <div>
          <Button className={classes.margin} variant="contained" onClick={toggleExercise}>Toggle Exercises</Button>
          </div>
          <div className={classes.margin}>
            {toggle ? <UserTable results={RESULTS}/> : <PublicAPI />}
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default ALS;
