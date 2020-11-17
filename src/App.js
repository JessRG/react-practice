/********* Assignment 1 **********/

// import React, { Component } from 'react';

// import './App.css';

// import UserOutput from './UserOutput/UserOutput';
// import UserInput from './UserInput/UserInput';

// class App extends Component {
// 	state = {
// 		userOutput: [{ username: 'zero100' }]
// 	};

// 	// change event handler
// 	changeEventHandler = (event) => {
// 		this.setState({
// 			userOutput: [{ username: event.target.value }]
// 		});
// 	};

// 	render() {
// 		const style = {
// 			backgroundColor: 'white',
// 			font: 'inherits',
// 			border: '0.0625rem solid blue',
// 			padding: '0.5rem',
// 			cursor: 'pointer',
// 			textAlign: 'center'
// 		};

// 		return (
// 			<div className='App' style={style}>
// 				<ol>
// 					<li>Create TWO new components: UserInput and UserOutput</li>
//           <li>UserInput should hold an input element, UserOutput two paragraphs</li>
//           <li>Output multiple UserOutput components in the App component (any paragraph texts of your choice)</li>
//           <li>Pass a username (of your choice) to UserOutput via props and display it there</li>
//           <li>Add state to the App component (=> the username) and pass the username to the UserOutput component</li>
//           <li>Add a method to manipulate the state (=> an event-handler method)</li>
//           <li>Pass the event-handler method reference to the UserInput component and bind it to the input-change event</li>
//           <li>Ensure that the new input entered by the user overwrites the old username passed to UserOutput</li>
//           <li>Add two-way-binding to your input (in UserInput) to also display the starting username</li>
//           <li>Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets</li>
// 				</ol>
// 				<UserOutput username='zero' />
// 				<UserOutput username={this.state.userOutput[0].username} />
// 				<UserInput
// 					username={this.state.userOutput[0].username}
// 					changed={this.changeEventHandler}
// 				/>
// 			</div>
// 		);
// 	}
// }

// export default App;

/********* Assignment 1 End **********/

/********** Assignment 2 ***********/
import React, { Component } from 'react';

import './App.css';

import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {
	state = {
		inputStuff: [{ paragraph: '' }]
	};

	// input change event handler
	inputChangeEventHandler = (event) => {
		this.setState({
			inputStuff: [{ paragraph: event.target.value }]
		});
	};

	// delete letter handler
	deleteLetterHandler = (index) => {
		// split the state paragraph string
		const str = this.state.inputStuff[0].paragraph.split('');

		// remove the selected letter
		str.splice(index, 1);

		// join string array to set to the state.paragraph
		const newPara = str.join('');

		this.setState({
			inputStuff: [{ paragraph: newPara }]
		});
	};

	render() {
		const splitPara = this.state.inputStuff[0].paragraph.split('');
		const letters = splitPara.map((letter, index) => {
			return (
				<Char
					val={letter}
					key={index}
					clicked={() => this.deleteLetterHandler(index)}
				/>
			);
		});

		return (
			<div className='App'>
				<ol>
					<li>
						Create an input field (in App component) with a change listener
						which outputs the length of the entered text below it (e.g. in a
						paragraph).
					</li>
					<li>
						Create a new component (=> ValidationComponent) which receives the
						text length as a prop
					</li>
					<li>
						Inside the ValidationComponent, either output "Text too short" or
						"Text long enough" depending on the text length (e.g. take 5 as a
						minimum length)
					</li>
					<li>
						Create another component (=> CharComponent) and style it as an
						inline box (=> display: inline-block, padding: 16px, text-align:
						center, margin: 16px, border: 1px solid black).
					</li>
					<li>
						Render a list of CharComponents where each CharComponent receives a
						different letter of the entered text (in the initial input field) as
						a prop.
					</li>
					<li>
						When you click a CharComponent, it should be removed from the
						entered text.
					</li>
				</ol>
				<p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
				<input
					type='text'
					onChange={this.inputChangeEventHandler}
					value={this.state.inputStuff[0].paragraph}
				/>
				<Validation length={this.state.inputStuff[0].paragraph.length} />
				{letters}
			</div>
		);
	}
}
export default App;
/********** Assignment 2 End ***********/
