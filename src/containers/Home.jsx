import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'

import Search from '../components/Search'
import Categories from '../components/Categories'
import Carousel from '../components/Carousel'
import CarouselItem from '../components/CarouselItem'
import '../assets/styles/App.scss'

const Home = () => {

  const data = useSelector((state) => ({
      myList: state.myList,
      trends: state.trends,
      originals: state.originals
  }))

  return (
    <Fragment>
      <Search />
      {data.myList.length > 0 &&
        <Categories title="Mi Lista">
          <Carousel>
            {data.myList.map(item =>
              <CarouselItem 
                  key={item.id} 
                  {...item} 
                  isList
              />
            )}
          </Carousel>
        </Categories>
      }
      <Categories title="Tendencias">
        <Carousel>
          {data.trends.map(item =>
            <CarouselItem key={item.id} {...item} />
          )}
        </Carousel>
      </Categories>
      <Categories title="Originales de Platzi Video">
        <Carousel>
          {data.originals.map(item =>
            <CarouselItem key={item.id} {...item} />
          )}
        </Carousel>
      </Categories>
    </Fragment>
  )
}

export default Home