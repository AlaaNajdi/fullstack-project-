import React from 'react'

export const Sort = ({ sortBy, sortOrder, onSortByChange, onSortOrderChange }) => {
  return (
    <div>
      <label>
        Sort By:
        <select onChange={onSortByChange} value={sortBy}>
          <option value="" disabled>Select an option</option>
          <option value="name">Name</option>
          <option value="price">Price</option>
        </select>
      </label>
      <label>
        Sort Order:
        <select onChange={onSortOrderChange} value={sortOrder}>
          <option value="" disabled>Select an Order</option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </label>
    </div>
  )
}

export default Sort
