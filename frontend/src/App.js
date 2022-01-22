import React, { Component } from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from './components/Home';
import List from './components/Recipes/List';
import CreatePost from './components/Recipes/CreatePost';
import EditPost from './components/Recipes/EditPost';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import PostDetails from './components/Recipes/PostDetails';

class App extends Component{
  render(){
    return(
      <BrowserRouter >
        <NavBar/> {/* Create navbar */}
        <div style = {{backgroundColor:'#FCFFCD',  margin:"0"}}>
        <div className="container" >
          <Route path="/" exact component={Home}></Route>
          <Route path="/List" exact component={List}></Route>
          <Route path="/add" component={CreatePost}></Route>
          <Route path="/edit/:id" component={EditPost}></Route>
          <Route path="/post/:id" component={PostDetails}></Route>
        </div>
        <div style={{paddingTop:'100px',width:'100%'}}>

          {/* Create footer */}
          <Footer>
          </Footer>
        </div></div>
      </BrowserRouter>
    )
  }
}
export default App;