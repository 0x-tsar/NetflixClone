import React, { useEffect, useState} from 'react'
import Tmdb from './Tmdb'
import MovieRow from './components/MovieRow';
import "./App.css"

export default ()=>{

  const[movieList, setMovieList] = useState([])

  useEffect(()=>{
    const loadAll = async()=>{
      // getting total list
      let list = await Tmdb.getHomeList()
      setMovieList(list)
      console.log(list)

    }

    loadAll()

  },[])



    return(
        <div className='page'>
          <section className="lists">
              { movieList.map((item, key)=>(
                <MovieRow key={key} title={item.title} items={item.items}/>
              )) }
          </section>
        </div>
    )
}