import React from 'react'
import error from "../img/404notFound.jpeg"
import { useNavigate } from 'react-router-dom'


const Notfound = () => {
  const navigate = useNavigate()
  return (
    <div className='errorWrapper'>
      <img src={error} alt="error" />
      <div className="errbtnWrapper">
        <button onClick={() => navigate("/")}>Home</button>
        <button onClick={() => navigate(-1)}>Go back</button>
      </div>
    </div>
  )
}

export default Notfound