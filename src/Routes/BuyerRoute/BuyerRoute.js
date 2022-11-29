import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import useBuyer from "../../hooks/useBuyer/useBuyer";


const BuyerRoute = ({ children }) => {
    const location = useLocation();
    const { user, loading } = useContext(AuthContext);
    const [isBuyer, isBuyerLoading] = useBuyer(user?.email);

    if (loading || isBuyerLoading) {
        return <progress className="progress flex justify-center items-center mx-auto w-56"></progress>;
    }

    if (user && isBuyer) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
}
export default BuyerRoute;