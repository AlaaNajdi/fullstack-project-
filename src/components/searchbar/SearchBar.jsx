import React, { useContext, useState } from 'react'
import { ProductContext } from '../../context/Productcontext';

const SearchBar = ({ onSearch }) => {
  const { setSearchTerm } = useContext(ProductContext);
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchValue(value); 
    setSearchTerm(value); 
    onSearch(value);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="search about product"
        value={searchValue}
        onChange={handleSearchChange}
      />
    </div>
  )
}

export default SearchBar
