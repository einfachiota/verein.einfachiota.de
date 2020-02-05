import React from 'react'

const Departments = ({ departments, departmentActive, sideBarActive }) => {
  return (
    <div className={`sidebar ${sideBarActive ? 'open' : ''}`}>
      <h1> {departments[departmentActive].title}</h1>
      <p>{departments[departmentActive].description}</p>
    </div>
  )
}

export default Departments
