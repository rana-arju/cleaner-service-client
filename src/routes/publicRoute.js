import Home from "../pages/Home/Home";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Services from "../pages/Services";
import Login from "../pages/Login";

export const publicRoute = [
  {path: "/", name: "Home", Component: Home},
  {path: "/about", name: "About", Component: About},
  {path: "/contact", name: "Contact", Component: Contact},
  {path: "/services", name: "Services", Component: Services},
  {path: "/login", name: "Login", Component: Login}
];