import React from 'react'
import { NavLink } from 'react-router-dom'

export const Nav = () => {
    return (
        <nav className="nav">
            <ul>
                <li><NavLink to="/home">Inicio</NavLink></li>
                <li><NavLink to="/courses">Cursos</NavLink></li>
                <li><NavLink to="/crear">Crear Cursos</NavLink></li>
                <li><NavLink>Contacto</NavLink></li>
            </ul>
        </nav>
    )
}
