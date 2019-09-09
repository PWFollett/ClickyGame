import React, { Component } from 'react';
import Navbar from "./components/navbar";
import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";
import Image from "./components/image";
import Img from "./components/img.json"

//image imports
import dancingdog from "./components/images/dancingdog"
import doggiphy from "./components/images/doggiphy"
import drivingdog from "./components/images/dancingdog"
import exercisedog from "./components/images/exercisedog"
import floatingdog from "./components/images/floatingdog"
import happydog from "./components/images/happydog"
import hiddendog from "./components/images/hiddendog"
import pizzadog from "./components/images/pizzadog"
import scooterdog from "./components/images/scooterdog"
import slidingdog from "./components/images/slidingdog"
import smilesdog from "./components/images/smilesdog"
import typingdog from "./components/images/typingdog"

import './App.css';

class App extends Component {
  state = {
    picked: [],
    correct: 0,
    topscore: 0,
    message: 'Click an image to begin'
  };

//Shuffle Array
  shuffleArray = (array) => {
    let imgArray = Img;
    for (let i = imgArray.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [imgArray[i], imgArray[j]] = [imgArray[j], imgArray[i]];
    }
    return imgArray
  }

  pickImg = (name) => {
    console.log("Clicked!!");
    let picked = this.state.picked;
    
    if (picked.indexOf(name) === -1) {
      this.setState({
        picked: picked.concat(name),
        correct: this.state.correct + 1,
        topscore: this.state.correct + 1 > this.state.topscore ? this.state.correct + 1 : this.state.topscore,
        message: "Correct: Good choice!" 
      })
      this.shuffleArray();
    }
    else {
      this.setState({
        message: "Already Selected Game Over, Replay?",
        correct: 0,
        picked: []
      })
    }
  }

  imgSwitch = (name) => {
    switch (name) {
      case "dancingdog":
        return `${dancingdog}`
      case "doggpihy1":
        return `${doggiphy}`
      case "drivingdog":
        return `${drivingdog}`
      case "exercisedog":
        return `${exercisedog}`
      case "floatingdog":
        return `${floatingdog}`
      case "happydog":
        return `${happydog}`
      case "hiddendog":
        return `${hiddendog}`
      case "pizzadog":
        return `${pizzadog}`
      case "scooterdog":
        return `${scooterdog}`
      case "slidingdog":
        return `${slidingdog}`
      case "smilesdog":
        return `${smilesdog}`
      case "typingdog":
        return `${typingdog}`
      default:
        return `${typingdog}`
    }
  }

  render() {
    return (
      <div>
        <Navbar correct={this.state.correct} topscore={this.state.topscore} message={this.state.message}/>
        <Header />
        <Main>
          {this.shuffleArray(Img).map(image => (
            <Image src={this.imgSwitch(image.name)} name={image.name} key={image.name} pickImg={this.pickImg}  />
          ))}
        </Main>
        <Footer />
      </div>
    );
  }
}

export default App;
