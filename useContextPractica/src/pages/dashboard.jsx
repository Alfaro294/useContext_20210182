import React from "react";
import "../dashboard.css"
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const navigate = useNavigate();
    const { user, logOut } = useAuth();

    const handleLogout = () => {
        if(logOut()){
            navigate("/");
        }
    };

    return (
        <div className = "dashboard-container">
            <div className = "dashboard-card">
                <h1 className="dashboard-title">
                    Bienvenido al Dashboard
                </h1>

                <button className="dashboard-button" onClick={handleLogout}
            > Cerrar sesión
                </button></div>
        </div>
    )
}



