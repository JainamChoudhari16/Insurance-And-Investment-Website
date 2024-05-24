import { useSelector } from "react-redux"
import { Outlet, Navigate } from "react-router-dom";
export default function AdminPrivateRoute() {
    const {currentUser} = useSelector((state) => state.user);
  return (currentUser.roles[0].name === "ROLE_ADMIN") ? <Outlet /> : <Navigate to="/login" />;
}