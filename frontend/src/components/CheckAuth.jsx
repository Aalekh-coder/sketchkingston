import { Navigate, useLocation } from "react-router"

const CheckAuth = ({ isAuth, user, children }) => {
    
    const location = useLocation();

    if (!isAuth && !(location.pathname.includes("/login") || location.pathname.includes("/register"))) {
        return <Navigate to="/auth/login" />
    }

    if (isAuth && (location.pathname.includes("/login") || location.pathname.includes("/register"))) {
        if (user?.role === "isSeller") {
            return <Navigate to="/seller/dashboard"/>
        } else {
            return <Navigate to="/shop"/>
        }
    }
  return (
    <div>CheckAuth</div>
  )
}

export default CheckAuth