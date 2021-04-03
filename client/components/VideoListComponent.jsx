/* eslint-disable jsx-a11y/alt-text */
// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';

const VideoListComponent = (props) => {
  const myList = [];

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < props.videoList.length; i++) {
    myList.push(
      <div className="playlist-links">
        <a href={props.videoList[i]} className="playlist-links">
          {props.titleList[i]}
          <img className="thumbnail" src={props.thumbnailList[i]} width="90px" height="90px" />
        </a>
        <br />
      </div>,
    );
  }

  return (
    <div className="videoList-text">
      {myList}
    </div>
  );
};

export default VideoListComponent;
