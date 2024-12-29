"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const Play = () => {
  const router = useRouter()

  const handlePlay = () => {
    router.push("/game")
  }

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '80vh',
      margin: 0 
    }}>
      <button 
        onClick={handlePlay} 
        style={{
          padding: '15px 30px',
          fontSize: '16px',
          backgroundColor: '#4CAF50',
          color: 'black',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',

        }}
      >
        <h1>Play Game</h1>
      </button>
    </div>
  )
}

export default Play
