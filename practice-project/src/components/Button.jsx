import "./Button.css";
function Button(props) {
  return (
    <>
      <button className="btnDemo">{props.name}</button>
    </>
  );
}
export default Button;
