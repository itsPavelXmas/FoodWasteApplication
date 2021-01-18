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
import { completePersonalData } from "../../redux/actions/authActions";
import { Redirect } from 'react-router-dom';

export default function CompletePersonalData() {
    const classes = whiteLabelStyles();
    const [personalData, setPersonalData] = useState({
        email:'',
        cnp:'',
        name:'',
        surrname:'',
        address:'',
        series:'',
    })
    const [errorMessage, setErrorMessage] = useState({
        cnpError:''
    })
    const [redirect, setRedirect] = useState(false);
    const { isLoggedIn } = useSelector(state => state.authReducers);
    const { message } = useSelector(state => state.messageReducers);
    const data = useSelector(state => state.profileReducers);
    const dispatch = useDispatch()
    if (!isLoggedIn) {
        return <Redirect to="/" />;
    }
    if(data.personalData){
        return <Redirect to="/dashboard" />;
    }
    const handleInputChange = e => {
        const {name, value} = e.target
        let isValid = true;
        if(name === 'cnp') {
            isValid = validateCNP(value)
        }
        if(isValid){
            setErrorMessage({cnpError:''})
            setPersonalData({...personalData, [name]: value})
        } else {
            setErrorMessage({cnpError:'CNP invalid'})

        }
    }
    const validateCNP = (value) => {
        let re = /^\d{1}\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])(0[1-9]|[1-4]\d| 5[0-2]|99)\d{4}$/,
            bigSum = 0,
            rest = 0,
            ctrlDigit = 0,
            control = '279146358279',
            i = 0;
        if (re.test(value)) {
            for (i = 0; i < 12; i++) {
                bigSum += value[i] * control[i];
            }
            ctrlDigit = bigSum % 11;
            if (ctrlDigit === 10) {
                ctrlDigit = 1;
            }
    
            if (ctrlDigit !== parseInt(value[12], 10)) {
                return false;
            } else {
                return true;
            }
        }
        return false;
    };
    const handleSubmit = e => {
    e.preventDefault()
    const user = JSON.parse(localStorage.getItem('user'));
    if(user){
        console.log(user.email)
        setPersonalData({...personalData,email:user.email})
        if(personalData.email !== ''){
            dispatch(completePersonalData(personalData))
        }
        setRedirect(true)
    }
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
                                <InputLabel htmlFor="cnp">CNP</InputLabel>
                                <Input id="cnp" name="cnp" type="text" aria-describedby="cnpText" onChange={handleInputChange}/>
                                <FormHelperText id="cnpText">We'll never share your CNP.</FormHelperText>
                            </FormControl>
                            <Typography>{errorMessage.cnpError}</Typography>
                            <FormControl style={{ display: 'flex' }}>
                                <InputLabel htmlFor="name">Name</InputLabel>
                                <Input id="name" name="name" type="text" aria-describedby="nameText" onChange={handleInputChange}/>
                                <FormHelperText id="nameText">This is important for people to know who you are.</FormHelperText>
                            </FormControl>

                            <FormControl style={{ display: 'flex' }}>
                                <InputLabel htmlFor="surrname">Surrname</InputLabel>
                                <Input id="surrname" name="surrname" type="text" aria-describedby="surrnameText" onChange={handleInputChange}/>
                                <FormHelperText id="surrnameText">This is important for people to know who you are.</FormHelperText>
                            </FormControl>
                            <FormControl style={{ display: 'flex' }}>
                                <InputLabel htmlFor="address">Your address</InputLabel>
                                <Input id="address" name="address" type="text" aria-describedby="addressText" onChange={handleInputChange}/>
                                <FormHelperText id="addressText">This is important for people to know who you are.</FormHelperText>
                            </FormControl>
                           
                            <FormControl style={{ display: 'flex' }}>
                                <InputLabel htmlFor="series">Id Card Series</InputLabel>
                                <Input id="series" name="series" type="text" aria-describedby="seriesText" onChange={handleInputChange}/>
                                <FormHelperText id="seriesText">This is important for people to know who you are.</FormHelperText>
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
