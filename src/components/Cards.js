import React from 'react'

const Cards = (props) => {
  const { movies, film, director , genre} = props
  const filterFilms = []

  return filterFilms.map((movie, index) => (
    <Card
      title={movie.title}
      year={movie.year}
      rate={movie.rate}
      genre={movie.genre}
      director={movie.director}
      duration={movie.duration}
      key={`${movie.title}`}
    />))}
}

export { Cards }
