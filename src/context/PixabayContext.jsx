import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const PixabayContext = createContext();

const AuthProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (image) => {
    if (!favorites.some((fav) => fav.id === image.id)) {
      setFavorites((prevFavorites) => [...prevFavorites, image]);
      toast.success("Añadido a favoritos!");
    } else {
      toast.error("hubo un error al añadir a favoritos!");
    }
  };

  const removeFavorite = (image) => {
    if (favorites.some((fav) => fav.id === image.id)) {
      setFavorites((prevFavorites) =>
        prevFavorites.filter((favorite) => favorite.id !== image.id)
      );
      toast.success("Removido de favoritos!");
    } else {
      toast.error("Imagen no encontrada en favoritos!");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://pixabay.com/api/?key=32664718-9cee0a4502f47e66ad6d59ba8&q=africa+Animals&image_type=photo&per_page=40"
        );
        const data = await response.json();
        setData(data.hits);
      } catch (error) {
        console.error("Error fetching data from Pixabay:", error);
        toast.error("Failed to fetch data from Pixabay");
      }
    };

    fetchData();
  }, []);

  return (
    <PixabayContext.Provider
      value={{
        data,
        setData,
        favorites,
        addFavorite,
        removeFavorite,
      }}
    >
      {children}
    </PixabayContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;
