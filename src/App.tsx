import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { Menu } from './menu'


const LoggedIn = ({name="Användare"}) => {
 return (
 <div>
    Välkommen {name}!
 </div>
  )
}

const LoggedOut = () =>
<div>Välkommen gäst</div>



class App extends React.Component {

state = {
  loggedin: true
    }


toggleLoggedIn = () => {
  this.setState({
    loggedin: !this.state.loggedin
  })
}

  render() {
    const { name="user" }= {...this.props};
    return (
    <div>
      <Menu />
      {this.state.loggedin ? <LoggedIn name={name} /> : <LoggedOut />}
      
      <button onClick={this.toggleLoggedIn}>Logga in/ut</button>
      
      </div>
      )
  }
}

export default App;
