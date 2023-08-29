import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Publish = ({ token }) => {
  const [image, setImage] = useState();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [condition, setCondition] = useState("");
  const [city, setCity] = useState("");
  const [price, setPrice] = useState(0);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("brand", brand);
      formData.append("size", size);
      formData.append("color", color);
      formData.append("condition", condition);
      formData.append("city", city);
      formData.append("price", price);
      formData.append("picture", image);

      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/offer/publish",
        formData,
        {
          headers: {
            authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
      navigate("/");
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="hero-section-container">
      <h2>Vends ton article</h2>
      <div className="file-select">
        <label htmlFor="filePicker">Choisissez une image</label>
        <input
          style={{ display: "none" }}
          id="filePicker"
          type="file"
          onChange={(event) => {
            setImage(event.target.files[0]);
          }}
        />
        {image && <img src={URL.createObjectURL(image)} alt="" />}
      </div>

      <div className="text-input-section">
        <div className="text-input">
          <h3>Titre</h3>
          <input
            type="title"
            placeholder="ex: chemise Sézane verte"
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
        </div>
        <div className="text-input">
          <h3>Décris ton article</h3>
          <textarea
            type="text"
            placeholder="ex: porté quelques fois"
            onChange={(event) => {
              setDescription(event.target.value);
            }}
          />
        </div>
      </div>

      <div className="text-input-section">
        <div className="text-input">
          <h3>Marque</h3>
          <input
            type="text"
            placeholder="ex: Zara"
            onChange={(event) => {
              setBrand(event.target.value);
            }}
          />
        </div>
        <div className="text-input">
          <h3>Taille</h3>
          <input
            type="text"
            placeholder="ex: L / 40 /12"
            onChange={(event) => {
              setSize(event.target.value);
            }}
          />
        </div>
        <div className="text-input">
          <h3>Couleur</h3>
          <input
            type="text"
            placeholder="ex: Vert"
            onChange={(event) => {
              setColor(event.target.value);
            }}
          />
        </div>
        <div className="text-input">
          <h3>Etat</h3>
          <input
            type="text"
            placeholder="Neuf avec etiquette"
            onChange={(event) => {
              setCondition(event.target.value);
            }}
          />
        </div>
        <div className="text-input">
          <h3>Lieu</h3>
          <input
            type="text"
            placeholder="ex: Paris"
            onChange={(event) => {
              setCity(event.target.value);
            }}
          />
        </div>
      </div>
      <div className="text-input-section">
        <h3>Prix</h3>
        <input
          type="text"
          placeholder="0,00 €"
          onChange={(event) => {
            setPrice(event.target.value);
          }}
        />
      </div>
      <input className="submit" type="submit" value="Ajouter" />
    </form>
  );
};

export default Publish;
