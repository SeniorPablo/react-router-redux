import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import '../assets/styles/components/CarouselItem.scss'
import playIcon from '../assets/static/play-icon.png'
import plusIcon from '../assets/static/plus-icon.png'
import deleteIcon from '../assets/static/delete-icon.png'
import { setFavorite, deleteFavorite } from '../redux/actions'

const CarouselItem = (props) => {

  const { id, cover, title, year, contentRating, duration, isList } = props
  const dispatch = useDispatch()

  const handleSetFavorite = () => {
    let newFavorite = { id, cover, title, year, contentRating, duration }
    dispatch(setFavorite(newFavorite))
  }

  const handleDeleteFavorite = () => {
    dispatch(deleteFavorite(id))
  }

  return (
      <div className="carousel-item">
        <img className="carousel-item__img" src={cover} alt={title}  />
        <div className="carousel-item__details">
          <div>
            <Link to={`/player/${id}`}>
              <img 
                className="carousel-item__details--img" 
                src={playIcon} alt="Play Icon" 
              />
            </Link>
            {
              isList 
              ? (
                  <img 
                    className="carousel-item__details--img" 
                    src={deleteIcon} alt="Delete Icon" 
                    onClick={handleDeleteFavorite}
                  />
              )
              : (
                  <img 
                    className="carousel-item__details--img" 
                    src={plusIcon} alt="Plus Icon" 
                    onClick={handleSetFavorite}
                  />
              )
            }
          </div>
          <p className="carousel-item__details--title">{title}</p>
          <p className="carousel-item__details--subtitle">
            {`${year} ${contentRating} ${duration}`}
          </p>
        </div>
    </div>
  )
}

export default CarouselItem