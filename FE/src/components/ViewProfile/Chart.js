import React, { useState, useEffect } from 'react';
import { useTheme } from '@material-ui/core/styles';

import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import { whiteLabelStyles } from '../../styles'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import { useDispatch, useSelector } from "react-redux";
import {getCategories} from '../../redux/actions/profileActions'

// Generate Sales Data
function createData(quantity, category) {
    return { quantity, category };
}


export default function Chart(props) {

    const theme = useTheme();
    const classes = whiteLabelStyles();
    const { requestList } = props

    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(getCategories());
  }, []);
  const { isLoggedIn } = useSelector(state => state.authReducers);
  const { categories } = useSelector(state => state.profileReducers);
  if(!categories){
    return null;
  }

let finalData = categories.map(category => {
  let mapper = {
    category:category.description,
    quantity : 0
  }
  requestList.forEach(data => {
    console.log(data)
    if(data.category === category.description){
      console.log(data.quantity)
      mapper.quantity = mapper.quantity + data.quantity;
    }
  })
  return mapper;
}).map(request => {
    return createData(request.quantity, request.category)
})
console.log(finalData)

    return (
            <Card className={classes.dashboardCard} style={{height:300}}>
                <CardActionArea>
                    <CardContent>
                    <LineChart
        width={500}
        height={300}
        data={finalData}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="category" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="quantity" stroke="#82ca9d" />
      </LineChart>
                        </CardContent>

        </CardActionArea>
    </Card>
  );
}