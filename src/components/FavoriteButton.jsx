import { useContext } from "react";
import { PixabayContext } from "../context/PixabayContext"; // Ajusta la ruta según sea necesario
import PropTypes from "prop-types";

export const FavoriteButton = ({ item }) => {
  const { favorites, addFavorite, removeFavorite } = useContext(PixabayContext);
  const isFavorited = favorites.some((favorite) => favorite.id === item.id);

  const toggleFavorite = () => {
    isFavorited ? removeFavorite(item) : addFavorite(item);
  };

  return (
    <div onClick={toggleFavorite} style={{ cursor: "pointer" }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill={isFavorited ? "red" : "none"}
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
      </svg>
    </div>
  );
};

FavoriteButton.propTypes = {
  item: PropTypes.object.isRequired,
};
