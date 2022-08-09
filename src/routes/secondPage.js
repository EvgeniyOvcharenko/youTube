import React from "react";

class SecondPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: true,
      myArr: [1, 2, 3, 4, 5, 6],
    };
  }

  componentDidMount() {
    console.log("didMount", this.state);
  }

  render() {
    console.log("render", this.state);
    return (
      <div>
        <button
          onClick={() => {
            this.setState((prevState) => ({ isVisible: !prevState.isVisible }));
          }}
        >
          Second page
        </button>
        {this.state.isVisible && <Test />}
      </div>
    );
  }
}

class Test extends React.Component {
  componentDidMount() {
    console.log("componentDidMount");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    console.log("render");
    return <p style={{ margin: "30px" }}>Test</p>;
  }
}

export default SecondPage;
