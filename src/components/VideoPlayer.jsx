import React, { useContext } from 'react';
import { Grid, Typography, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { SocketContext } from '../SocketContext';

//the styles
const useStyles = makeStyles((theme) => ({
  video: {
    width: '550px',
    [theme.breakpoints.down('xs')]: {
      width: '300px',
    },
  },
  gridContainer: {
    justifyContent: 'center',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  paper: {
    padding: '10px',
    border: '2px solid black',
    margin: '10px',
  },
}));
//end of the styles

const VideoPlayer = () => {

    const {name, callAccepted, myVideo, userVideo, callEnded, stream, call} = useContext(SocketContext); //to use useContext

    const classes = useStyles();

    return (
        <Grid container className={classes.gridContainer}>
            {/* our video */}
            {/* there is a bug, when you add stream the video doesn't show plus, the allow doesn't come */}
            {
                stream && (
            <Paper className={classes.paper}>
                <Grid item xs={12} md={6}>
                    <Typography variant='h5' gutterBottom>{name || 'Name'}</Typography>
                    <video playsInline muted ref={myVideo} autoplay className={classes.video} />
                </Grid>
            </Paper>
                )
            }
           
            {/* user video */}
            {
                callAccepted && !callEnded && (
            <Paper className={classes.paper}>
                <Grid item xs={12} md={6}>
                    <Typography variant='h5' gutterBottom>{call.name || 'Name'}</Typography>
                    <video playsInline ref={userVideo} autoplay className={classes.video} />
                </Grid>
            </Paper> 
                )
            }
             
        </Grid>
    )
}

export default VideoPlayer
