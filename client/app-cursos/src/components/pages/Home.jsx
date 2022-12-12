import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
    return (
        <div className='jumbo'>
            <h1>Bienvenido a los mejores cursos de Jardinería Online!</h1>
            <p>Aplicación experimental para proyectos LarnU Bootcamp</p>
            <Link to="/courses" className='button'>Ver Cursos</Link>

        </div>
    )
}
