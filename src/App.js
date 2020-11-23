import React, { useEffect, useState} from 'react'
import Tmdb from './Tmdb'
import MovieRow from './components/MovieRow';
import "./App.css"
import FeaturedMovie from "./components/FeaturedMovie.js"
import Header from './components/Header'

export default ()=>{

  const[movieList, setMovieList] = useState([])
  const[featuredData, setFeaturedData] = useState([])
  const[blackHeader, setBlackHeader] = useState(false);



  useEffect(()=>{
    const loadAll = async()=>{
      // getting total list
      let list = await Tmdb.getHomeList()
      setMovieList(list)

      let rnd = Math.round(Math.random()* list[0].items.results.length-1)  
      let chosen = list[0].items.results[rnd]

      let chosenInfo =  await Tmdb.getMovieInfo(chosen.id, 'tv')
  

      console.log(chosenInfo.id)
      setFeaturedData(chosenInfo)
      
    }

    loadAll()

  },[])


  // using another useEffect here just to separate things, not really necessary
  useEffect(()=>{
    const scrollListener = ()=>{
      if(window.scrollY>10){
        setBlackHeader(true);
      }else{
        setBlackHeader(false)
      }
    }

    window.addEventListener('scroll', scrollListener)

    return ()=>{
      window.removeEventListener('scroll', scrollListener)
    }
  },[])



    return(
        <div className='page'>

          <Header ison={blackHeader}/>

          {featuredData && 
              <FeaturedMovie item={featuredData}></FeaturedMovie>  
          }

          <section className="lists">
              { movieList.map((item, key)=>(
                <MovieRow key={key} title={item.title} items={item.items}/>
              )) }
          </section>
        </div>
    )
}