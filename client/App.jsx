/* eslint-disable no-plusplus */
/* eslint-disable import/extensions */
import React, { Component } from 'react';
import youtube from './apis/youtubeAPI.js';
import SearchBarComponent from './components/SearchBarComponent.jsx';
import VideoPlayerComponent from './components/VideoPlayerComponent.jsx';
import SideBarComponent from './components/SideBarComponent.jsx';
import './stylesheets/styles.css';

const MAX_PLAYLIST_ITEMS = 5;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videoList: [],
      titleList: [],
      thumbnailList: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    fetch('/')
      .then(res => res.json())
      .catch(err => console.log('ERROR: ', err));
  }

  handleSubmit(searchTerm) {
    youtube
      .get('https://www.googleapis.com/youtube/v3/search', {
        params: {
          keys: 'API KEY HERE',
          q: searchTerm,
        },
      })
      .then((response) => {
        console.log(response);
        const videoTemp = [];
        const titleTemp = [];
        const thumbnailTemp = [];
        const max = response.data.items.length;
        const oldRand = [-1];

        for (let i = 0; i < MAX_PLAYLIST_ITEMS; i++) {
          console.log(response.data.items[i].snippet.title);

          let rand = Math.floor(Math.random() * max);
          while (oldRand.includes(rand)) {
            rand = Math.floor(Math.random() * max);
          }

          oldRand.push(rand);
          videoTemp.push(`https://www.youtube.com/watch?v=${response.data.items[rand].id.videoId}`);
          titleTemp.push(response.data.items[rand].snippet.title);
          thumbnailTemp.push(response.data.items[rand].snippet.thumbnails.default.url);
        }

        this.setState({ videoList: videoTemp, titleList: titleTemp, thumbnailList: thumbnailTemp });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <SideBarComponent
          videoList={this.state.videoList}
          titleList={this.state.titleList}
          thumbnailList={this.state.thumbnailList}
        />
        <SearchBarComponent
          handleSubmit={this.handleSubmit}
        />
        <br />
        <VideoPlayerComponent
          url={this.state.videoList[0]}
          videoList={this.state.videoList}
        />
      </div>
    );
  }
}

export default App;
