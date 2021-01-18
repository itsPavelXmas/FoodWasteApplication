import React, { useState } from 'react'
import { whiteLabelStyles } from '../../styles'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useDispatch } from "react-redux";
import {updateRequest} from '../../redux/actions/profileActions'

export default function DonationCard(props) {
    const {description,id,quantity,location,category} = props.propData;
    const classes = whiteLabelStyles();
    const [donationIsFinished, setDonationFinished] = useState(false);
     const dispatch = useDispatch()
    const finishDonation = () => {
        setDonationFinished(true);
        dispatch(updateRequest(id));
    }
    return (
        <Card className={classes.dashboardCard}>
        <CardActionArea>
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {category} - {quantity}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {description}
                </Typography>
                <Typography>
                    {location}
                </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button size="small" color="primary" onClick={finishDonation}>Complete donation</Button>
        </CardActions>
    </Card>
    )
}
