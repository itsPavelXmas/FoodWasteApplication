import React, { useState } from 'react'
import { whiteLabelStyles } from '../../styles'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ContactDetails from './ContactDetails';


export default function FoodCard(props) {
    const {description,name,email,quantity,location,category} = props.propData;
    const classes = whiteLabelStyles();
    const [donator, setDonator] = useState(false)
    const showDonator = () => {
        setDonator(!donator);
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
                {donator ? (
                <ContactDetails propData={{name,email}} /> ): null}
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button size="small" color="primary" onClick={showDonator}> {donator ? 'Hide contact details' : 'Show contact details'} </Button>
        </CardActions>
    </Card>
    )
}
