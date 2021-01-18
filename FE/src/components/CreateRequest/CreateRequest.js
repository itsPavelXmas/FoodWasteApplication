import React, { useState, useEffect } from 'react'
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
import Select from '@material-ui/core/Select';
import {getCategories} from '../../redux/actions/profileActions'
import {getPersonalData} from '../../redux/actions/profileActions'
import { Redirect } from 'react-router-dom';
import {createRequest} from '../../redux/actions/profileActions'

export default function CreateRequest() {
    const classes = whiteLabelStyles();
    const [requestData, setRequestData] = useState({
        category:0,
        requestType:2,
        requestStatus:1,
        userId:null,
        quantity:0,
        description:'',
        location:'',
    }
    )
    const data  = useSelector(state => state.profileReducers);
    const { personalData } = data; 
    const { categories } = useSelector(state => state.profileReducers);
    const dispatch = useDispatch()
    const { isLoggedIn } = useSelector(state => state.authReducers);
    useEffect(() => {
        
        if(isLoggedIn){
            if(!categories){
                dispatch(getCategories());
            }
            if(!personalData)
                dispatch(getPersonalData());

            }
        
        });


    if (!isLoggedIn) {
        return <Redirect to="/" />;
      }
      
      if(!personalData || !categories)
      {
          return null;
      }
     
    const handleInputChange = e => {
        const {name, value} = e.target

        setRequestData({...requestData, [name]: value})
    }
    const handleSubmit = e => {

        if(personalData){
            const userid = personalData.id;
            console.log(personalData);
            setRequestData({...requestData, userId:userid});
            dispatch(createRequest(requestData))
          }

    
    e.preventDefault()
    }
    return (
        <div>
            <Grid container alignItems="center" justify="center" style={{ marginTop: '100px' }}>
                <Grid item xs={12} sm={1}></Grid>
                <Grid item xs={12} sm={5} >
                    <Card style={{ boxShadow: 'none' }} className={[classes.heroCard, classes.cardShadow].join(' ')} >
                        <Typography variant="h5">
                            Share a meal!
                        </Typography>
                        <form >
                            <FormControl style={{ display: 'flex' }}>
                                <InputLabel htmlFor="category">Category</InputLabel>
                                <Select
                                native
                                name="category"
                                value={requestData.category}
                                onChange={handleInputChange}
                                >
                                    
                                    <option key={'none'} aria-label="None" value="" />
                                    {categories.map(cat => {
                                        return (<option key={cat.id} value={cat.id}>{cat.description}</option>)
                                    })}
                                    
                                </Select>
                            </FormControl>
                            <FormControl style={{ display: 'flex' }}>
                                <InputLabel htmlFor="quantity">Quntity</InputLabel>
                                <Input id="quantity" name="quantity" type="number" aria-describedby="quantityText"  value={requestData.quantity} onChange={handleInputChange}/>
                                <FormHelperText id="quantityText">Enter the number of portions</FormHelperText>
                            </FormControl>
                            <FormControl style={{ display: 'flex' }}>
                                <InputLabel htmlFor="description">Description</InputLabel>
                                <Input id="description" name="description" type="text" aria-describedby="descriptionText"  value={requestData.description} onChange={handleInputChange}/>
                                <FormHelperText id="descriptionText">Describe what are you sharing.</FormHelperText>
                            </FormControl>
                            <FormControl style={{ display: 'flex' }}>
                                <InputLabel htmlFor="location">Location</InputLabel>
                                <Input id="location" name="location" type="text" aria-describedby="locationText"  value={requestData.location} onChange={handleInputChange} />
                                <FormHelperText id="locationText">Tell us where to find the food.</FormHelperText>
                            </FormControl>
                            <Button variant="contained" onClick={handleSubmit} type="submit" color="primary" className={classes.heroButtons}>Send food!</Button>

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
