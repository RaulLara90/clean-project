import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    marginTop: '5px',
    marginLeft: '5px'

  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
})

export default function SimpleCard (props) {
  const classes = useStyles()
  const bull = <span className={classes.bullet}>•</span>

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color='textSecondary' gutterBottom>
          {props.title}
        </Typography>
        <Typography variant='h5' component='h2'>
          {props.director}
        </Typography>
        <Typography variant='h5' component='h3'>
          {props.year}
        </Typography>
        <Typography variant='h5' component='h4'>
          {props.duration}
        </Typography>
        <Typography className={classes.pos} color='textSecondary'>
          {props.rate}
        </Typography>

      </CardContent>
      {
        props.genre.map((a) => {
          return (
            <Typography key={a} variant='body2' component='p'>
              {a}
            </Typography>)
        })
      }
      <CardActions />
    </Card>
  )
}

Card.defaultProps = {
  genre: []
}
