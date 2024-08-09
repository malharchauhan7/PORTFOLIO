import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Games from "./pages/Games";
import Connect from "./pages/Connect";
import Blogs from "./pages/Blogs";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/connect" element={<Connect />}></Route>
          <Route path="/blogs" element={<Blogs />}></Route>
          {/* <Route path="/games" element={<Games />}></Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
