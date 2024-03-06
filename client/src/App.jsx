import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Dashboard from "./Pages/Dashboard";
import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";
import Projects from "./Pages/Projects";
import Header from "./Components/Header";
import FooterComp from "./Components/Footer";
import PrivateRoute from "./Components/PrivateRoute";

import CreatePost from "./Pages/CreatePost";
import IsAdminPrivateRoute from "./Components/IsAdminPrivateRoute";
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route element={< IsAdminPrivateRoute />} >
          <Route path="/create-post" element={<CreatePost/>} />
        </Route>
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="projects" element={<Projects />} />
      </Routes>
      <FooterComp />
    </BrowserRouter>
  );
};

export default App;
