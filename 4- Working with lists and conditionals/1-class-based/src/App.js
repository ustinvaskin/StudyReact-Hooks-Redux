import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


// Extending so then we retunr and then we render 
class App extends Component {
  state = {
    // Initial State 
    person: [
      { name: "Ahmad", age: 23 },
      { name: "Ijaz", age: 50 },
      { name: "Zakia", age: 60 }
    ],
    showPersons: false
  }


  // Changed state (setState)
  handleChange = (newName) => {
    this.setState({
      person: [
        { name: newName, age: 23 },
        { name: "Ijaz Ahmad", age: 50 },
        { name: "Zakia", age: 55 }
      ]
    })
  }


  nameChangeHandler = (event) => {
    this.setState({
      person: [
        { name: "Ahmad", age: 23 },
        { name: event.target.value, age: 50 },
        { name: "Zakia", age: 53 }
      ]
    })
  }



  // Function that toggles state of Show Person 
  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }


  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    // save 'persons' into a variable div person 
    let persons = null
    if (this.state.showPersons) {
      persons = (
        <div>
          <Person
            name={this.state.person[0].name}
            age={this.state.person[0].age} />
          <Person
            name={this.state.person[1].name}
            age={this.state.person[1].age} click={() => this.handleChange("Ahmad!!")} change={this.nameChangeHandler} >Hobbies: Learning</Person>
          <Person
            name={this.state.person[2].name}
            age={this.state.person[2].age} />
        </div>
      )
    }


    return (
      <div className="App">
        <h1>Hi, I'm React App</h1>

        {/* On clikc event => calls a function togglePersonHandler */}
        <button style={style} onClick={this.togglePersonHandler}>Change Text</button>


        {/* display the variable  */}
        {persons}
      </div>
    );
  }
}

export default App;
