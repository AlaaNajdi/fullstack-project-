import React, { createContext, useContext, useEffect, useState } from 'react'

import { getAllUsers } from '../services/userService';
import { CartContext } from './CartContext';
import jwtDecode from 'jwt-decode'; 


export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [pageSize] = useState(2);
  const [sortBy, setSortBy] = useState("name");
  const [sortOrder, setSortOrder] = useState("asc");
  const [Token, setToken] = useState();
  const [isAdmin, setIsAdmin] = useState(false);
  const [userName, setUserName] = useState(null);
  const [userId, setUserId] = useState(null);
  const [userLoggedInData, setUserLoggedInData] = useState(null)
  const { setCart } = useContext(CartContext)
 

  useEffect(() => {
    const fetchUsers = async () => {
      setIsLoading(true);
      try {
        const response = await getAllUsers(searchTerm, currentPage, pageSize, sortBy, sortOrder);
        setUsers(response.users);
        setTotalPages(Math.ceil(response.totalCount / pageSize));
        if (currentPage > Math.ceil(response.totalCount / pageSize)) {
          setCurrentPage(Math.ceil(response.totalCount / pageSize));
        }
      } catch (error) {
        setError(error)
        console.error('Error fetching users:', error);
      } finally {
        setIsLoading(false)
      }
    };
    fetchUsers();

  }, [currentPage, pageSize, sortBy, sortOrder]);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    const storedUserLoggedIn = JSON.parse(localStorage.getItem('userLoggedIn'));
    const storedUserIsAdmin = JSON.parse(localStorage.getItem('isAdmin'));

    if (storedToken && storedUserLoggedIn === true) {
      setToken(storedToken);
      setUserLoggedIn(true);
      setIsAdmin(storedUserIsAdmin);

      try {
        const decodedUserId = jwtDecode(storedToken);
        console.log("Decoded User ID:", decodedUserId.nameid);
        setUserId(decodedUserId.nameid); 
        localStorage.setItem("userId", decodedUserId.nameid); 
      } catch (error) {
        console.error("Error decoding token:", error);
      }
    } else {
      signOutUser();
    }
  }, []);


  const signOutUser = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userLoggedIn');
    localStorage.removeItem('isAdmin');
    localStorage.removeItem('cart')
    localStorage.removeItem('userId');

    setUserLoggedIn(false);
    setToken(null);
    setIsAdmin(false);
    setCart([]);
    setUserId(null);
  };

  return (
    <UserContext.Provider value={{ users, setUsers, userLoggedIn, setUserLoggedIn, isLoading, setIsLoading, error, setError, searchTerm, setSearchTerm, currentPage, setCurrentPage, totalPages, setTotalPages, pageSize, Token, setToken, signOutUser, isAdmin, setIsAdmin, userName, setUserName, setUserId, setUserLoggedInData, sortBy, setSortBy, sortOrder, setSortOrder }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider
// export const useUserContext = () => {
//   return useContext(UserContext);
// };
