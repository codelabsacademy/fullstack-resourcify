import { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import EditUser from "./pages/EditUser";

const test = "CLA";

function App() {
  const [name, setName] = useState(test);
  console.log("Rendering: App");

  return (
    <BrowserRouter>
      <div className="h-screen">
        <Navbar/>

        <main className="px-4">
          <Routes>
            <Route path="/" element={<Home name={name} />} />
            <Route
              path="/user"
              element={<EditUser name={name} setName={setName} />}
            />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
