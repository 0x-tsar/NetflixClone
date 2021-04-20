import { green } from '@material-ui/core/colors';
import React, {useEffect, useState} from 'react'
import '../components/Pages.css'

export default () =>{

    // const[movieList, setMovieList] = useState(null);
    useEffect(()=>{
        console.log(document)

    },[])

    const handleNumber = (item)=>{
        console.log(item.target);
    }

    return (
        <div style={{display:'grid', placeItems:'center', marginBottom:'20px'}}>

            
            <section style={{width:'300px', height:'50px' ,background:'red', display:'grid', placeItems:'center'}}>            
                
                <div style={{display:'inline-flex', placeItems:'center'}}>
                    <div className='number' onClick={handleNumber} style={{backgroundColor:'black', padding:'5px', marginLeft:'5px'}}>1</div>
                    <div className='number' onClick={handleNumber} style={{backgroundColor:'black', padding:'5px', marginLeft:'5px'}}>2</div>
                    <div className='number' onClick={handleNumber} style={{backgroundColor:'black', padding:'5px', marginLeft:'5px'}}>3</div>
                </div>

            </section>
       

        </div>
    )
}



// {
//     [1,2,3,4,5,6].map((item, key)=>{
//     return(
//         <div key={key} style={{ display:'flex', placeItems:'center'}}>{item}</div>
//     );
//     })
// }

