import { useCallback, useEffect, useMemo, useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import RecipeContainer from "./Components/RecipeContainer";
import "./assets/style.css";

function App() {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    fetchRecipes();
  }, []);
  const fetchRecipes = async () => {
    try {
      const response = await fetch(
        "https://api.sampleapis.com/recipes/recipes"
      );
      const data = await response.json();
      setRecipes(data);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  }; //I modify the code using async function and await syntax in order to rpovide a cleaner and more readable.
  // function filterRecipesComputeIntensive(recipes) {
  //   const now = performance.now();
  //   while (performance.now() - now < 1000) {
  //     //spin()
  //   }
  //   // return list.filter((word) => word.name.split(" ").length <= 4);
  // }
  // const filteredRecipes = useMemo(
  //   () => filterRecipesComputeIntensive(recipes),
  //   [recipes]
  // );
  // i create this arrow function to handle my edited recipe.
  const EditRecipe = (editRecipe) => {
    const updateRecipe = recipes.map((recipe) =>
      recipe.id === editRecipe.id ? editRecipe : recipe
    );
    setRecipes(updateRecipe),
      //it would check if the id of recipe object and my argument are equal, if it is truns  editRecipe, would be replaced by the editRecipe, if not it would be unchanged
      [];
  };

  //Now i used "useCallBack" to optimize performance by memoizing functions ,
  const DeletedRecipe = (recipeId) => {
    const prevRecipes = recipes.filter((recipe) => recipe.id !== recipeId);
    setRecipes(prevRecipes), [];
  };

  return (
    <>
      <Navbar />
      {recipes.map((data) => (
        <RecipeContainer
          recipe={data}
          key={data.id}
          onEdit={EditRecipe}
          onDelete={DeletedRecipe}
        />
      ))}
      <Footer />
    </>
  );
}

export default App;
