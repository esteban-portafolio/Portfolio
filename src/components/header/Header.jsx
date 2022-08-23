import React from 'react'
import './header.css'
import CTA from './CTA'

const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>Hellow I'm -- Hola Yo soy</h5>
                <h1>Esteban Mendoza</h1>
                <h5 className="text-light">Fullstack Developer</h5>
                <CTA/>

            </div>
        </header>
    )
}

export default Header