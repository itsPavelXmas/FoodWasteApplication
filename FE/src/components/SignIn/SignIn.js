import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { whiteLabelStyles } from '../../styles';
import JoinUs from '../../img/joinus.png'
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/actions/authActions";
import { Redirect } from 'react-router-dom';

export default function SignIn() {
    const classes = whiteLabelStyles();
    const [registerData, setRegisterData] = useState({email:'',password:''})
    const { isLoggedIn } = useSelector(state => state.authReducers);
    const { message } = useSelector(state => state.messageReducers);
    const { personalData } = useSelector( state => state.profileReducers);
    const dispatch = useDispatch()
    if (isLoggedIn) {
        return <Redirect to="/" />;
      }
    const handleInputChange = e => {
        const {name, value} = e.target
        setRegisterData({...registerData, [name]: value})
    }
    const handleSubmit = e => {
    e.preventDefault()
    dispatch(register(registerData.email, registerData.password))
    }
    return (
        <div>
            <Grid container alignItems="center" justify="center" style={{ marginTop: '100px' }}>
                <Grid item xs={12} sm={1}></Grid>
                <Grid item xs={12} sm={5} >
                    <Card style={{ boxShadow: 'none' }} className={[classes.heroCard, classes.cardShadow].join(' ')} >
                        <Typography variant="h5">
                            Create your account and start sharing food!
                        </Typography>
                        <form >
                            <FormControl style={{ display: 'flex' }}>
                                <InputLabel htmlFor="email">Email address</InputLabel>
                                <Input id="email" name="email" type="email" aria-describedby="emailText" onChange={handleInputChange}/>
                                <FormHelperText id="emailText">We'll never share your email.</FormHelperText>
                            </FormControl>
                            <FormControl style={{ display: 'flex' }}>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input id="password" name="password" type="password" aria-describedby="passwordText" onChange={handleInputChange} />
                                <FormHelperText id="passwordText">Your password is kept safe.</FormHelperText>
                            </FormControl>
                            <Button variant="contained" onClick={handleSubmit} type="submit" color="primary" className={classes.heroButtons}>Enter your account!</Button>
                        </form>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={5}>
                    <img className={classes.responsiveImage} src={JoinUs} />
                </Grid>
                <Grid item xs={12} sm={1}></Grid>
            </Grid>

        </div>
    )
}
