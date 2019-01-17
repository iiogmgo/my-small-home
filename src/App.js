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

  renderInfo() {
    return (
      <div className="App-section">
        <h3>Hello,</h3>
        <p>
          These are photos of my home.<br/>
          enjoy.<br/>
        </p>

        <h4>Hi,</h4>
        <p>I'm a developer who like photo, music and IU :)</p>

        <br/>
        my-small-home's <a href='https://github.com/iiogmgo/my-small-home'>github</a>
      </div>
    );
  }

  render() {
    return (
      <div>
        <Header />
        {this.renderInfo()}
        {this.renderGallery()}
      </div>
    )
  }
}

export default App;
