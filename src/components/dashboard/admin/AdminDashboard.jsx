import React from 'react'

import { Link, Outlet } from 'react-router-dom';
import UserSearchBar from '../../searchbar/UserSearchBar';

const AdminDashboard = () => {
  return (
    <div className="dashboard-layout">
      <header className="dashboard-header">
        <h1>Welcome to the Admin Dashboard</h1>
      </header>
      <aside className="sidebar">
        <UserSearchBar />
        <nav>
          <ul>
            <li><Link to="users">Users</Link></li>
            <li><Link to="Addproduct">Add product</Link></li>
            <li><Link to="Deleteproduct">Delete product</Link></li>
            <li><Link to="UpdateProduct/:id">Update Product</Link></li>
            <li><Link to="orders">Orders</Link></li>
          </ul>
        </nav>
      </aside>
      <div className="main-content">
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard