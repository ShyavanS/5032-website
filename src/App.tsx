import React from "react";
import "./styles/App.css";
import Sponsors from "./pages/sponsors";
import Home from "./pages/home";
import Navbar from "./components/navbar";
import History from "./pages/history";
import About from "./pages/about-our-team";
import WhoWeAre from "./pages/who-we-are";
import Footer from "./components/footer";
import Documents from "./pages/documents";
import Calendar from "./pages/calendar";
import Announcements from "./pages/announcements";
import Gallery from "./pages/gallery";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Route exact path='/' component={Home} />
      <Route exact path='/sponsors' component={Sponsors} />
      <Route exact path='/about-our-team' component={About} />
      <Route exact path='/who-we-are' component={WhoWeAre} />
      <Route exact path='/history' component={History} />
      <Route exact path='/documents' component={Documents} />
      <Route exact path='/calendar' component={Calendar} />
      <Route exact path='/announcements' component={Announcements} />
      <Route exact path='/gallery' component={Gallery} />
      <Footer />
    </div>
  );
}

export default App;
