import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Snoking from "./components/Projects/Snoking";
import Relay from "./components/Projects/Relay";
import Ultimatexi from "./components/Projects/Ultimatexi";
import Harkive from "./components/Projects/Harkive";

const PROJECTS = [
  {
    id: 1,
    name: "Snoking Hockey Website Redesign",
    imagePath: "projectImages/snoking.jpg",
    link: "/snoking",
    dscrp: "A webpage designed for the local hockey association that I played for growing up"
  },
  {
    id: 2,
    name: "Relay App Design",
    imagePath: "projectImages/relay.png",
    link: "/relay",
    dscrp: "A Figma design for an inspiring tech startup from YCombinator"
  },
  {
    id: 3,
    name: "Qatar World Cup Ultimate XI",
    imagePath: "projectImages/ultimatexi.jpg",
    link: "/ultimatexi",
    dscrp: "A React game to pick your favorite players at the 2022 World Cup"
  },
  {
    id: 4,
    name: "Harkive",
    imagePath: "projectImages/harkive.jpg",
    link: "/harkive",
    dscrp: "A full stack web app to store, share, and monitize your digital consumption"
  }
]

function App() {

  const [section, setSection] = useState(null);
  const [page, setPage] = useState("Home");

  const navHandler = (clickedElement, p) => {
    setSection(clickedElement);
    setPage(p);
  }

  let pageToRender = <Home projects={PROJECTS} section={section} navHandler={navHandler} />;
  switch(page) {
    case "Home":
      pageToRender = <Home projects={PROJECTS} section={section} navHandler={navHandler} />;
      break;
    case "Snoking Hockey Website Redesign":
      pageToRender = <Snoking snokingObj={PROJECTS[0]} />;
      break;
    case "Relay App Design":
      pageToRender = <Relay relayObj={PROJECTS[1]} />;
      break;
    case "Qatar World Cup Ultimate XI":
      pageToRender = <Ultimatexi ultimatexiObj={PROJECTS[2]} />;
      break;
    case "Harkive":
      pageToRender = <Harkive harkiveObj={PROJECTS[3]} />;
      break;
  }

  return (
    <div>
      <div className="absolute w-full sticky top-0 z-50">
        <Navbar navHandler={navHandler} />
      </div>
        {/* <Route path="/" element={<Home projects={PROJECTS} section={section} />} />
        <Route path="/snoking" element={<Snoking snokingObj={PROJECTS[0]} />} />
        <Route path="/relay" element={<Relay relayObj={PROJECTS[1]} />} />
        <Route path="/ultimatexi" element={<Ultimatexi ultimatexiObj={PROJECTS[2]} />} />
        <Route path="/harkive" element={<Harkive harkiveObj={PROJECTS[3]} />} /> */}
        {pageToRender}
    </div>
  );
}

export default App;
