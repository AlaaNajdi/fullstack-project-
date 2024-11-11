import { createContext, useEffect, useState } from 'react';
import { getAllCategories, getAllProducts } from '../services/productService';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [pageSize] = useState(2);
  const [sortBy, setSortBy] = useState("name"); 
  const [sortOrder, setSortOrder] = useState("asc");

  const addProduct = (newProduct) => {
    setProducts((prevProducts) => [...prevProducts, newProduct]);
  };

 
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const response = await getAllProducts(searchTerm, currentPage, pageSize, sortBy, sortOrder);
        setProducts(response.product.items);
        setTotalPages(Math.ceil(response.product.totalCount / pageSize));

        if (currentPage > Math.ceil(response.product.totalCount / pageSize)) {
          setCurrentPage(Math.ceil(response.product.totalCount / pageSize));}

      } catch (error) {
        setError(error)
        console.error('Error fetching products:', error);
      } finally {
        setIsLoading(false)
      }
    };

  
  useEffect(() => {
    fetchProducts();
  }, [currentPage, pageSize, sortBy, sortOrder]);


  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const fetchedCategories = await getAllCategories();
        setCategories(fetchedCategories.categories);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);


  return (
    <ProductContext.Provider value={{
      products, setProducts, isLoading, error, searchTerm, setSearchTerm, currentPage, setCurrentPage, totalPages, pageSize, sortBy, setSortBy, sortOrder, setSortOrder, addProduct, categories, setCategories, fetchProducts
    }}>
      {children}
    </ProductContext.Provider>
  );
};

// export const useProductContext = () => {
//   return useContext(ProductContext);
// };