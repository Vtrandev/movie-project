import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Search from "./pages/Search";
import MovieDetail from "./pages/MovieDetail";

function App() {
  return (
    <Router>
      <div className="row">
        <Nav />

        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/search" exact element={<Search />} />
          <Route path="/search/:searchTerm" element={<Search />} />
          <Route path="/movie/:movieId" element={<MovieDetail />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
