import { Route, Routes } from "react-router-dom";
import About from "./Components/About/About";
import Blogs from "./Components/Blogs/Blogs";
import DashBoard from "./Components/DashBoard/DashBoard";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import NavBar from "./Components/NavBar/NavBar";
import NotFound from "./Components/NotFound/NotFound";
import Reviews from "./Components/Reviews/Reviews";
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
