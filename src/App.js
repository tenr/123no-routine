import { Routes, Route } from "react-router-dom";
import "./App.css";
import Hero from "./components/Hero/Hero";
import Nav from "./components/Nav/Nav";
import EventCard from "./components/EventCard/EventCard";
import EventDetails from "./pages/EventDetails/EventDetails";
import Main from "./pages/Main/Main";
import AllEvents from "./pages/AllEvents/AllEvents";
import About from "./pages/About/About";
import { Profile } from "./pages/Profile/Profile";

function App() {
  return (
    <>
      <Nav />
      {/* <Events /> */}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/event-details" element={<EventDetails />} />
        <Route path="/events/all" element={<AllEvents />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
