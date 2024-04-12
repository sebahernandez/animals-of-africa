import PropTypes from "prop-types";
import Masonry from "react-masonry-css";
import { FavoriteButton } from "./FavoriteButton";

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1,
};

export const CardExample = ({ data }) => {
  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {data.map((item, index) => (
        <div key={index} style={{ position: "relative" }}>
          <img
            src={item.webformatURL}
            alt={item.tags.split(",")[0]}
            style={{ width: "100%", display: "block" }}
          />
          <div style={{ position: "absolute", top: 10, right: 10 }}>
            <FavoriteButton item={item} />
          </div>
        </div>
      ))}
    </Masonry>
  );
};

CardExample.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      webformatURL: PropTypes.string,
      tags: PropTypes.string,
      views: PropTypes.number,
      downloads: PropTypes.number,
      pageUrl: PropTypes.string,
    })
  ),
};
