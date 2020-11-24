import React from "react";
import "./styles/App.css";
import Sponsors from "./pages/sponsors";
import Home from "./pages/home";
import NavBar from "./pages/navbar";
import AboutOurTeam from "./pages/about-our-team";
import History from "./pages/history";
import WhoWeAre from "./pages/who-we-are";
import Footer from "./pages/footer";
import Documents from "./pages/documents";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Route exact path='/' component={Home} />
      <Route exact path='/sponsors' component={Sponsors} />
      <Route exact path='/about-our-team' component={AboutOurTeam} />
      <Route exact path='/who-we-are' component={WhoWeAre} />
      <Route exact path='history' component={History} />
      <Route exact path='/documents' component={Documents} />
      <Footer />
    </div>
  );
}

export default App;
