import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Header() {
    const [username , setUsername]= useState('')
    useEffect(()=>{
        axios.get("http://localhost:1337/users/me" ,{
        headers: {
            Authorization:
              `Bearer ${localStorage.getItem('token')}`,
          },})
          .then(res=>{
              setUsername(res.data.name);
          })
    })
    return (
        <div className="Header">
            <div>
                <a>داشبورد</a>
            </div>
            <div>
                سلام {username} عزیز
            </div>
        </div>
    )
}

export default Header
