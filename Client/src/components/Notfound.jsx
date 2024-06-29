import React from 'react'
import { Link } from 'react-router-dom'

const Notfound = () => {
  return (
    <div style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }}>
        <img src='/Images/not-found.svg' width='200px' alt='Not Found'/>
        <p>404 · Page not found</p>
        <Link to='/' style={
            {
                textDecoration: 'none',
                background: '#6C63FF',
                color: 'white',
                fontSize: 17,
                borderRadius: 5,
                padding: '10px 70px',
            }
        }>
            Return
        </Link>
    </div>
  )
}

export default Notfound