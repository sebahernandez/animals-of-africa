import { useContext } from "react";
import { PixabayContext } from "../context/PixabayContext"; // Adjust the path as necessary
import { CardExample } from "../components/Card";

const Favorites = () => {
  const { data } = useContext(PixabayContext);
  return (
    <div className="container-fluid " style={{ marginTop: "30px" }}>
      {data ? <CardExample data={data} /> : <p>Loading images...</p>}
    </div>
  );
};

export default Favorites;
