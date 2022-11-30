import { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import useAuth from "./hooks/useAuth";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  const user  = useAuth();
  const [isSearching, setIsSearching] = useState(false);

  return (
    <BrowserRouter>
      <div
        className="h-screen"
        id="app"
        onClick={(e) => {
          if (e.target.id === "app") {
            setIsSearching(false);
          }
        }}
      >
        <Navbar isSearching={isSearching} setIsSearching={setIsSearching} />

        <main className="px-4">
          <Routes>
            <Route
              path="/"
              element={user ? <Home /> : <Navigate to="/login" />}
            />
            <Route
              path="/login"
              element={!user ? <Login /> : <Navigate to="/" />}
            />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
