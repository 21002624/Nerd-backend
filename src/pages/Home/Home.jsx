import React from 'react'
import './Home.css';
import Profile from '../../Components/Profile/Profile'
import Group from '../../Components/Group/Group'
import Dashboard from '../../Components/Dashboard/Dashboard'
import Owntask from '../../Components/Owntask/Owntask';
import Monthlycalender from '../../Components/Monthlycalender/Monthlycalender';
import Setting from '../../Components/Setting/Setting';

const Home = () => {
  return (
    <section className='Home' >
        <div className="part1">
          <Profile />
          <Owntask />
          <Group />
          <Setting />
        </div>
        <div className="part2">
          <Dashboard />
        </div>
        <div className="part3">
          <Monthlycalender />
          
        </div>
    </section>
  )
}

export default Home
