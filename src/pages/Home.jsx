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
    <section className="hero-section-container">
      {data.offers.map((elem, index) => {
        return (
          <Link key={elem._id} to={`/offer/${elem._id}`}>
            <article key={index}>
              <div className="avatar">
                {elem.owner.account.avatar && (
                  //avatar de l'owner
                  <img
                    src={elem.owner.account.avatar.secure_url}
                    alt={elem.pruduct_name}
                  />
                )}
                {/* nom du owner */}
                <span>{elem.owner.account.username}</span>
              </div>
              {/* <p>{elem.product_name}</p>  == nom du produit mais pas besoin*/}
              {/* image du produit */}
              <img src={elem.product_image.url} alt="" />
              <p>{elem.product_price} €</p>
              {elem.product_details.map((detail, index) => {
                if (detail.MARQUE) {
                  return <p key={index}>{detail.MARQUE}</p>;
                } else if (detail.TAILLE) {
                  return <p>{detail.TAILLE}</p>;
                } else {
                  return null;
                }
              })}
            </article>
          </Link>
        );
      })}
    </section>
  );
};
export default Home;
