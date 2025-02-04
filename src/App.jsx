import "./App.css";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import authservices from "./appwrite/auth";
import { login, logout } from "./store/authslice";
import { Header, Footer } from "./components/export";
import { Outlet } from "react-router-dom";

function App() {
  const [loading, setloading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authservices
      .getCurrentuser()
      .then((data) => {
        if (data) {
          dispatch(login({ data }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setloading(false));
  }, []);
  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
      <div className="w-full block">
        <Header />
        <main>
          TODO: <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null;
}

export default App;
