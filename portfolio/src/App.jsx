import "./App.css";
import AboutMe from "./components/AboutMe.jsx";
import PersonalInfo from "./components/PersonalInfo";
import Skills from "./components/Skills.jsx";
import { personalInfo, projects, skills } from "./data.js";
function App() {
  return (
    <>
      <PersonalInfo data={personalInfo} />
      <AboutMe
        data={{
          experience: personalInfo.experience,
          aboutTwo: personalInfo.aboutTwo,
          aboutThree: personalInfo.aboutThree,
          projectCount: projects.length,
        }}
      />
      <Skills data={skills} />
    </>
  );
}

export default App;
