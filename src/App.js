import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

let defaultTextColor= '#AAA';
let authorName='Iyad';

let defaultStyle={
  width:'40%',
  display:'inline-block',
  color: defaultTextColor
};

let titleStyle={
  color:'#EEE'
};

let fakeServerData={
  user:{
    name:'Iyad',
    playlists:[
      {name:'My favorites',songs:[{name:'Hotel California',duration:100},{name:'Lady In Red',duration:200},{name:'Jesus to a child',duration:300}]}  ,
      {name:'The Classics',songs:[{name:'La Vie',duration:400},{name:'Sway',duration:500},{name:'Love you still',duration:650}]}  ,
      {name:'Romantica',songs:[{name:'Lady in red',duration:700},{name:'How i love you',duration:800},{name:'Please forgive me',duration:925}]}  ,
      {name:'At The Dawn',songs:[{name:'Good Morning',duration:1000},{name:'The Sun rise',duration:1100},{name:'Get UP',duration:1205}]}  
    ]
  }
};

class TitleComponent extends Component{
  render(){
    return (
      <div style={titleStyle}>
        <h1>{this.state.serverData.user && this.state.serverData.user.name}'s Playlists</h1>
      </div>
    );
  }
}

class PlayListCounter extends Component{
  render (){
    return (
      <div style={defaultStyle}>
        <h2>{this.props.playlists.length} Playlists</h2>
      </div>
    );
  }
}

class HoursCounter extends Component{
  render (){
    let allSongs=this.props.playlists.reduce((songs,eachPlaylist)=>{
      return songs.concat(eachPlaylist.songs)
    },[]);
    let totalDuration=allSongs.reduce((sum,eachSong)=>{
      return sum+eachSong.duration;
    },0);
    return (
      <div style={defaultStyle}>
        <h2>{Math.round(totalDuration/60)} Minutes</h2>
      </div>
    );
  }
}

class Filter extends Component{
  render(){
    
    return(
      <div style={{color: defaultTextColor}}>
        <img />
        <input type="text" value=""/>
        
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
 constructor(){
   super();
   this.state={serverData:{}};
 }

 componentDidMount(){
   setTimeout(()=>{
  this.setState({serverData:fakeServerData});
},5000
);
 }

  render() {
    return (
      <div className="App">        
       {this.state.serverData.user ? 
        <div>
          <h1>          
            {this.state.serverData.user.name}'s Playlists
          </h1>          
          
          <PlayListCounter playlists={this.state.serverData.user.playlists}/>
          <HoursCounter playlists={this.state.serverData.user.playlists}/>
          <Filter/>
          <PlayList/>
          <PlayList/>
          <PlayList/>
          <PlayList/>
          <PlayList/>
        </div>:<h1>loading...</h1>
       }
      </div>
    );
  }
}

export default App;