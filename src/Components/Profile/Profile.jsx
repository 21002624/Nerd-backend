import React from 'react'
import './Profile.css';
import user from '../../assets/user.png';

const Profile = () => {
  return (
    <div className='Profile'>
      <div className="profileImgContainer">
        <img className='userImg' src={user} alt='userImg' />
      </div>
      <div className="profileDetailsContainer">
        <h4>Akzhxx</h4>
      </div>
      <div className="profileFollowersContainer">
        <div className='smallText'>
          Groups: 10
        </div>
        <div className='smallText'>
          Progress: 75
        </div>
      </div>
    </div>
  )
}

export default Profile
