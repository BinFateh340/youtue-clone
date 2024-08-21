import React from "react";

// import { Grid } from "@mui/material";

import VideoItem from "./VideoItem";
import { Grid } from "@mui/material";

const VideoList = ({videos, onVideoSelect}) => {
        const listOfVideos = videos.map((video, id) =>  <VideoItem key={id} video={video} onVideoSelect={onVideoSelect} /> )
        return( 
                <Grid container spacing={10}>
                        {listOfVideos}
                </Grid>
        );
} 

export default VideoList;   