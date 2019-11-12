import React, { useState } from 'react'
import Drawer from '@material-ui/core/Drawer'
import TextField from '@material-ui/core/TextField'
import Radio from '@material-ui/core/Radio'
import Cards from './Cards'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'

export default function DrawerCustom (props) {
  const [genre, setGenre] = useState('')
  const [film, setFilm] = useState('')
  const [director, setDirector] = useState('')

  const handleGenre = event => {
    setGenre(event.target.value)
  }

  const handleFilm = event => {
    setFilm(event.target.value)
  }

  const handleDirector = event => {
    setDirector(event.target.value)
  }

  return (
    <>
      <Drawer open={props.open} onClose={props.onClose}>
        <div style={{ padding: '20px', display: 'flex', flexDirection: 'column' }}>
          <strong>FILTERS</strong>

          <TextField
            id='film'
            label='Film'
            value={film}
            onChange={handleFilm}
          />
          <TextField
            id='director'
            label='Director'
            value={director}
            onChange={handleDirector}
          />
          <br />
          <strong>GENRE</strong>
          <br />

          <RadioGroup aria-label='gender' name='genre' value={genre} onChange={handleGenre}>
            <FormControlLabel value='drama' control={<Radio />} label='Drama' />
            <FormControlLabel value='crime' control={<Radio />} label='Crime' />
            <FormControlLabel value='action' control={<Radio />} label='Action' />
            <FormControlLabel value='thriller' control={<Radio />} label='Thriller' />
            <FormControlLabel value='biography' control={<Radio />} label='Biography' />
            <FormControlLabel value='history' control={<Radio />} label='History' />
            <FormControlLabel value='adventure' control={<Radio />} label='Adventure' />
          </RadioGroup>
        </div>
      </Drawer>
      <Cards film={film} director={director} genre={genre} movies={movies} />
    </>
  )
}
