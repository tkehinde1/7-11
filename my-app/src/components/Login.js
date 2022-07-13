import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {Avatar, Button, TextField, Link, FormControlLabel, Checkbox} from '@mui/material'
import { styled } from '@mui/material/styles'; 
import Typography from '@mui/material/Typography';

const Login = () => {

    const paperStyle = {
        padding:"20px", 
        height: "70vh", 
        width:"280",
        margin: "20px auto"
    }

    const avatarStyle = {
        backgroundColor:"green"
    }

    const textField = {
        margin:"10px"
    }

    const btnstyle = {
        margin: '8px 0'
    }

    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align = "center"> 
                    <Avatar style = {avatarStyle}></Avatar>
                    <h4>Sign In</h4>
                </Grid> 

                <TextField 
                    label = 'UserName'
                    style={textField}
                    placeholder='Enter Username'
                    fullWidth
                    required>
                </TextField>

                <TextField 
                    label = 'Password'
                    style={textField}
                    placeholder='Enter Password'
                    fullWidth
                    required>
                </TextField>

                <FormControlLabel
                        control = {
                            <Checkbox 
                                name='Checked'
                                color='primary'

                            />}
                            label = 'Remember me'
                            /> 

                        <Button
                            type = "submit"
                            color= "primary"
                            variant = "contained"
                            style = {btnstyle}
                            fullWidth
                            >
                            Sign In
                        </Button>

                        <Typography
                                style = {textField}
                        >
                                <Link href = "#">
                                    Forgot Password?
                                </Link>
                        </Typography>

                        <Typography
                            style = {textField}
                        >

                                <Link href = "#">
                                    Dont have and account? sign up!
                                </Link>
                        </Typography>


                </Paper>
            </Grid>

           
)
}

export default Login;