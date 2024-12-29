import React from 'react'

const profile = ({user}) => {
  
  return (
    <>
  <div className="profile-container bg-blue-50 p-6 rounded-lg shadow-md max-w-lg mx-auto flex items-center my-52 border border-black border-opacity-100">
      <div className="profile-header flex items-center mb-6 ">
     
        <div>
          <h2 className="text-2xl font-bold text-blue-800 mr-3"> {user.name}</h2>
          
        </div>
      </div>
      <div className="profile-stats bg-white p-4 rounded-lg shadow-sm ml-16 flex flex-col justify-center items-center">
        <h3 className="text-xl font-semibold text-blue-700 mb-2">Profile Status</h3>
        <ul className="text-gray-800">
          <li><strong>Games Played:</strong> {user.gamesPlayed}</li>
          <li><strong>Total Winnings:</strong> ₹{user.totalWinnings}</li>
          
         
        </ul>
      </div>
     
    </div>
    
    </>
  )
}

export default profile
