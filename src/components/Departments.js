import React, { useState } from 'react'
import Piece from '../assets/Piece'

const Departments = ({ departments, departmentActive }) => {
  const [isActive, setIsActive] = useState(false)

  const setDepartmentActive = () => {
    console.log('Es geht')
  }

  const teamOutput = departments.map(department => (
    <div
      className={`department department--${department.title} ${
        departmentActive === department.position ? 'active' : ''
      }`}
      key={department.position}
    >
      <div className={`leaders leaders--${department.leader}`}>
        <div className='team' />
        <div className='team' />
      </div>
      <div className={`members members--${department.member}`}>
        <div className='team' />
        <div className='team' />
        <div className='team' />
        <div className='team' />
      </div>
      <div className='symbol' onClick={setDepartmentActive}>
        <div className='team symbol__icon'>
          <img src={`/assets/${department.title.toLowerCase()}.svg`} alt='' />
        </div>
      </div>
      <Piece color={department.color} />
    </div>
  ))

  return <div className='departments'>{teamOutput}</div>
}

export default Departments
