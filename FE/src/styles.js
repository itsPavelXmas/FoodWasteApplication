import { makeStyles } from '@material-ui/core';

export const whiteLabelStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    navbar: {
        background:'transparent',
        color:'#01073C',
        boxShadow: 'none',
    },
    navLink: {
        color:"301073C",
        marginRight:10,
        fontWeight:600,
        textTransform: "capitalize",
        '&:hover': {
            color:'#0092F9',
        }
    },
    heroTitle:{
        fontWeight:'900',
        fontFamily: `'Roboto', sans-serif`,
        marginBottom:'20px',
        textTransform: 'uppercase',
        textAlign:'left'
    },
    heroButtons:{
        marginTop:'2.5em',
        minWidth:'100px',
        minHeight:'30px',
        padding:'1em 2em',
        background: '#0766FF',
        fontWeight:600,
        borderRadius:30,
        boxShadow: '0px 4px 20px rgba(2, 55, 140, 0.27)',
        marginRight:'50px',
        [theme.breakpoints.down('md')]: {
            padding:'1em 1em',
            marginRight:'auto',
        }
    },
    heroButtonsRegister:{
        marginTop:'20px',
        minWidth:'100px',
        minHeight:'30px',
        padding:'1em',
        fontWeight:600,
        borderRadius:30,
        color:'white',
        background: '#F69A04',
        boxShadow: '0px 13px 40px rgba(0, 0, 0, 0.15)',
        '&:hover': {
            background: '#F66A04'

        }
    },
    heroCard:{
        maxWidth:'400px',
        color:'#000000',
        padding:40,
        margin:'auto',
        textAlign:'left',
        [theme.breakpoints.down('md')]: {
            padding:10,
        },
        
    },
    cardShadow:{
        boxShadow: '0px 13px 40px rgba(0, 0, 0, 0.15) !important',
        margin:'auto'
    },
    glass:{
        background: "rgba(255,255,255,0.1)",
        backdropFilter: "blur(8px)",
        borderRadius:"8px 0 0 8px",
        borderBottom:"1px solid rgba(255,255,255,0.2)",
        boxShadow:"0px 8px 15px rgba(111, 111, 111, 0.15)",
    },
    cardBody:{
        color:'#1A1A1A',
        padding:10,
        maxWidth:300
    },
    responsiveImage:{
        maxHeight:700,
        width:'auto',
        margin:'auto',
        display:'block',
        [theme.breakpoints.down('md')]: {
            maxWidth:'100%',
            height:'auto'
        }
    },
    avatarColor:{
        background: '#0766FF'
    },
    dashboardCard:{
        margin:10,
    }

  }));