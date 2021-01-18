import React from 'react'
import { whiteLabelStyles } from '../../styles'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import EmailIcon from '@material-ui/icons/Email';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box'

export default function PersonalDataCard({personalData}) {
    const {email, name, surrname, address} = personalData;
    const classes = whiteLabelStyles();
    return (
        <Card className={classes.dashboardCard}>
        <CardActionArea>
            <CardContent>
                <Box>
                <Avatar className={classes.avatarColor} style={{display:'inline-flex', marginRight:10}}>{name.charAt(0)+ surrname.charAt(0)}</Avatar>
                <Typography style={{display:'inline-flex'}}> { name + ' ' + surrname }</Typography>
                </Box>

            <Typography>
              <EmailIcon/>  Email: {email}
            </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {address}
                </Typography>
            </CardContent>
        </CardActionArea>
    </Card>
    )
}
