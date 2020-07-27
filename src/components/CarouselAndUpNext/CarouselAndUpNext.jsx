import React, { Component } from 'react'
import Carousel from './Carousel'
import UpNext from './UpNext/UpNext'
export default function CarouselAndUpNext() {
    return (
        <div className="row">
            <Carousel></Carousel>
            <UpNext></UpNext>
        </div>
    )
}
