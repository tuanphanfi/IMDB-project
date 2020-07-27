import React, { useState } from 'react'
import { Badge, Button } from 'reactstrap';
import Modal from 'react-bootstrap/Modal'

export default function MovieCard({ movie, genres }) {
    // let item = props.movie
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => {
        alert("hoho")
        setShow(true)
    };


    return (
        <>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
          </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
          </Button>
                </Modal.Footer>
            </Modal>


            <div className="movieCard" onClick={handleShow} >

                <img className="abc" src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="" />
                <div className="a text-muted">
                    {movie.genre_ids.map(genre => {
                        return (
                            <Badge>
                                {genres.find(item => item.id == genre).name}
                            </Badge>)
                    })}
                </div>

                <h6 className="text-muted">{movie.popularity}</h6>
                <h5 className="text-white">{movie.title.substring(0, 15) + (movie.title.length > 15 ? '...' : "")}</h5>

                <button className="w-100">+ Watchlist</button>
                <button className="w-100"><i class="fab fa-google-play"></i></button>
                {/* <h1>{genres}</h1> */}

            </div>
        </>

    )

}
