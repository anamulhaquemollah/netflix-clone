import React from 'react'
import Main from '../components/Main'
import MovieRow from '../components/MovieRow'
import requests from '../Reqeust'

const Home = () => {
  return (
    <div className='text-white'>
        <Main/>
        <MovieRow id={1} title={"Upcoming"} url={requests.requestUpcoming}/>
        <MovieRow id={2} title={"Trending"} url={requests.requestTrending}/>
        <MovieRow id={3} title={"Popular"} url={requests.requestPopular}/>
        <MovieRow id={4} title={"Horror"} url={requests.requestHorror}/>
    </div>
  )
}

export default Home