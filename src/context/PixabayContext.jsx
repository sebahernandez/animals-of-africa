import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

export const PixabayContext = createContext();

const AuthProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (image) => {
    setFavorites([...favorites, image]);
  };

  const removeFavorite = (image) => {
    setFavorites(favorites.filter((favorite) => favorite.id !== image.id));
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
      }
    };

    fetchData();
  }, []);

  return (
    <PixabayContext.Provider
      value={{ data, setData, favorites, addFavorite, removeFavorite }}
    >
      {children}
    </PixabayContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;
