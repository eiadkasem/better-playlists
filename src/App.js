import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

let defaultTextColor= 'white';
let defaultStyle={
  color: defaultTextColor
};
let anotherStyle={
  width:'40%',display:'inline-block'

};
class Aggregate extends Component{
  render (){
    return (
      <div style={{...defaultStyle, ...anotherStyle}}>
        <h2 style={{color:'#fff'}}>Number Text</h2>
      </div>
    );
  }
}

class Filter extends Component{
  render(){
    
    return(
      <div style={{color: defaultTextColor}}>
        <img />
        <input type="text" value="search"/>
        Filter
      </div>
    );
  }
}

class PlayList extends Component {
  render(){
    return (
      <div style={{...defaultStyle, width:"25%"}}>
        <img />
        <h3>Playlist Name</h3>
        <ul><li>Song 1</li> <li>Song 2</li> <li>Song 3</li></ul>
      </div>
    );
  }

}
class App extends Component {
  
  render() {
    
    let authorName='Iyad';
    return (
      <div className="App">
        <h1>Title </h1>
        <Aggregate att="x"></Aggregate>
        <Aggregate/>
        <Filter/>
        <PlayList/>
        <PlayList/>
        <PlayList/>
        <PlayList/>
        <PlayList/>
      </div>
    );
  }
}

export default App;
