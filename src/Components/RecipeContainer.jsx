import { PropTypes } from "prop-types";
import { useState } from "react";

export default function RecipeContainer({ recipe, onEdit, onDelete }) {
  RecipeContainer.propTypes = {
    recipe: PropTypes.object.isRequired,
    onEdit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
  };

  const [edit, setEdit] = useState(false);
  const [editRecipe, setEditRecipe] = useState({ ...recipe });

  const handleEdit = () => {
    setEdit(true);
  };

  const handleSave = () => {
    onEdit(editRecipe);
    setEdit(false);
  };

  const handleDelete = () => {
    onDelete(recipe.id);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditRecipe({
      ...editRecipe,
      [name]: value,
    });
  };

  return (
    <div className="recipe-container">
      {edit ? (
        <div className="edit-recipe">
          <label htmlFor="title">
            Title:
            <input
              type="text"
              id="title"
              name="title"
              value={editRecipe.title}
              onChange={handleInputChange}
            />
          </label>
          <label htmlFor="description">
            Description:
            <input
              type="text"
              id="description"
              name="description"
              value={editRecipe.description}
              onChange={handleInputChange}
            />
          </label>
          <label htmlFor="ingredients">
            Ingredients:
            <textarea
              id="ingredients"
              name="ingredients"
              value={editRecipe.ingredients}
              onChange={handleInputChange}
              cols="30"
              rows="10"
            ></textarea>
          </label>
          <label htmlFor="directions">
            Directions:
            <textarea
              id="directions"
              name="directions"
              value={editRecipe.directions}
              onChange={handleInputChange}
              cols="60"
              rows="20"
            ></textarea>
          </label>
          <button type="button" onClick={handleSave}>
            Save
          </button>
        </div>
      ) : (
        <div className="recipe">
          <h2>{recipe.title}</h2>
          <p>
            <strong>Description:</strong>
            {recipe.description}
          </p>
          <p>
            <strong>Ingredients:</strong> {recipe.ingredients}
          </p>
          <p>
            <strong>Directions:</strong> {recipe.directions}
          </p>
          <img
            src={recipe.photoUrl}
            alt={recipe.title}
            width={300}
            height={300}
          />
        </div>
      )}
      <div className="button">
        <button type="button" onClick={handleEdit}>
          Edit
        </button>
        <button type="button" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}
