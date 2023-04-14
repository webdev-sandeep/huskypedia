import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Huskypedia from "./pages/Huskypedia";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Home />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="huskypedia" element={<Huskypedia />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
