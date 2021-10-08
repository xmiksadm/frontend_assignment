import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
    return (
        <div>
            <h2>Stránka neexistuje</h2>
            <Link to='/'>Domov</Link>
        </div>
    )
}

export default NotFound
