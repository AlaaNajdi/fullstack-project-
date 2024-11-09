import React, { createContext, useEffect, useState } from 'react'
import { getAllUsers } from '../services/userService';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [pageSize] = useState(10);
  const [sortBy, setSortBy] = useState("name");
  const [sortOrder, setSortOrder] = useState("asc");
  const [Token, setToken] = useState();
  const [isAdmin, setIsAdmin] = useState(false);
  const [userName, setUserName] = useState(null);
  const [userId, setUserId] = useState(null);
  const [userLoggedInData, setUserLoggedInData] = useState(null)


  useEffect(() => {
    const fetchUsers = async () => {
      setIsLoading(true);
      try {
        const response = await getAllUsers(searchTerm, currentPage, pageSize, sortBy, sortOrder);
        setUsers(response.users);
        setTotalPages(Math.ceil(response.users.totalCount / pageSize));
        if (currentPage > Math.ceil(response.users.totalCount / pageSize)) {
          setCurrentPage(Math.ceil(response.users.totalCount / pageSize));
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
    const storedToken = JSON.parse(localStorage.getItem('token'));
    const storedUserLoggedIn = JSON.parse(localStorage.getItem('userLoggedIn'));
    const storedUserIsAdmin = JSON.parse(localStorage.getItem('isAdmin'));

    if (storedToken && storedUserLoggedIn == true) {
      setToken(storedToken);
      setUserLoggedIn(true);
      setIsAdmin(storedUserIsAdmin);
    }
  }, []);


  const signOutUser = () => {
    localStorage.setItem('token', null);
    localStorage.setItem('userLoggedIn', false);
    localStorage.setItem('isAdmin', false);

    setUserLoggedIn(false);
    setToken(null);
    setIsAdmin(false);
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
