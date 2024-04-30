import { PropTypes } from "prop-types";
import { useState } from "react";

export default function RecipeContainer({ recipe, onEdit, onDelete }) {
  RecipeContainer.propTypes = {
    recipe: PropTypes.object.isRequired,
    onEdit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
  };

  const [edit, setEdit] = useState(false);

  const handleEdit = () => {
    setEdit(true);
  };

  const handleSave = () => {
    onEdit(recipe);
    setEdit(false);
  };

  const handleDelete = () => {
    onDelete(recipe.id);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onEdit({
      ...recipe,
      [name]: value,
    });
  };

  return (
    <div className="recipe-container">
      <div className="recipe">
        {edit ? (
          <textarea
            type="text"
            name="title"
            value={recipe.title}
            onChange={handleInputChange}
          >
            {recipe.title}
          </textarea>
        ) : (
          <h2>{recipe.title}</h2>
        )}
        {edit ? (
          <label htmlFor="description">
            Description:
            <textarea
              type="text"
              id="description"
              name="description"
              value={recipe.description}
              onChange={handleInputChange}
            >
              {recipe.description}
            </textarea>
          </label>
        ) : (
          <p>
            <strong>Description:</strong>
            {recipe.description}
          </p>
        )}
        {edit ? (
          <label htmlFor="ingredients">
            Ingredients:
            <textarea
              name="ingredients"
              id="ingredients"
              cols="30"
              rows="10"
              value={recipe.ingredients}
              onChange={handleInputChange}
            >
              {recipe.ingredients}
            </textarea>
          </label>
        ) : (
          <p>
            <strong>Ingredients:</strong> {recipe.ingredients}
          </p>
        )}
        {edit ? (
          <label htmlFor="directions">
            Direction:
            <textarea
              id="directions"
              name="directions"
              value={recipe.directions}
              onChange={handleInputChange}
              cols="60"
              rows="20"
            >
              {recipe.directions}
            </textarea>
          </label>
        ) : (
          <p>
            <strong>Directions:</strong> {recipe.directions}
          </p>
        )}
        <img
          src={recipe.photoUrl}
          alt={recipe.title}
          width={300}
          height={300}
        />
      </div>
      <div className="button">
        {edit ? (
          <>
            <button type="button" onClick={handleSave}>
              Save
            </button>
            <button type="button" onClick={() => setEdit(false)}>
              {" "}
              Cancel
            </button>
          </>
        ) : (
          <>
            <button type="button" onClick={handleEdit}>
              Edit
            </button>
            <button type="button" onClick={handleDelete}>
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
}
