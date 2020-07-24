import { FormControl, InputLabel, Select, MenuItem, Card, Typography, Button, FormLabel, RadioGroup, FormControlLabel, Radio } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import React from 'react';
import User from '../model/User';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& .MuiTextField-root': {
                margin: theme.spacing(1),
                width: '100%',
                maxWidth: '40ch'
            },
        },
        formControl: {
            margin: theme.spacing(1),
            minWidth: '50%'
        },
        radioControl: {
            margin: theme.spacing(2),
            minWidth: 400,
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },
        buttonControl: {
            marginLeft: theme.spacing(1),
            maxWidth: 200
        }
    }),
);

export default function UserForm() {
    const classes = useStyles();
    const user = {} as User;

    const handleGenderChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        user.gender = event.target.value as string;
    };


    return (
        <form className={classes.root} noValidate autoComplete="off">
            <Card>
                <Typography>
                    <FormControl variant="outlined" className={classes.formControl}>
                        <TextField
                            required
                            id="outlined-helperText"
                            label="Name"
                            helperText="Please enter name"
                        />
                    </FormControl>
                </Typography>
                <Typography>
                    <FormControl variant="outlined" className={classes.formControl}>
                        <TextField
                            required
                            id="outlined-helperText"
                            label="Surname"
                            helperText="Please enter surname"
                        />
                    </FormControl>
                </Typography>
                <Typography>
                    <FormControl variant="outlined" className={classes.formControl}>
                        <TextField
                            id="outlined-number"
                            label="Age"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </FormControl>
                </Typography>
                <Typography>
                    <FormControl variant="outlined" className={classes.radioControl}>
                        <FormLabel component="legend">Gender</FormLabel>
                        <RadioGroup aria-label="gender" name="gender1" value={user.gender} onChange={handleGenderChange}>
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                        </RadioGroup>
                    </FormControl>
                    <Typography>
                        <FormControl variant="outlined" className={classes.formControl}>
                            <Button variant="contained"
                                color="primary" className={classes.buttonControl}>
                                Save
                            </Button>
                        </FormControl>
                    </Typography>
                </Typography>
            </Card>
        </form>
    );
}