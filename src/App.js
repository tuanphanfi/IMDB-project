import React, { useEffect, useState } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from './components/Nav'
import MovieBoard from './components/MovieBoard';
import CarouselAndUpNext from './components/CarouselAndUpNext/CarouselAndUpNext'
import FeatureToday from './components/FeatureToday/FeatureToday'
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css'

const apikey = process.env.REACT_APP_APIKEY;

function App() {
  
  let [genres, setGenres] = useState(null);
  let [yearValue, setYearValue] = useState({ min: 1970, max: 2020 })
  let [originList, setOriginalList] = useState(null)
  // let [rating, setRating] = useState(null)
  console.log(apikey)
  let [movieList, setMovieList] = useState(null);
  const callMovie = async () => {
    let url = `https://api.themoviedb.org/3/movie/popular?api_key=${apikey}&language=en-US&page=1`
    console.log(url)
    // let url = `https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;
    console.log(url)
    let result = await fetch(url);
    let data = await result.json();
    console.log("data", data);
    setOriginalList(data.results)
    setMovieList(data.results);
    //console.log("movieList", movieList);
  }

  const filterByYear = (value) => {
    setYearValue(value)
    let filteredList = originList.filter(item => (item.release_date).split("-")[0] >= value.min && (item.release_date).split("-")[0] <= value.max)
    setMovieList(filteredList)

  }


  //get genres
  const getGenres = async () => {

    // let url = `https://api.themoviedb.org/3/movie/popular?api_key=${apikey}&language=en-US&page=1`
    let url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apikey}&language=en-US`

    let result = await fetch(url);
    let data = await result.json();
    console.log("data", data)
    setGenres(data.genres);
    console.log("genres", data.genres);
    callMovie();
  }

  // const getNowPlaying = async (pageNum) => {
  //   let url = `https://api.themoviedb.org/3/movie/popular?api_key=${apikey}&language=en-US&page=${pageNum}`
  //   let result = await fetch(url);
  //   let data = await result.json();
  //   setMovieList(data.results);
  //   // setOriginalList(data.results);
  //   // setTotalResult(data, total_results)

  // }

  // run at first
  useEffect(() => {
    getGenres()
  }, []);

  if (movieList == null) {
    return (<div>
      <h2>loading</h2>;
    </div>);
  }

  return (
    <div className="App">
      <div className="container-fluid">
        <Nav />
        <InputRange
          maxValue={2020}
          minValue={1970}
          value={{ min: yearValue.min, max: yearValue.max }}
          onChange={value => {

            filterByYear(value)
          }} />

        <CarouselAndUpNext></CarouselAndUpNext>
        <FeatureToday></FeatureToday>
        <MovieBoard movieList={movieList} genres={genres}></MovieBoard>

      </div>

    </div>
  );
}

export default App;