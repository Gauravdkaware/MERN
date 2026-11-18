import "./App.css";
import PersonalInfo from "./components/PersonalInfo";
import { personalInfo } from "./data.js";
function App() {
  return (
    <>
      <PersonalInfo data={personalInfo} />
    </>
  );
}

export default App;
