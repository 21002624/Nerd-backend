import React from 'react'
import './Group.css'
import Groupbtn from '../Button/Groupbtn'

const Group = () => {

  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div className='Group'>
      <div className="groupTitle">
        Groups
      </div>
      <div className="numberOfGroups">
          <Groupbtn label="Group " onClick={handleClick} variant="danger" />
          <Groupbtn label="Group" onClick={handleClick} variant="danger" />
          <Groupbtn label="Group" onClick={handleClick} variant="danger" />
      </div>
    </div>
  )
}

export default Group
