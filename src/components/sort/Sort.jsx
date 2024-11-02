import React, { useContext } from 'react'
import { ProductContext } from '../../context/Productcontext';

const Sort = ({ setSortOrder }) => {
  const { sortBy, setSortBy } = useContext(ProductContext);
  const handleSortChange = (newSortBy, newSortOrder) => {
    setSortBy(newSortBy);
    setSortOrder(newSortOrder);
  };

  return (
    <div>
      <select onChange={handleSortChange} value={sortBy}>
        <option value="">اختر ترتيب الفرز</option>
        <option value="price_asc">السعر من الأقل للأعلى</option>
        <option value="price_desc">السعر من الأعلى للأقل</option>
        <option value="name_asc">الاسم (تصاعدي)</option>
        <option value="name_desc">الاسم (تنازلي)</option>
      </select>
    </div>
  )
}

export default Sort
