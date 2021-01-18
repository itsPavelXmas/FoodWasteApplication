import React from 'react'
import { useState } from 'react'
import { Menu, MenuItem, IconButton, Box, Hidden } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import { whiteLabelStyles }from '../../styles'

export default function SignedOutLinks() {
    const navLinks = [
        { title: `Home`, path: `/` },
        { title: `login`, path: `/login` },
        { title: `sign In`, path: `/signIn` },
      ]

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
      
    const handleClose = () => {
      setAnchorEl(null) ;
    };

    const classes = whiteLabelStyles();
    return (
        <Box>
        <Hidden lgUp>
          <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
              <MenuIcon />
          </IconButton>
          <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
          >
            {
              navLinks.map( link => {
                return (<MenuItem key={link.title} onClick={handleClose}><Link to={link.path} key={link.title} className={classes.navLink}> {link.title}</Link></MenuItem>)
              })
            }
          </Menu>
          </Hidden>
          <Hidden only={['sm', 'xs', 'md']}>
          {
            navLinks.map( link => {
              return (<Link to={link.path} key={link.title} className={classes.navLink}> {link.title}</Link>)
            })
          }
      </Hidden>
        </Box>
    )
}
