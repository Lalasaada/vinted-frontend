import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/offers"
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, []);

  return isLoading ? (
    <p>Loading ...</p>
  ) : (
    <div>
      <section className="hero-section-container">
        {data.offers.map((elem, index) => {
          return (
            <div>
              <p key={index}>{elem.product_name}</p>
              <img src={elem.product_pictures.secure_url} alt="" />
            </div>
          );
        })}
      </section>

      <Link to="/offer">Naviguer vers la page offer</Link>
    </div>
  );
};
export default Home;
