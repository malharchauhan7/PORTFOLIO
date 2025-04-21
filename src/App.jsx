import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Games from "./pages/Games";
import Connect from "./pages/Connect";
import Newsletter from "./pages/Newsletter";
import Designs from "./pages/Designs";
import Blog from "./pages/Blog";
import BlogPost from "./components/BlogPost";
import Projects from "./pages/Projects";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Designs" element={<Designs />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/blog/:slug" element={<BlogPost />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
