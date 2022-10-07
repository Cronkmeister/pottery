import "./App.scss";
import "./styles/global.scss";
// import NavBar from "./components/NavBar/NavBar";
import Landing from "./pages/Landing/Landing";
import Shop from "./pages/Shop/Shop";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import PaySuccess from "./pages/PaySuccess/PaySuccess";
import PayCancel from "./pages/PayCancel/PayCancel";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <NavBar /> */}
        <Routes>
          <Route path="/" exact element={<Landing />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/success" element={<PaySuccess />} />
          <Route path="/cancel" element={<PayCancel />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
