import React, { Component } from 'react'

export default function Carousel() {

    let imgUrl = [
        'https://images-na.ssl-images-amazon.com/images/S/sgp-catalog-images/region_US/hj2p7-JQXB8XXMEXA-Full-Image_GalleryBackground-en-US-1588381999590._SX1080_.jpg',
        'https://upload.wikimedia.org/wikipedia/en/f/fe/1917_%282019%29_Film_Poster.jpeg',
        'https://img.theweek.in/content/dam/week/review/movies/images/2019/1/18/Mikhael-poster.jpg'

    ]
    // src={imgUrl[0]}
    return (
        <div id="carouselExampleIndicators" className="carousel slide col-8" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
                <li data-target="#carouselExampleIndicators" data-slide-to={1} />
                <li data-target="#carouselExampleIndicators" data-slide-to={2} />
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block w-100" src={imgUrl[0]} alt="First slide" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src={imgUrl[1]} alt="Second slide" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src="..." alt="Third slide" />
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="sr-only">Next</span>
            </a>
        </div>
    )
}
