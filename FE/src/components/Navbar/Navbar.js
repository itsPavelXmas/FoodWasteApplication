import React from 'react'
import { AppBar, Toolbar, Box} from "@material-ui/core";
import { Link } from 'react-router-dom';
import { ReactComponent as Logo }  from '../../img/logo.svg';
import SvgIcon from '@material-ui/core/SvgIcon';
import { whiteLabelStyles }from '../../styles'
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { useDispatch, useSelector } from "react-redux";


export default function Navbar() {

    const classes = whiteLabelStyles();
    
    

    const { isLoggedIn } = useSelector(state => state.authReducers);


    return (
        <AppBar position="fixed" className={[classes.navbar, classes.glass].join(' ')}>
          <Toolbar>
            <Box flexGrow={0.5}> </Box>
            <Box display='flex' flexGrow={1}>
            <Link to="/" > 
                <SvgIcon width="113px" height="27px" viewBox="0 0 113 27" style={{width:113}}>
                   <Logo />
                </SvgIcon>
            </Link>
            </Box>
            {
              isLoggedIn ? (<SignedInLinks/>) : (<SignedOutLinks/>)
            }

   
            <Box flexGrow={0.5}></Box>
          </Toolbar>
      </AppBar>
    )
}
