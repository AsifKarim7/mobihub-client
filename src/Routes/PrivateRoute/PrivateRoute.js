import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const PrivateRoute = ({ children }) => {
    const location = useLocation();
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <progress className="progress flex justify-center items-center mx-auto w-56"></progress>;
    }

    if (user) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
}
export default PrivateRoute;
