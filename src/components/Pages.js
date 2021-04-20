import { green } from '@material-ui/core/colors';
import React, {useEffect, useState} from 'react'
import '../components/Pages.css'

export default () =>{

    // const[movieList, setMovieList] = useState(null);
    useEffect(()=>{
        
    },[])

    return (
        <div style={{display:'grid', placeItems:'center', marginBottom:'20px'}}>

            
            <section style={{width:'300px', height:'50px' ,background:'green', display:'grid', placeItems:'center'}}>            
                
                <div style={{display:'inline-flex', placeItems:'center'}}>
                    <div className='number' style={{ padding:'5px', marginLeft:'5px'}}>1</div>
                    <div className='number' style={{ padding:'5px', marginLeft:'5px'}}>2</div>
                    <div className='number' style={{ padding:'5px', marginLeft:'5px'}}>3</div>
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

