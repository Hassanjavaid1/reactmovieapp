import React from "react";
import Gallery from "react-image-gallery";
import './Demo.css'
import "react-image-gallery/styles/css/image-gallery.css";

const Demo = () => {
    const images = [
        {
            original: "https://picsum.photos/id/1018/1000/600/",
            thumbnail: "https://picsum.photos/id/1018/250/150/",
            title: "Image 1 Title",
            description: "This is a description for Image 1.",
        },
        {
            original: "https://picsum.photos/id/1018/1000/600/",
            thumbnail: "https://picsum.photos/id/1018/250/150/",
            title: "Image 2 Title",
            description: "This is a description for Image 2.",
        },
        {
            original: "https://picsum.photos/id/1018/1000/600/",
            thumbnail: "https://picsum.photos/id/1018/250/150/",
            title: "Image 3 Title",
            description: "This is a description for Image 3.",
        },
    ];

    const options = {
        showThumbnails: true,
        thumbnailPosition: "bottom", // Change position of thumbnails (top, bottom, left, right)
        thumbnails: true, // Show thumbnails as small images beneath the main image
        slideInterval: 2000, // Set autoplay speed for thumbnails
        showThumbnails: true, // Display thumbnails
        thumbnailClass: "custom-thumbnail-class", // Add custom class to thumbnails
        showNav: false,
        // lazyLoad: true,
        showFullscreenButton: false,
        showPlayButton: false,
    }
    const renderCustomItem = (item) => (
        <div className="custom-slide">
            <img src={item.original} alt={item.title} />
            <div className="custom-content">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <button onClick={() => alert(`Clicked on ${item.title}`)}>
                    Learn More
                </button>
            </div>
        </div>
    );


    return (
        <div className="gallery-container">
            <Gallery items={images} renderItem={renderCustomItem} {...options} />

        </div>
    );
};

export default Demo;
