import React, { useState } from "react";
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Loading from "../coctailcomponent/Loading";

const Singlecoktail = () => {
  const { id } = useParams();

  const [loading, setLoadiing] = useState(false);
  const [cocktail, setCocktails] = useState(null);

  useEffect(() => {
    setLoadiing(true);

    async function getCoctail() {
      try {
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        const data = await response.json();
        if (data.drinks) {
          const {
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strCategory: categeory,
            strGlass: glass,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = data.drinks[0];

          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ];

          const newCocktail = {
            name,
            image,
            info,
            categeory,
            glass,
            instructions,
            ingredients,
          };

          setCocktails(newCocktail);
        } else {
          setCocktails(null);
        }
        setLoadiing(false);
      } catch (error) {
        console.log(error);
        setLoadiing(false);
      }
    }
    getCoctail();
  }, [id]);

  if (loading) {
    return <Loading />;
  }
  if (!cocktail) {
    return <h2 className="single-titel">oops no cocktail for display</h2>;
  }

  const { name, image, categeory, info, glass, instructions, ingredients } =
    cocktail;
  return (
    <section className="cotail-section">
      <div className="singgle-titel"><h2>List</h2></div>

      <div className="flex">
        <div className="drinks">
          <img src={image} alt={name} />
        </div>

        <div className="drnk-info">
          <p>
            <span className="drink-data">name:  {name}</span><br/>
            <span className="drink-data">categeory:  {categeory}</span><br/>
            <span className="drink-data">glass:  {glass}</span><br/>
            <span className="drink-data">info:  {info}</span><br/>
            <span className="drink-data">instructions:  {instructions}</span><br/>
          </p>

          <p className="drink-data">
            ingredients:
            {ingredients.map((item, index) => {
              return item ? <span key={index}>{item}</span> : null;
            })}
          </p>
        </div>
      </div>
      <Link to={"/"} className="btn-backhome">
        backhome
      </Link>
    </section>
  );
};

export default Singlecoktail;
