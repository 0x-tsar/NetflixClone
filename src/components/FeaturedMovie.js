import React from 'react'
import './FeatureMovie.css'

export default ({item}) =>{
    let first_date = new Date(item.first_air_date)
    
    
    let genders = []
    for(let i in item.genres){
        genders.push(item.genres[i].name)
    }

    let description = item.overview
    if(description){
        description = description.substring(0,200);

        if(description[description.length-1] === '.'){
            description = description
            console.log('1')
        }
        else if(description[description.length-1] === '...'){
            description = description.substring(0,200)+''
            console.log('3')
        }
        else if(description[description.length-1] === ' '){
            description = description.substring(0,200)+'...'
            console.log('2')

        }
        else{
            description = description.substring(0,200)+'...'
            console.log('4')

        }
    }
    

    return (
       <div>
            <section className="featured" style={{
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundImage:  item.backdrop_path ? `url(https://image.tmdb.org/t/p/original/${item.backdrop_path})` :''
                }}>

                <div className='featured--vertical'>
                    <div className="featured--horizontal">
                    <div className="featured--name">{item.original_name}</div>
                    <div className="featured--info">
                        <div className="featured--vote">
                            {item.vote_average?item.vote_average +' pontos': ''}
                        </div>
                        <div className="featured--year">{
                            first_date.getFullYear() ? first_date.getFullYear() : '' 
                        }</div>
                     <div className="featured--seasons">{item.number_of_seasons} {
                             item.number_of_seasons && item.number_of_seasons === 1 ? 'Season' : 'Seasons' 
                        }</div>
                    </div>
                    <div className="featured--overview">{description}</div>
                    
                    <div className="featured--buttons">
                        <a href={`/watch/${item.id}`} className="featured--assistir">► Watch</a>
                        <a href={`/list/add/${item.id}`} className="featured--lista">+My List</a>
                    </div>
                    <div className="featured--gender"><strong>{genders.join(', ')}</strong>
                    </div>

                    </div>
                </div>
                
        </section>
       </div>
    )
}