import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { useContext } from "react";
import { Auth } from "./contexts/Auth";

const test = "CLA";

function App() {
  const { user } = useContext(Auth);
  console.log("Rendering: App");

  return (
    <BrowserRouter>
      <div className="h-screen">
        <Navbar />

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
            <Route path="/*" element={<Home />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
