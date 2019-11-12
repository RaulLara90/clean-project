import React, { useState, useEffect } from 'react'
import Bar from './components/Bar'
import Card from './components/Card'
import './App.css'
import axios from 'axios'
import CircularProgress from '@material-ui/core/CircularProgress'

const styleCard = {
  display: 'flex',
  flexWrap: 'wrap'
}

const App = () => {
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    axios.get('http://localhost:3001/movies')
      .then((response) => {
        setMovies(response.data)
        setIsLoading(false)
      })
      .catch((error) => {
        console.log(error)
        setIsLoading(false)
      })
  }, [])

  return (
    <div className='App'>
      <Bar title='Test NavBar' />
      <div style={styleCard}>
        {isLoading ? <CircularProgress />
          : movies.map((movie, index) => (
            <Card
              title={movie.title}
              year={movie.year}
              rate={movie.rate}
              genre={movie.genre}
              director={movie.director}
              duration={movie.duration}
              key={`${movie.title}`}
            />))}
      </div>
    </div>
  )
}

export default App
