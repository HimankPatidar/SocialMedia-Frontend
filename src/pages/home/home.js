import React from 'react'
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/feed'
import Rightbar from '../../components/rightbar/Rightbar'
import "./home.css"

const Home = () => {
  return (
    <>
    
    <Topbar />
    <div className="homeContainer">
    <Sidebar />  
    <Feed />
    <Rightbar profile/>
    </div>
 
    </>

  )
}

export default Home