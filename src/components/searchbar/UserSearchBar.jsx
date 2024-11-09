import React, { useContext, useState } from 'react'
import { UserContext } from '../../context/Usercontext';

const UserSearchBar = () => {
  const { setSearchTerm } = useContext(UserContext);
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchValue(value);
    setSearchTerm(value); 
  };
  return (
    <input
      type="text"
      placeholder="Search for users"
      value={searchValue}
      onChange={handleSearchChange}
    />
  )
}

export default UserSearchBar
