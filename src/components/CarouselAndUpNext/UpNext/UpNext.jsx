import React, { Component } from 'react'
import Images from './Images'
export default class UpNext extends Component {
    render() {
        return (
            <div className="col-4 d-flex flex-column " >
                <h2 className="text-danger">Up Next</h2>
                <Images></Images>
                <Images></Images>
                <Images></Images>
                <a href="#a"class="text-white"><h4>Browse Trailer</h4> </a>
            </div>
        )
    }
}
