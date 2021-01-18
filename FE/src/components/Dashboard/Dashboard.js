import React, { useState, useEffect } from 'react';
import { whiteLabelStyles } from '../../styles'
import Grid from '@material-ui/core/Grid';
import FoodCard from './FoodCard'
import { useDispatch, useSelector } from "react-redux";
import { getItems } from "../../redux/actions/dashboardActions";
import { Redirect } from 'react-router-dom';
import {getPersonalData} from '../../redux/actions/profileActions'

export default function Dashboard() {
    const dispatch = useDispatch()
    const data  = useSelector(state => state.profileReducers);
    const { personalData } = data; 
    const { isLoggedIn } = useSelector(state => state.authReducers);
    const { itemList } = useSelector(state => state.dashboardReducers);

    useEffect(() => {
        if(isLoggedIn){
            if(personalData && !itemList){
                dispatch(getItems(personalData.id));
            }
            if(!personalData){
                dispatch(getPersonalData());

            }
        
        }

    });
    

    const classes = whiteLabelStyles();

    if (!isLoggedIn) {
        return <Redirect to="/" />;
      }
    if(!itemList){
        return null;
    }

    const cardList = itemList.filter(item => {
        return item.userId !== personalData.id
    }).map( data => {
        return <Grid key={data.id} item xs={12} sm={3}>
        <FoodCard propData= {data}/>
        </Grid>
    })
    return (
        <Grid container style={{ marginTop: '100px' }}>
            <Grid item xs={12} sm={2}></Grid>
            <Grid item xs={12} sm={8} container>
            {cardList}
            </Grid>

            <Grid item xs = {12} sm={2}></Grid>


        </Grid>
    )
}
