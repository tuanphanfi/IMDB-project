import React, { Component } from 'react'
import {Col, Badge } from 'reactstrap';
export default function MovieCard({ movie, genres }) {
    // let item = props.movie

    return (
        <div className="movieCard     " >

            <img className="abc" src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="" />
            <div className="a text-muted">
                {movie.genre_ids.map(genre => {
                    return (
                        <Badge>
                            {genres.find(item=>item.id == genre).name}
                        </Badge>)
                })}
            </div>

            <h6 className="text-muted">{movie.popularity}</h6>
            {/* <h5 className="text-white">{item.title}</h5> */}

            <button className="w-100">+ Watchlist</button>
            <button className="w-100"><i class="fab fa-google-play"></i></button>
            {/* <h1>{genres}</h1> */}

        </div>
    )

}
