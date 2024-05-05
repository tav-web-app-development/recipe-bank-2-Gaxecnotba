import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import "./assets/style.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/HomeRecipe";
import NewRecipe from "./Components/NewRecipe";
import Contact from "./Components/Contact";

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
  const handleAddRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
  };

  return (
    <>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <Home
                  recipes={recipes}
                  onEdit={EditRecipe}
                  onDelete={DeletedRecipe}
                />
              }
            />
            <Route
              path="/add-new-recipe"
              element={<NewRecipe addnewRecipe={handleAddRecipe} />}
            />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
