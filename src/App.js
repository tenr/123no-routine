import { Routes, Route } from "react-router-dom";
import "./App.css";

import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";

import EventDetails from "./pages/EventDetails/EventDetails";
import Main from "./pages/Main/Main";
import AllEvents from "./pages/AllEvents/AllEvents";
import About from "./pages/About/About";
import { Profile } from "./pages/Profile/Profile";
import { Login } from "./pages/Login/Login";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ThemeToggle from "./components/ThemeToggle/ThemeToggle"; // Import ThemeToggle

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

function App() {
  return (
    <>
      <Elements stripe={stripePromise}>
        <Nav />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/event-details/:event_id" element={<EventDetails />} />
          <Route path="/events" element={<AllEvents />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login-signup" element={<Login />} />
        </Routes>
        <Footer />
      </Elements>
    </>
  );
}

export default App;
