import React from 'react'
import Typography from '@material-ui/core/Typography';
import PersonIcon from '@material-ui/icons/Person';
import EmailIcon from '@material-ui/icons/Email';

export default function ContactDetails(props) {
    const {name,email} = props.propData
    return (
        <div>
            <Typography>
               <PersonIcon/> Name: {name}
            </Typography>
            <Typography>
              <EmailIcon/>  Email: {email}
            </Typography>
        </div>
    )
}
