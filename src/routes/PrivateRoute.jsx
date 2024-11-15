import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Loadding from '../components/Loadding';

const PrivateRoute = ({children}) => {
    const location = useLocation();

    const { user,loading} = useContext(AuthContext);

    if(loading){
      return <Loadding/>
    }

     if(user && user?.email ){
        return children
     }
     return <Navigate state={location.pathname} to={'/auth/login'}></Navigate>
      

   
   
   
};

export default PrivateRoute;