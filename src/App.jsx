import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router";
import Navbar from "./components/Navbar";
import Home from "./landing/page.jsx";
import Events from "./events/Page";
import EventPage from "./events/EventPage";
import Team from "./team/Page";
import Gallery from "./gallery/Page";
import Projects from "./projects/Page";
import Membership from "./membership/Page";
import Contact from "./contact/Page";
import ErrorPage from "./errorpage/Page"
import Footer from "./landing/sections/Footer";
import Loader from "./components/Loader";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="bg-neutral-50">
      <Navbar />
      <div className="h-18" />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:eventId" element={<EventPage />} />
        <Route path="/team" element={<Team />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pagenotfound" element={<ErrorPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
