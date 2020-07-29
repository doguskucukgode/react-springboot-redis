import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import UserForm from './forms/UserForm';
import UserTable from './table/UserTable';


const useStyles = makeStyles(theme => ({
  toolbar: theme.mixins.toolbar,
  title: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    backgroundColor: '#f3f3f3'
  },
  fullWidth: {
    width: '100%',
  },
}));

function MainContent() {
  const classes = useStyles();

  return (
    <main className={classes.fullWidth}>
      <div className={classes.toolbar} />
      <div className={classes.title}>
        <Typography variant='h6'>Users</Typography>
      </div>
      <div className={classes.content}>
        {/* <CupCakeTable /> 
        <br/>*/}
        <UserForm/>
        <br></br>
        <UserTable />
      </div>
    </main >
  );
}

export default MainContent;
