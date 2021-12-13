import '@fortawesome/fontawesome-svg-core/styles.css'
import { projects, projectsInfo } from "./projectData"
import React, { useState } from 'react'
import AboutMe from "./components/AboutMe";
import Contact from './components/Contact';
import Footer from './components/Footer';
import Landing from "./components/Landing";
import Projects from './components/Projects';
import Quote from "./components/Quote";

function App() {
  const [projectId, setProjectId] = useState(1)
  
  function toggleModal() {  
      document.body.classList += " modal--open";
  }

  function getProjectID(projectID) {
    setProjectId(projectID)
  }
  
  return (
    <div className="App">
      <Landing projectsInfo={projectsInfo} projectId={projectId}/>
      <Quote />
      <AboutMe />
      <Projects toggleModal={toggleModal} projects={projects} getProjectID={getProjectID}/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
