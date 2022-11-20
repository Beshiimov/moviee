import { Routes, Route, Navigate } from "react-router-dom";
import Nav from "./Pages/Nav/Nav";
import "./App.css";
import HeaderContainer from "./Pages/Header/HeaderContainer";
import HomePageContainer from "./Pages/HomePage/HomePageContainer";
import CinemaContainer from "./Pages/Cinema/Cinema-Container";
import SearchContainer from "./Pages/Search/SearchContainer";
// import LibraryContainer from "./Pages/Library/LibraryContainer";

function App() {
  return (
    <div className="App">
      <HeaderContainer />
      <Nav />
      <main>
        <Routes>
          <Route path="/home" element={<HomePageContainer />} />
          <Route path="/cinema/id/:id" element={<CinemaContainer />} />
          <Route path="/search" element={<SearchContainer />} />
          <Route path="/*" element={<Navigate to="/home" />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
