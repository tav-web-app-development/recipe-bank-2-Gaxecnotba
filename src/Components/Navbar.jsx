import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <div className="navbar">
        <h1>Recipe App</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <a href="#">Recipes</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <a href="#footer">End of Page</a>
            </li>
            <li>
              <Link to="/add-new-recipe">Add new Recipe</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
