import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Booking from "./pages/Booking";
import ErrorPage from "./pages/error/ErrorPage";
function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/list" element={<List/>} />
      <Route path="/list/:id" element={<Booking/>} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
   </BrowserRouter>
  );
}
export default App;