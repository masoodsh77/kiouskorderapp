import React from 'react'
import { Link } from 'react-router-dom'

function Home(props) {
    return (
        <div className="w-100 h-100">
            <Link to="/Login"> LOGIN </Link>
        </div>
    )
}

export default Home
