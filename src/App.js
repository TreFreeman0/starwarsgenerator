import './App.css';
import React from 'react';
import NavBar from './components/Nav/Navbar';
import Card from './components/Card/Card';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      person: [],
      isLoading: true
      
    }
  }

  fetchData = () => {
    const randomNum = Math.floor(Math.random() * 80) + 1
        fetch(`https://swapi.py4e.com/api/people/${randomNum}/`)
          .then(response=> response.json())
          .then(users => {this.setState({ person: users})});

          console.log(this.state.person)
  }

  oncliick = () => {
    console.log(this.state.person)
  }

  render() {
    
    const { person } = this.state;
   return(
    !person?<h1>{person}</h1>:
    <div>
      <NavBar/>
      <Card name={person.name} data={this.fetchData}/>
    </div>
    
   ) 
  }
}


export default App;
