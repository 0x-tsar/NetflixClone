import React from 'react'
import './Header.css'

export default ({ison})=>{
    return (
        <header className={ison ? 'black' : ''}>
            <div className='featured--logo'>
                <a href="#">
                    <img alt="Netflix" src="https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-1-1.png"></img>
                </a>
            </div>
            <div className="featured--user">
                <a href="/">
                    <img alt="Usuário" src="https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg"></img>
                </a>
            </div>
        </header>
    )
}