import React, { Component } from 'react'
import MovieCard from './MovieCard';
import { Container } from 'react-bootstrap';


export default function MovieBoard({ movieList, genres }) {
    return (
        <Container>
            <div className="row d-flex justify-content-between ">
                {movieList.map(item => { return <MovieCard movie={item} genres={genres} /> })}
            </div>

        </Container>
    )

}
