import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Loading from './Loading'

import {makeStyles} from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: theme.spacing(2),
    },
    margin: {
        margin: theme.spacing(1)
    }
}))

const PublicAPI = () => {
    
    const classes = useStyles()

    const [userCount, setUserCount] = useState(25)
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    const handleChange = (event) => {
        setUserCount(event.target.value)
    }

    const fakerAPI = async (userCount) => {
    
        let dataArray = []
        try {
            for (let i = 1 ; i <= userCount; i++){
                let fetch = await axios.get(`http://faker.hook.io/?property=helpers.userCard&locale=en_US`)
                dataArray.push(fetch.data)
            }
            console.log(dataArray)
        } catch (error) {
            console.log(error)
        }
        setData(dataArray)
        setLoading(false)
    }

    const handleSubmit = (event) => {
        setLoading(true)
        event.preventDefault()
        fakerAPI(userCount)
        setUserCount("")
    }

    useEffect ( () => {
    }, [data])

    let users = data.map( (fakeUser, index) => {
        return  ( 
            <>
                <ListItem key={fakeUser.username} id={fakeUser.username} style={{listStylePosition: 'inside'}}>
                    <ListItemText primary={`${index + 1}. ${fakeUser.name}`} secondary={fakeUser.username} />
                </ListItem>
                <Divider />
            </>
        )
    })   

    return (
        <div>
            <Typography variant='h4' align='center'>PUBLIC API CONSUMPTION</Typography>
            <form className={classes.root} onSubmit={handleSubmit}>
                <TextField fullWidth className={classes.margin} type='number' label="User Count" variant="outlined" placeholder='Enter Number of Users to Display' value={userCount} onChange={handleChange}/>
                <Button className={classes.margin} type='submit' variant="contained">SUBMIT</Button>
            </form>
            
            <Typography variant='h5' align='center'>Faker.JS User List</Typography>
            {loading ? <Loading /> : <List style={{margin: 0, padding: 0}}>{users}</List>}
        </div>
    )
}

export default PublicAPI
