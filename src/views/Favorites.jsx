import { useContext } from "react";
import { PixabayContext } from "../context/PixabayContext";
import { CardExample } from "../components/Card";

const Favorites = () => {
  const { favorites } = useContext(PixabayContext);
  return (
    <div className="container-fluid" style={{ marginTop: "30px" }}>
      <h1>Tus imágenes favoritas</h1>
      {favorites.length > 0 ? (
        <CardExample data={favorites} />
      ) : (
        <p>Debes seleccionar tus imagenes favoritas.</p>
      )}
    </div>
  );
};

export default Favorites;
