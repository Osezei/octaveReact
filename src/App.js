// import "./App.css";
import "./index.css";

function NavBar() {
  return (
    <header>
      <h3 className="animate__animated animate__jello">octave</h3>

      <nav className="nav animate__animated animate__slideInDown">
        <ul>
          <li>
            <a href="#">therapy</a>
          </li>
          <li>
            <a href="#">virtual</a>
          </li>
          <li>
            <a href="#">coaching</a>
          </li>
          <li>
            <a href="#">groups</a>
          </li>
          <li>
            <a href="#">insurance</a>
          </li>
          <li>
            <a href="#">resources</a>
          </li>
          <li>
            <a href="#">location</a>
          </li>
        </ul>
      </nav>

      <div className="log animate__animated animate__slideInRight">
        <a href="#">Log in</a>
      </div>
    </header>
  );
}

export default NavBar;
