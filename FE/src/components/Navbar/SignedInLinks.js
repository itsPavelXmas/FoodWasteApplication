import React from 'react'
import { useState } from 'react'
import { Menu, MenuItem, IconButton, Box, Hidden } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import { whiteLabelStyles } from '../../styles'
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { useDispatch } from "react-redux";
import {logout} from '../../redux/actions/authActions'
export default function SignedInLinks() {
    const navLinks = [
        { title: `Home`, path: `/` },
        { title: `profile`, path: `/profile` },
        { title: `dashboard`, path: `/dashboard` },
        { title: `donate food`, path: `/create-request`}
      ]

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
      
    const handleClose = () => {
      setAnchorEl(null) ;
    };
    const name = JSON.parse(localStorage.getItem('user')).email
    const dispatch = useDispatch();

    const logOut = () => {
      dispatch(logout());
    }

    const classes = whiteLabelStyles();

    return (
        <Box>
            <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
            <Typography style={{marginRight:10, fontWeight:'bold', color:'black'}}>
                    {name}
                </Typography>
                <Avatar className={classes.avatarColor}>{name.charAt(0)}</Avatar>

            </IconButton>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {
                    navLinks.map(link => {
                        return (<MenuItem key={link.title} onClick={handleClose}><Link to={link.path} key={link.title} className={classes.navLink}> {link.title}</Link></MenuItem>)
                    })
                }
                            <MenuItem key={'logout'} onClick={logOut}><Link to={'/'} key={'logout'} className={classes.navLink}> Log out</Link></MenuItem>

            </Menu>
        </Box>
    )
}
