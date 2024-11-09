import React, { useContext } from 'react';
import { UserContext } from '../../../context/Usercontext';
import Pagination from '../../pagination/Pagination';
import { DeleteAdminUser } from '../../../services/adminService';


const Users = () => {
  const { users, currentPage, setCurrentPage, totalPages, searchTerm, setUsers } = useContext(UserContext);

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = async (userId) => {
    try {
      const response = await DeleteAdminUser(userId);
      if (response.ok) {
        const updatedUsers = users.filter(user => user.userId !== userId);
        setUsers(updatedUsers); 
      } else {
        alert('some error when updated user');
      }
    } catch (error) {
      console.error('Error deleting user:', error);
      alert('some error when deledted user');
    }
  };


  return (
    <div>
      {filteredUsers.map((user) => (
        <li key={user.userId}>
          <h3>Id: {user.userId}</h3>
          <h3>Name: {user.name}</h3>
          <p>Email: {user.email}</p>
          <button onClick={() => handleDelete(user.userId)}>Delete</button>
        </li>
      ))}
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>

  );
};

export default Users;
