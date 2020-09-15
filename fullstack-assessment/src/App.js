import React, { useState } from 'react';

import PublicAPI from './Components/PublicAPI';
import UserTable from './Components/UserTable'
import { RESULTS } from './Data/results'

import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
    root: {
      textAlign: 'center',
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column'
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
    <div className={classes.root}>
      <Typography className={classes.margin}  variant='h3'>ALS Fullstack Dev Exercises</Typography>
      <Button className={classes.margin} variant="contained" onClick={toggleExercise} >Toggle Exercises</Button>
      <div className={classes.margin}>
        {toggle ? <UserTable results={RESULTS}/> : <PublicAPI />}
      </div>
    </div>
  );
}

export default ALS;
