import "./App.css";
import axios from "axios";
import React, { Component } from "react";
import Display from "./components/Display";
import cat1 from "./images/cat1.jpg";
import cat2 from "./images/cat2.jpg";
import cat3 from "./images/cat3.jpg";
import cat4 from "./images/cat4.jpg";
import cat5 from "./images/cat5.jpg";
import dog1 from "./images/dog1.jpg";
import dog2 from "./images/dog2.jpg";
import dog3 from "./images/dog3.jpg";
import dog4 from "./images/dog4.jpg";
import dog5 from "./images/dog5.jpg";

class App extends Component {
  state = {
    animals: [
      { type: "cat", img: cat1 },
      { type: "cat", img: cat2 },
      { type: "cat", img: cat3 },
      { type: "cat", img: cat4 },
      { type: "cat", img: cat5 },
      { type: "dog", img: dog1 },
      { type: "dog", img: dog2 },
      { type: "dog", img: dog3 },
      { type: "dog", img: dog4 },
      { type: "dog", img: dog5 },
    ],
    isOver: false,
    likes: { catlikes: 0, doglikes: 0 },
    dislikes: 0,
    counter: 0,
  };
  handleClick = (name, type) => {
    const counter = this.state.counter + 1;
    let isOver = this.state.isOver;
    counter >= 10 && (isOver = true);

    if (type === "dislike") {
      let dislikes = this.state.dislikes;
      dislikes++;
      this.setState({ dislikes: dislikes, counter: counter, isOver: isOver });
    } else {
      const likes = { ...this.state.likes };

      likes[`${name}likes`]++;
      this.setState({ likes, counter: counter, isOver: isOver }, () => {
        console.log(this.state);
      });
    }
  };
  render() {
    const { likes, dislikes, counter, isOver } = this.state;
    return (
      <div className="App">
        <h1>Cats or Dogs?</h1>
        <Display
          animal={this.state.animals[counter]}
          counter={counter}
          likes={likes}
          dislikes={dislikes}
          isOver={isOver}
          onClick={this.handleClick}
        />
      </div>
    );
  }
}
export default App;
