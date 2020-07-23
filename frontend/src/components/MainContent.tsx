import { Typography, Card, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import CupCakeTable from './table/CupCakeTable';
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
        <Typography variant='h6'>Title</Typography>
      </div>
      <div className={classes.content}>
        <CupCakeTable />
        <br/>
        <UserTable />
      </div>
    </main >
  );
}

export default MainContent;
