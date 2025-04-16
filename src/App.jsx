import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Counter from "./components/Counter";
import TodoList from "./components/TodoList";
import ThemeToggle from "./components/ThemeToggle";
import ShoppingCart from "./components/ShoppingCart";
import Auth from "./components/Auth";
import UserList from "./components/UserList";
import Calculator from "./components/Calculator";
import EventManager from "./components/EventManager";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/counter" element={<Counter />} />
            <Route path="/todo" element={<TodoList />} />
            <Route path="/theme" element={<ThemeToggle />} />
            <Route path="/cart" element={<ShoppingCart />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/users" element={<UserList />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/events" element={<EventManager />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
