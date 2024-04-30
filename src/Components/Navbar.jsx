function Navbar() {
  return (
    <>
      <div className="navbar">
        <h1>Recipe App</h1>
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Recipes</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/footer">End of Page</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
