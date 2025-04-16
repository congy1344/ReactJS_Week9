import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../store/themeSlice";

function ThemeToggle() {
  const theme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();

  return (
    <div className={`theme-toggle ${theme}`}>
      <h2>Theme Toggle</h2>
      <p>Current theme: {theme}</p>
      <button onClick={() => dispatch(toggleTheme())}>
        Toggle {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    </div>
  );
}

export default ThemeToggle;
