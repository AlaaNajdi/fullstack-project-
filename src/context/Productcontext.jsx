import { createContext, useEffect, useState } from 'react';
import { getAllProducts } from '../services/productService';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [pageSize] = useState(10);



  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const response = await getAllProducts(searchTerm, currentPage, pageSize);
        setProducts(response.product.items);
        setTotalPages(Math.ceil(response.product.totalCount / pageSize));
      } catch (error) {
        setError(error)
        console.error('Error fetching products:', error);
      } finally {
        setIsLoading(false)
      }
    };
    fetchProducts();

  }, []);


  return (
    <ProductContext.Provider value={{
      products, setProducts, isLoading, error, searchTerm, setSearchTerm, currentPage, setCurrentPage, totalPages, pageSize,}}>
      {children}
    </ProductContext.Provider>
  );
};

// export const useProductContext = () => {
//   return useContext(ProductContext);
// };