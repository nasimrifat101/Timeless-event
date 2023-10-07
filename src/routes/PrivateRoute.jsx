/* eslint-disable react/prop-types */
import { useContext, useEffect } from "react";
import { AuthContext } from "../authProvider/AuthPrivider";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
  const { user } = useContext(AuthContext);
 const location = useLocation();

 if(user){
    return children;
 }
  return <Navigate state={location.pathname} to='/login'></Navigate>;
};

export default PrivateRoute;
