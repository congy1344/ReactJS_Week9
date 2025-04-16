import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/counter">Counter</Link>
        </li>
        <li>
          <Link to="/todo">Todo List</Link>
        </li>
        <li>
          <Link to="/theme">Theme Toggle</Link>
        </li>
        <li>
          <Link to="/cart">Shopping Cart</Link>
        </li>
        <li>
          <Link to="/auth">Auth</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
        <li>
          <Link to="/calculator">Calculator</Link>
        </li>
        <li>
          <Link to="/events">Events</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
