import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Test from "./pages/Test.jsx";
import HashCode from "./pages/HashCode";

export default function App() {
  return (
    <Routes>
      <Route path="/Automation-Page" element={<Login />}></Route>
      <Route path="/Automation-Page/test" element={<Test />}></Route>
      <Route
        path="/Automation-Page/test/succeed"
        element={<HashCode />}
      ></Route>
    </Routes>
  );
}
