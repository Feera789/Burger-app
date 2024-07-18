import "./App.css";
import React, { useState } from "react";

const App = () => {
  const [ingredients, setIngredients] = useState([]);

  const addIngredient = (type) => {
    setIngredients([...ingredients, type]);
  };
  const removeIngredient = (ingredientToRemove) => {
    setIngredients(
      ingredients.filter(
        (ingredient) => ingredient.name !== ingredientToRemove.name
      )
    );
  };

  return (
    <div className="burger">
      <h1 className="total">
        Total sum:{" "}
        {ingredients.reduce(
          (accumulator, ingredient) => accumulator + ingredient.cost,
          0
        )}
        {"$"}
      </h1>

      <div className="topSide"> </div>
      {ingredients.map((ingredient, index) => (
        <div key={index} className={ingredient.name}>
          {" "}
        </div>
      ))}
      <div className="bottomSide"> </div>

      <div className="ingredientsBlock">
        <div className="addBtns">
          <button
            className="ingrBtn"
            onClick={() => addIngredient({ name: "salad", cost: 4 })}
          >
            Add Salad
          </button>
          <button
            className="ingrBtn"
            onClick={() => addIngredient({ name: "tomato", cost: 1 })}
          >
            Add Tomato
          </button>
          <button
            className="ingrBtn"
            onClick={() => addIngredient({ name: "pickles", cost: 1 })}
          >
            Add Pickles
          </button>
          <button
            className="ingrBtn"
            onClick={() => addIngredient({ name: "cheese", cost: 2 })}
          >
            Add Cheese
          </button>
          <button
            className="ingrBtn"
            onClick={() => addIngredient({ name: "meat", cost: 8 })}
          >
            Add Meat
          </button>
        </div>

        <div className="removeBtns">
          <button
            className="ingrBtn"
            onClick={() => removeIngredient({ name: "salad", cost: 4 })}
          >
            Remove Salad
          </button>
          <button
            className="ingrBtn"
            onClick={() => removeIngredient({ name: "tomato", cost: 1 })}
          >
            Remove Tomato
          </button>
          <button
            className="ingrBtn"
            onClick={() => removeIngredient({ name: "pickles", cost: 1 })}
          >
            Remove Pickles
          </button>
          <button
            className="ingrBtn"
            onClick={() => removeIngredient({ name: "cheese", cost: 2 })}
          >
            Remove Cheese
          </button>
          <button
            className="ingrBtn"
            onClick={() => removeIngredient({ name: "meat", cost: 8 })}
          >
            Remove Meat
          </button>
        </div>
      </div>
      <button className="buyBtn">Buy now</button>
    </div>
  );
};

export default App;
