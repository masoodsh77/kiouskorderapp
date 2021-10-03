import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
function Home(props) {
    const handleStart = (e) =>{
        props.history.push("/resturants")
    }
    return (
        <div className="w-100 h-100 Home d-flex justify-content-center align-items-center flex-wrap">
            <h1>
            به مجموعه کای دای خوش آمدید
            </h1>
            <div className="w-100 footer" onClick={handleStart}>
                برای شروع صفحه را لمس کنید

            </div>
        </div>
    )
}

export default Home
