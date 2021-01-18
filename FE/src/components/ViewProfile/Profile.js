import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid'
import PersonalDataCard from './PersonalDataCard'
import DonationCard from './DonationCard'
import { useDispatch, useSelector } from "react-redux";
import {getRequests} from '../../redux/actions/profileActions'
import {getPersonalData} from '../../redux/actions/profileActions'
import Chart from './Chart'
import { Redirect } from 'react-router-dom';

export default function Profile() {
    const dispatch = useDispatch()
    const data  = useSelector(state => state.profileReducers);
    const { requestList, personalData } = data; 
    const { isLoggedIn } = useSelector(state => state.authReducers);
    useEffect(() => {
        if(isLoggedIn){
            if(personalData && !requestList){
                dispatch(getRequests(personalData.id));
            }
            if(!personalData)
                dispatch(getPersonalData());

            }
        
        });


    if (!isLoggedIn) {
        return <Redirect to="/" />;
      }
 

    if(!requestList || !personalData){
        return null;
    }
    const cardList = requestList.map( data => {
        return <Grid key={data.id} item xs={12} sm={3}>
        <DonationCard propData= {data}/>
        </Grid>
    })
    return (
        <Grid container style={{marginTop:100}}>
            <Grid item xs={12} sm={1}></Grid>
            <Grid item xs={12} sm={10} container>
                <Grid item xs={12} sm={12} container>
                    <Grid item xs={12} sm={3}>
                        <PersonalDataCard personalData={personalData}/>
                    </Grid>
                    <Grid item xs={12} sm={9}>
                    <Chart requestList={requestList}/>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={12} container>
                    {cardList}
                </Grid>
            </Grid>
            <Grid item xs={12} sm={1}></Grid>
        </Grid>
    )
}
