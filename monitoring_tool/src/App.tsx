import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Logout from "./components/Logout/Logout";
import MainLayout from "./components/layout/MainLayout";
import { routes } from "./routes";

function App() {
  const [token, setToken] = useState();
  if (!token) {
    return <Login setToken={setToken} />;
  }
  return (
    <div>
{/* {token ? <Logout setToken={setToken} /> : ""} */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout token={token} setToken={setToken} />}>
          {routes}
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
