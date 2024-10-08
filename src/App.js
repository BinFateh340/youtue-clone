import React from "react";

import { Grid } from "@mui/material";
import youtube from './api/youtube';
import { SearchBar, VideoDetail, VideoList } from './components';

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null
  }

  componentDidMount() {
    this.handleFormSubmit('life of a software engineer in US');
  }

  onVideoSelect = (video) => {
    this.setState({selectedVideo: video})
  }

  handleFormSubmit = async (searchTerm) => {
    const response = await youtube.get('search', {params: {q: searchTerm}});
    
    this.setState({videos: response.data.items, selectedVideo: response.data.items[0]});
  }

  render() {
    const { selectedVideo, videos } = this.state;
    return(
      <>
        <Grid justify="center" container spacing={10}>
          <Grid item xs={12}>
            <Grid container spacing={10}>

              <Grid item xs={12}>
                <SearchBar onFormSubmit={this.handleFormSubmit} />
              </Grid>
              <Grid item xs={12}>
                <VideoDetail video={selectedVideo} />
              </Grid>
              <Grid item xs={4}>
                <VideoList videos = {videos} onVideoSelect={this.onVideoSelect} />
              </Grid>
 
            </Grid>
          </Grid>
        </Grid>
      </>
    )
  }
}

export default App;