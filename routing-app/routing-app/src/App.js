import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Notfound from "./pages/Notfound";
import Personnel from "./pages/Personnel";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PersonnelDetails from "./pages/PersonnelDetails";
import Paths from "./pages/Paths";
import Frontend from "./pages/Frontend";
import Backend from "./pages/Backend";
import PrivateRouter from "./pages/PrivateRouter";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/personnel" element={<Personnel />} />
        <Route path="/personnel/:id" element={<PersonnelDetails />} />
        <Route path="login" element={<Login />} />
          <Route path="contact" element={<PrivateRouter />}>
            <Route path="" element={<Contact />} />
          </Route>
        <Route path="/paths" element={<Paths />}>
          <Route path="frontend" element={<Frontend />} />
          {/* <Route index element={<Frontend />} /> */}
          <Route path="backend" element={<Backend />} />
        </Route>
        {/* <Route path="*" element={<Navigate to="/" />} /> */}
        <Route path="*" element={<Notfound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
