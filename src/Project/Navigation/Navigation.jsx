import React from 'react'
import   './Navigation.css'
import Home from '../../components/Home'
const Navigation = () => {
  return (
    <div>
      <ul>
        <li><a href='../Project/Home.jsx'>Home</a></li>
        <li><a href="../About.jsx">AboutPage</a></li>
        <li><a href="../Severices.jsx">ServicePage</a></li>
      </ul>
    </div>
  )
}

export default Navigation
