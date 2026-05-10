import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

const Home = () => {
  const { theme, user } = useContext(ThemeContext);

  return (
    <div style={{
        backgroundColor: theme === "light" ? "#fff" : "#222",
        color: theme === "light" ? "#000" : "#fff",
       padding:"50px",
       width:"1120px",
       height:"700px"
      }}>
      <h1>Welcome {user}</h1>
      <p>Current Theme: {theme}</p>
    </div>
  );
};

export default Home;