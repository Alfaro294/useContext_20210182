import React from "react";
import useFetchData from "../hooks/useFetchData";

const DogsPage = () => {
  const { data, loading, error, refetch } = useFetchData(
    "https://dog.ceo/api/breeds/image/random"
  );

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>Página Pública: Galería de Perros 🐶</h2>
      <p>Esta página es de acceso libre.</p>
      
      <hr style={{ margin: "20px 0" }} />

      {loading && <p>Cargando adorable perrito...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      
      {data && data.status === "success" && (
        <div>
          <img 
            src={data.message} 
            alt="Perro Aleatorio" 
            style={{ maxWidth: "400px", borderRadius: "8px", display: "block", margin: "10px auto" }} 
          />
          <button 
            onClick={refetch} 
            style={{ padding: "10px 20px", marginTop: "10px", cursor: "pointer" }}
          >
            ¡Ver otro perro!
          </button>
        </div>
      )}
    </div>
  );
};

export default DogsPage;