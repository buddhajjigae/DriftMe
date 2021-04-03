import React, { Component } from 'react';
// eslint-disable-next-line import/extensions
import VideoListComponent from './VideoListComponent.jsx';

class SideBarComponent extends Component {
  componentDidMount() {
    const dropdown = document.getElementsByClassName('dropdown-btn');
    let i;

    // eslint-disable-next-line no-plusplus
    for (i = 0; i < dropdown.length; i++) {
      dropdown[i].addEventListener('click', function () {
        this.classList.toggle('active');
        const dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === 'block') {
          dropdownContent.style.display = 'none';
        } else {
          dropdownContent.style.display = 'block';
        }
      });
    }
  }

  render() {
    return (
      <div className="sidenav">
        <a href="/auth/login"> Login With Google </a>
        <a href="/auth/logout"> Logout </a>
        <button className="dropdown-btn">
          Playlist
          <i className="fa fa-caret-down" />
        </button>
        <div className="dropdown-container">
          <VideoListComponent
            videoList={this.props.videoList}
            titleList={this.props.titleList}
            thumbnailList={this.props.thumbnailList}
          />
        </div>
      </div>
    );
  }
}

export default SideBarComponent;
