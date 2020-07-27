import React, { Component } from 'react'

export default function Images() {
    return (
        <div className="row p-2"
        // style={{ width: "350px", height: "150px" }}
        >
            <img class="col-3" src="https://m.media-amazon.com/images/M/MV5BN2FkYWQ1OWItMTc4Ni00Yzc4LWI0OGItMDMyMjU1MmFmZTlhXkEyXkFqcGdeQXVyNjMwMzc3MjE@._V1_.jpg" alt=""
                style={{ width: "67px", height: "150px" }}
            />
            <div className="col-9">
                <button>Play</button> <p>2:31</p>
                <h5 className="text-white">What to watch for cosplay inspiration</h5>
                <p className="text-muted">Streaming Picks for Great Costumes</p>

            </div>


        </div>
    )
}
