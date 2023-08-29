import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const Payment = () => {
  const [productInfo, setProductInfo] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
        );
        console.log(response.data);
        setProductInfo(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, [id]);
  return isLoading ? (
    <span>En cours de chargement</span>
  ) : (
    <section>
      <div>
        <h2>Résumé de la commande</h2>
        <p>Prix de l'article : {productInfo.product_price} €</p>
      </div>
    </section>
  );
};
export default Payment;
