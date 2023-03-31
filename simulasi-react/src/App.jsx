import "./App.css";
import LayoutComponent from "./components/layouts/LayoutComponent";
import AboutMe from "./pages/aboutMe/AboutMe";
import FormComponent from "./pages/form/FormComponent";

import HomePage from "./pages/homePage/HomePage";
import LoginPage from "./pages/loginPage/LoginPage";
import Portfolio from "./pages/portfolio/Portfolio";
import Route from "./router/Route";
import Home from "./pages/home/home";

function App() {
  return ( 
    <LayoutComponent>
      <Route path="/">
        <Home />
      </Route>
      <Route path="/Home">
        <Home />
      </Route>
      <Route path="/portfolio">
        <Portfolio />
      </Route>
      <Route path="/form">
        <FormComponent />
      </Route>
      <Route path="/login">
        <LoginPage />
      </Route>
    </LayoutComponent>
  );
}

export default App;
