import "./App.css";
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Se agregó Routes aquí
import Information from "./pages/Information";
import Dashboard from "./pages/dashboard";
import Login from "./pages/Login";
import DogsPage from "./pages/DogsPage"; // Importamos la nueva página pública
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dogs" element={<DogsPage />} /> {/* Punto 1: Página no protegida */}
            <Route element={<PrivateRoute />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/information" element={<Information />} /> 
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;