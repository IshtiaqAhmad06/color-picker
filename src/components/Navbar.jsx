import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div style={{ background: theme === "light" ? "#eee" : "#333", padding: "60px" }}>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default Navbar;