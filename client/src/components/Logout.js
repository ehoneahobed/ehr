import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {

    const navigate = useNavigate();

    function handleLogout() {
        // Remove token from local storage
        localStorage.removeItem('token');
    
        // Redirect to login page
        navigate('/login');
      }

    useEffect(() => {
      handleLogout();
    }, []);

  return (
    // <button onClick={handleLogout}>Logout</button>
    <></>
  )
}

export default Logout
