import RecipeContainer from "./RecipeContainer";

export default function Home({ recipes, onEdit, onDelete }) {
  return (
    <>
      {recipes.map((data) => (
        <RecipeContainer
          recipe={data}
          key={data.id}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </>
  );
}
