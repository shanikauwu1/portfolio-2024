import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import React, { useState, useEffect } from "react";
import SVGLogo from "./components/svgLogo";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay (e.g., fetching resources)
    const timer = setTimeout(() => {
      setIsLoading(false); // Set loading to false after 2 seconds
    }, 2000);

    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <NavBar />
      <main className="flex flex-col w-full items-center justify-center px-2 md:px-8 lg:px-16 dark:bg-black">
        <Hero />
        <Technologies />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

const Loader = () => (
  <div style={appStyle}>
    <SVGLogo />
  </div>
);
const appStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  height: "100vh",
  backgroundColor: "#bdc6d1",
};

export default App;
