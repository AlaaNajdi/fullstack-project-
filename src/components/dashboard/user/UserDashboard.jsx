import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const UserDashboard = () => {
  return (
    <div>
      <header className="dashboard-header">
          <h1>Welcome to the User Dashboard</h1>
        </header>
      <aside className="sidebar">
        <nav>
          <ul>
            <li><Link to="profile">Personal Profile</Link></li>
          </ul>
        </nav>
      </aside>
      <div className="main-content">
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default UserDashboard