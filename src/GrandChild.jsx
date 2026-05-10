
import { useContext } from "react";
import { CreateContext } from "./CreateContext";



function GrandChild() {
  const user = useContext(CreateContext);
  return <h1>Hello {user}</h1>;
}
export default GrandChild