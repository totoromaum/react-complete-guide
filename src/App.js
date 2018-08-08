import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Resume from './Resume/Resume';
import Memory from './Memory/Memory';

class App extends Component {
	state = {
		persons: [
{name: 'Max', age: 28},
{name: 'Manu', age: 29},
{name: 'Stephanie', age: 26}

		],
		otherState: 'some other value',
		showPersons: false
	}

switchNameHandler = (newName) => {
	//console.log('Was clicked!')
	//Dont do this: this.state.persons[0].name = 'Jeonghun Oh';
	this.setState({persons: [
{name: newName, age: 28},
{name: 'Manu', age: 29},
{name: 'Stephanie', age: 27}

		]

	})
}



togglePersonsHandler = () => {
	const doesShow = this.state.showPersons;
	this.setState({showPersons:!doesShow});
}

  render() {

const style = {
backgroundColor: 'white',
font: 'inherit',
border: '1px solid blue',
padding: '8px',
cursor: 'pointer'	
};

let persons = null;

if (this.state.showPersons) {
	persons = (
		<div>
				{this.state.persons.map(person => {
					return <Person 
					name ={person.name} 
					age = {person.age} />

				/** <Person 
			        name={this.state.persons[0].name} 
			        age={this.state.persons[0].age}/>
		        <Person 
			        name={this.state.persons[1].name} 
			        age={this.state.persons[1].age}
			        click={this.switchNameHandler.bind(this, 'Max!')}
			        changed={this.nameChangedHandler}>My Hobbies: Racing</Person>
		        <Person 
			        name={this.state.persons[2].name} 
			        age={this.state.persons[2].age}/> **/



				})}
				
        	</div> 

        	
        	

		);
}

    return (
      <div className="App">
        <h1>Hi, I'm a React App </h1>
        <p> This is really working!</p>
        <button 
	        style={style}
	        onClick={this.togglePersonsHandler}>Toggle Persons</button>
        	{persons}
       
        <Resume/>
        <Memory/>
      </div>
    );
  }
}

export default App;
