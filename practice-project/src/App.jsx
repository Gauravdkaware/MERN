import Button from "./components/Button";
import GreetClassBased from "./components/GreetClassBased";
import GreetFunctional from "./components/GreetFunctional";

function App() {
  const paraDesign = {
    color: "Blue",
    backgroundColor: "green",
  };
  return (
    <>
      <h1 style={{ textAlign: "center", color: "red" }}>Hello Worls!</h1>
      <p style={paraDesign}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur,
        quos?
      </p>
      <GreetFunctional user="Gaurav" />
      <GreetClassBased user="Pratik" />
      <Button name="Log In" />
      <Button name="Log Out" />
      <Button name="Submit" />
    </>
  );
}
export default App;
