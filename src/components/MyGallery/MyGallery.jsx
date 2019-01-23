import React, { Component } from "react";
import { render } from "react-dom";
import Gallery from "react-photo-gallery";
import Lightbox from "react-images-texts-videos";

// import image1_move from "assets/gif/relatedtags.gif";
// import image1 from "assets/gif/shot.png";

const gifs = require.context("../../assets/gif", true);
const jpgs = require.context("../../assets/jpg", true);

// const photos = [
//   {
//     src: require("assets/gif/relatedtags.gif"),
//     width: 5,
//     height: 3
//   },
//   {
//     src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
//     width: 5,
//     height: 3
//   }
// ];

// const photos_move = [
//   {
//     src: image1_move,
//     width: 12,
//     height: 6
//   },
//   {
//     src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
//     width: 12,
//     height: 1
//   },
//   {
//     src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
//     width: 3,
//     height: 4
//   },
//   {
//     src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
//     width: 3,
//     height: 4
//   },
//   {
//     src: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
//     width: 3,
//     height: 4
//   },
//   {
//     src: "https://source.unsplash.com/NQSWvyVRIJk/800x599",
//     width: 4,
//     height: 3
//   },
//   {
//     src: "https://source.unsplash.com/zh7GEuORbUw/600x799",
//     width: 3,
//     height: 4
//   },
//   {
//     src: "https://source.unsplash.com/PpOHJezOalU/800x599",
//     width: 4,
//     height: 3
//   },
//   {
//     src: "https://source.unsplash.com/I1ASdgphUH4/800x599",
//     width: 4,
//     height: 3
//   }
// ];

class MyGallery extends Component {
  constructor() {
    super();
    this.state = { currentImage: 0 };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
    this.gotoItem = this.gotoItem.bind(this);
  }
  openLightbox(event, obj) {
    this.setState({
      currentItem: obj.index,
      lightboxIsOpen: true
    });
    // event.stopPropagation();
  }
  closeLightbox() {
    this.setState({
      currentItem: 0,
      lightboxIsOpen: false
    });
  }
  gotoPrevious() {
    this.setState({
      currentItem: this.state.currentItem - 1
    });
  }
  gotoNext() {
    this.setState({
      currentItem: this.state.currentItem + 1
    });
  }
  gotoItem(index) {
    this.setState({
      currentItem: index
    });
  }
  render() {
    const { imgs, imgs_big } = this.props;
    const cols = Math.min(imgs.length, 2);

    const photos = imgs.map(d => ({
      src: jpgs(d),
      width: 5,
      height: cols === 1 ? 2.3 : 3
    }));

    const photos_move = imgs_big.map(d => ({
      src: gifs(d.path),
      caption: d.cap,
      width: 5,
      height: 3
    }));

    return (
      <div>
        <Gallery
          photos={photos}
          onClick={this.openLightbox}
          columns={Math.min(photos.length, 2)}
        />
        <Lightbox
          items={{ type: "images", items: photos_move }}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentItem={this.state.currentItem}
          isOpen={this.state.lightboxIsOpen}
          showThumbnails={true}
          onClickThumbnail={this.gotoItem}
          showImageCount={true}
        />
      </div>
    );
  }
}

export default MyGallery;
