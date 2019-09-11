import React, { Component } from 'react';
import Navbar from "./components/navbar";
import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";
import Image from "./components/image";
import Img from "./components/images.json";



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

  // imgSwitch = (name) => {
  //   switch (name) {
  //     case "dancingdog":
  //       return `${dancingdog}`
  //     case "doggpihy1":
  //       return `${doggiphy}`
  //     case "drivingdog":
  //       return `${drivingdog}`
  //     case "exercisedog":
  //       return `${exercisedog}`
  //     case "floatingdog":
  //       return `${floatingdog}`
  //     case "happydog":
  //       return `${happydog}`
  //     case "hiddendog":
  //       return `${hiddendog}`
  //     case "pizzadog":
  //       return `${pizzadog}`
  //     case "scooterdog":
  //       return `${scooterdog}`
  //     case "slidingdog":
  //       return `${slidingdog}`
  //     case "smilesdog":
  //       return `${smilesdog}`
  //     case "typingdog":
  //       return `${typingdog}`
  //     default:
  //       return `${typingdog}`
  //   }
  // }

  render() {
    return (
      <div>
        <Navbar correct={this.state.correct} topscore={this.state.topscore} message={this.state.message}/>
        <Header />
        <Main>
          {this.shuffleArray(Img).map(image => {
            console.log(image)
           return (
            <Image src={process.env.PUBLIC_URL + image.url} name={image.name} key={image.name} pickImg={this.pickImg}  />
          )})}
        </Main>
        <Footer />
      </div>
    );
  }
}

export default App;
