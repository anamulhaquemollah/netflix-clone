import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { AuthContextProvider } from "./context/AuthContext";

import Login from "./pages/Login";
import Account from "./pages/Account";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import ProtectedAccount from "./components/ProtectedAccount";

function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/account"
            element={
              <ProtectedAccount>
                <Account />
              </ProtectedAccount>
            }
          />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
