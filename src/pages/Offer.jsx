import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";

const Offer = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
        );
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, [id]);

  return isLoading ? (
    <p>Loading ...</p>
  ) : (
    <div className="container-offer">
      <img src={data.product_image.secure_url} alt={data.product_name} />
      <section className="offer-info">
        <p>{data.product_price} €</p>
        {data.product_details.map((detail, index) => {
          const keys = Object.keys(detail);
          const key = keys[0];
          return (
            <p key={index}>
              {key} : {detail[key]}
            </p>
          );
        })}
        <div className="description">
          <h1>{data.product_name}</h1>
          <p>{data.product_description}</p>
          <img src={data.owner.account.avatar.secure_url} alt="" />
          <span>{data.owner.account.username}</span>
        </div>

        {/* {userToken ? (
          <Link to={`/payment/${id}`}>
            <button>Acheter</button>
          </Link>
        ) : (
          <span>redirection vers la page de connexion</span>
        )} */}
      </section>
    </div>
  );
};

export default Offer;
