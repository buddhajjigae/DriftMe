/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import ReactPlayer from 'react-player';

const VideoPlayerComponent = (props) => {
  const [currentUrlIndex, setCurrentUrlIndex] = React.useState(0);
  const [showNextButton, setShowNextButton] = React.useState(true);
  const [showPrevButton, setShowPrevButton] = React.useState(true);
  const numOfVids = props.videoList.length;
  let calledOnce = false;

  if (props.videoList.length === 0) {
    return (
      <div className="video-center">
        <ReactPlayer
          controls="true"
          playing="true"
          url={props.videoList[currentUrlIndex]}
          onEnded={() => setCurrentUrlIndex(prevUrlIndex => (prevUrlIndex + 1) % numOfVids)}
        />
      </div>
    );
  }

  if (currentUrlIndex === 0 && calledOnce === false) {
    calledOnce = true;
    return (
      <div className="video-center">
        <ReactPlayer
          controls="true"
          url={props.videoList[currentUrlIndex]}
          onEnded={() => setCurrentUrlIndex(prevUrlIndex => (prevUrlIndex + 1) % numOfVids)}
        />
        {showNextButton && (
        <button
          className="next-button"
          onClick={() => {
            setCurrentUrlIndex(
              prevUrlIndex => (prevUrlIndex + 1) % numOfVids,
            );
          }}
          style={{
            position: 'absolute',
            right: '40.5%',
            top: '102.5%',
            zIndex: 10,
            fontSize: '1.5em',
          }}
        >
          next
        </button>
        )}
        {showPrevButton && (
        <button
          className="prev-button"
          onClick={() => {
            setCurrentUrlIndex(
              prevUrlIndex => (prevUrlIndex - 1 + numOfVids) % numOfVids,
            );
          }}
          style={{
            position: 'absolute',
            right: '54%',
            top: '102.5%',
            zIndex: 10,
            fontSize: '1.5em',
          }}
        >
          prev
        </button>
        )}
      </div>
    );
  }

  return (
    <div className="video-center">
      <ReactPlayer
        controls="true"
        playing="true"
        url={props.videoList[currentUrlIndex]}
        onEnded={() => setCurrentUrlIndex(prevUrlIndex => (prevUrlIndex + 1) % numOfVids)}
      />
      {showNextButton && (
      <button
        className="next-button"
        onClick={() => {
          setCurrentUrlIndex(
            prevUrlIndex => (prevUrlIndex + 1) % numOfVids,
          );
        }}
        style={{
          position: 'absolute',
          right: '40.5%',
          top: '102.5%',
          zIndex: 10,
          fontSize: '1.5em',
        }}
      >
        next
      </button>
      )}
      {showPrevButton && (
        <button
          className="prev-button"
          onClick={() => {
            setCurrentUrlIndex(
              prevUrlIndex => (prevUrlIndex - 1 + numOfVids) % numOfVids,
            );
          }}
          style={{
            position: 'absolute',
            right: '54%',
            top: '102.5%',
            zIndex: 10,
            fontSize: '1.5em',
          }}
        >
          prev
        </button>
      )}
    </div>
  );
};

export default VideoPlayerComponent;
