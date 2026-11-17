import React from "react";
class GreetClassBased extends React.Component {
  render() {
    return <h1>Welcome {this.props.user} to Class Based Component</h1>;
  }
}
export default GreetClassBased;
