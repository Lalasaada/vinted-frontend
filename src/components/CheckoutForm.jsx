import { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";

import axios from "axios";
const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [completed, setCompleted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const cardElement = elements.getElement(CardElement);
    const stripeResponse = await stripe.createToken(cardElement, {
      name: "L'id de l'acheteur",
    });
    console.log(stripeResponse);
    const stripeToken = stripeResponse.token.id;
    const response = await axios.post(
      " https://lereacteur-vinted-api.herokuapp.com/payment",
      {
        stripeToken,
        title: product_name,
        amount: product_price,
      }
    );
    console.log(response.data);
    if (response.data.status === "succeeded") {
      setCompleted(true);
    }
  };

  return (
    <>
      {!completed ? (
        <form className="container-offer" onSubmit={handleSubmit}>
          <h4>Résumé de la commande</h4>
          <div>
            <p>Commande</p>
            <p>Frais protection acheteurs</p>
            <span>O,40 €</span>
            <p>Frais de port</p>
            <span>0,80 €</span>
            <h3>TOTAL</h3>
            <span>{amount}</span>
          </div>

          <CardElement />
          <button type="submit">Valider</button>
        </form>
      ) : (
        <span>Paiement effectué ! </span>
      )}
    </>
  );
};

export default CheckoutForm;
