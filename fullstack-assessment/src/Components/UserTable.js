import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles( (theme) => ({
    root: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#F5F5F5',
        margin: theme.spacing(1)
    },
    cellHeader: {
        borderBottom: '1px solid rebeccapurple',
        // textAlign: 'center'
    },
    cell: {
        borderBottom: '1px solid rebeccapurple',
    }
}));

const Head = () => {

    const classes = useStyles();

    return (

        <TableHead>
            <TableRow>
                <TableCell className={classes.cellHeader}>Name</TableCell>
                <TableCell className={classes.cellHeader}>Username</TableCell>
                <TableCell className={classes.cellHeader}>Email</TableCell>
                <TableCell className={classes.cellHeader}>Phone</TableCell>
            </TableRow>
        </TableHead>
    );
};

const UserTable = ( { results }) => {

    const classes = useStyles();

    let users = results.map((user) => (
        <TableRow key={results.username}>
            <TableCell className={classes.cell} component="th" scope="row">
                {user.name}
            </TableCell>
            <TableCell className={classes.cell} component="th" scope="row">
                {user.username}
            </TableCell>
            <TableCell  className={classes.cell} component="th" scope="row">
                {user.email}
            </TableCell>
            <TableCell  className={classes.cell} component="th" scope="row">
                {user.phone}
            </TableCell>
        </TableRow>
    ))

    return (
        <>
            <Typography variant='h4' align='center'>USER TABLE</Typography>
            <Paper className={classes.root}>
                <Table className={classes.table} stickyHeader={true}>
                    <Head />
                    <TableBody>
                        {users}
                    </TableBody>
                </Table>
            </Paper>
        </>
    );
}

export default UserTable