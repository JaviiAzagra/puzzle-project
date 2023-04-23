import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
