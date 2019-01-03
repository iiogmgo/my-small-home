import React, {
  Component
} from 'react';
import './App.css';
import Gallery from './Gallery';
import Header from './Header';
import { THUMBNAIL_IMAGES } from './Resource';

class App extends Component {
  renderGallery() {
    return ( <Gallery images = {THUMBNAIL_IMAGES}
      showThumbnails />
    );
  }

  render() {
    return (
      <div>
        <Header />
        {this.renderGallery()}
      </div>
    )
  }
}

// const THUMBNAIL_IMAGES = [
//   {src: 'images/14.jpeg', orientation: 'square'},
//   {src: 'images/2.jpeg', orientation: 'square'},
//   {src: 'images/12.jpeg', orientation: 'landscape'},
//   {src: 'images/5.jpeg', orientation: 'landscape'},
//   {src: 'images/4.jpeg', orientation: 'landscape'},
//   {src: 'images/6.jpeg', orientation: 'landscape'},
//   {src: 'images/7.jpeg', orientation: 'square'},
//   {src: 'images/8.jpeg', orientation: 'landscape'},
//   {src: 'images/9.jpeg', orientation: 'landscape'},
//   {src: 'images/10.jpeg', orientation: 'landscape'},
//   {src: 'images/3.jpeg', orientation: 'landscape'},
//   {src: 'images/13.jpeg', orientation: 'landscape'},
//   {src: 'images/1.jpeg', orientation: 'landscape'},
// ];

export default App;
