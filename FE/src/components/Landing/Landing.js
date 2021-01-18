import React from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {Link } from "react-router-dom";
import { whiteLabelStyles }from '../../styles';
import  HungerImage  from '../../img/hunger.png';
import FoodWaste from '../../img/waste.png'
import Hero from '../../img/hero.png'
export default function Landing() {
    const classes = whiteLabelStyles();
    return (
        <div>
            <Grid container alignItems="center" justify = "center" style={{marginTop:'100px'}}>
                <Grid item xs={12} sm={1}></Grid>
            <Grid item xs={12} sm={5}>
            <img className = {classes.responsiveImage} src={FoodWaste}/>
            </Grid>
            <Grid item xs={12} sm={5} align = "center"  alignItems = "center" >
            <Card style={{boxShadow:'none'}}className={classes.heroCard}>
                    <CardContent>
                    <Typography variant="h3" className={classes.heroTitle}>
                    Eat with many
                </Typography>
                <Typography variant="h3" className={classes.heroTitle}>
                Don't waste any
                </Typography>
                <Typography style={{fontWeight:'500'}}>
                onSpot it's a web platform designed to stop the continous food wasting, prove you worth your salt and donate for a noble cause.                </Typography>
                <Button variant="contained" color="primary" className={classes.heroButtons}><Link to="/signin">Join our battle!</Link></Button>

                    </CardContent>
                    </Card>
            </Grid>
            <Grid item xs={12} sm={1}></Grid>
        </Grid>
            <Grid container alignItems="center" justify = "center" style={{marginTop:'100px'}}>
            <Grid item xs={12} sm={1}></Grid>
            <Grid item xs={12} sm={5} align = "center"  alignItems = "center" >
            <Card style={{boxShadow:'none'}}className={classes.heroCard}>
                    <CardContent>
                    <Typography variant="h3" className={classes.heroTitle}>
                    Help us get rid of hunger
                </Typography>
                <Typography style={{fontWeight:'500'}}>
                Over 800 million people around the world suffer from chronic food deprivation. Our goal is to make hunger eradication happening
                </Typography>
                    </CardContent>
                    </Card>
            </Grid>
            <Grid item xs={12} sm={5}>
            <img className = {classes.responsiveImage} src={HungerImage}/>
            </Grid>
            <Grid item xs={12} sm={1}></Grid>
        </Grid>

        <Grid container alignItems="center" justify = "center" style={{marginTop:'100px'}}>
                <Grid item xs={12} sm={1}></Grid>
            <Grid item xs={12} sm={5}>
            <img style={{maxWidth:'100%', height:'auto'}}src={Hero}/>
            </Grid>
            <Grid item xs={12} sm={5} align = "center"  alignItems = "center" >
            <Card style={{boxShadow:'none'}}className={classes.heroCard}>
                    <CardContent>
                    <Typography variant="h3" className={classes.heroTitle}>
                    Variety is the spice of life
                </Typography>
                <Typography style={{fontWeight:'500'}}>
                Help others and be the difference the world needs you </Typography>
                    </CardContent>
                    </Card>
            </Grid>
            <Grid item xs={12} sm={1}></Grid>
        </Grid>




        </div>
    )
}
