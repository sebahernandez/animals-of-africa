import { useContext } from "react";
import { PixabayContext } from "../context/PixabayContext";
import { CardExample } from "../components/Card";

const Favorites = () => {
  const { favorites } = useContext(PixabayContext);
  return (
    <div className="container-fluid" style={{ marginTop: "30px" }}>
      {favorites.length > 0 ? (
        <CardExample data={favorites} />
      ) : (
        <p>Debes seleccionar tus imagenes favoritas.</p>
      )}
    </div>
  );
};

export default Favorites;
