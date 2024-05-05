import { useState } from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function NewRecipe({ addnewRecipe }) {
  const [newRecipe, setNewRecipe] = useState({
    title: "",
    description: "",
    ingredients: "",
    directions: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newRecipe);
    addnewRecipe(newRecipe);
  };

  const handleonChange = (field, value) => {
    setNewRecipe({
      ...newRecipe,
      [field]: value,
    });
  };

  return (
    <div className="recipe-container">
      <h2>Adding new Recipe</h2>
      <form onSubmit={handleSubmit}>
        <div className="recipe">
          <label htmlFor="title">Title:</label>
          <textarea
            name="title"
            id="title"
            type="text"
            value={newRecipe.title}
            onChange={(e) => handleonChange("title", e.target.value)}
          />
          <label htmlFor="description">Description:</label>
          <textarea
            name="description"
            id="description"
            value={newRecipe.description}
            onChange={(e) => handleonChange("description", e.target.value)}
          />
          <label htmlFor="ingredients">Ingredients:</label>
          <textarea
            name="ingredients"
            id="ingredients"
            value={newRecipe.ingredients}
            onChange={(e) => handleonChange("ingredients", e.target.value)}
          />
          <label htmlFor="directions">Directions:</label>
          <textarea
            name="directions"
            id="directions"
            value={newRecipe.directions}
            onChange={(e) => handleonChange("directions", e.target.value)}
          />
          <button type="submit">Submit new Recipe</button>
        </div>
      </form>
      <Link to="/">Go back and check the end of the page</Link>
    </div>
  );
}
