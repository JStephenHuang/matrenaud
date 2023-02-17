import { Routes, Route, Link } from "react-router-dom";
import Home from "./view/pages/home";
import About from "./view/pages/about";
import Media from "./view/pages/media";
import Photos from "./view/pages/photos";
import Photo from "./view/pages/photo";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/photos" element={<Photos />}></Route>
      <Route path="/photo/:id" element={<Photo />}></Route>
      <Route path="/media" element={<Media />}></Route>
    </Routes>
  );
};

export default App;
