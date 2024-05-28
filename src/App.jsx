import { Route, Routes } from "react-router-dom";
import Table from "./components/table/Table";
import Board from "./components/table/user/Board";
import Draft from "./components/table/user/Draft";
import Navbar from "./components/table/user/Navbar";

function App() {
  function handleClick() {
    alert("hello");
  }
  return (
    <>
    <Navbar/>
  <Routes>
  <Route  path="/" element={<Board/>}/>
  <Route  path="/table" element={<Table/>}/>
  <Route  path="/draft" element={<Draft/>}/>
  </Routes>
    </>
  );
}

export default App;
