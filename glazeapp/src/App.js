import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import List from "./pages/List";
import Booking from "./pages/Booking";
function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/list" element={<List/>} />
      <Route path="/list/:id" element={<Booking/>} />
    </Routes>
   </BrowserRouter>
  );
}
export default App;