import React from "react";

const Gallery = () => {
    const designs = [
        "src/assets/fashin1.jpg",
        "src/assets/fashin1.jpg",
        "src/assets/fashin1.jpg",
        "src/assets/fashin1.jpg",
        "src/assets/fashin1.jpg",
        "/images/design2.jpg",
        // Add more image paths
    ];

    return (
        <div>
            <h2 className="text-3xl font-bold mb-8 text-center">Gallery</h2>
            <div className="gallery grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                {designs.map((src, index) => (
                    <img key={index} src={src} alt={`Design ${index + 1}`} className="rounded shadow-lg" />
                ))}
            </div>
        </div>

    );
};

export default Gallery;
