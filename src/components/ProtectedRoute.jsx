import { Navigate, Outlet } from "react-router-dom"

export default function ProtectedRoute({ user, redirectTo = "/" }) {
    if (!user.logged) {
        return <Navigate to={redirectTo} />
    }
    return <Outlet />
}