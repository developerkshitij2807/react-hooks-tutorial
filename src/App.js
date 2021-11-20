import { Routes, Route } from "react-router-dom";
import Main from "./pages/MainPage";
import UseState from "./pages/UseStatePage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="state" element={<UseState />} />
    </Routes>
  );
}
