import React from 'react';

const list = [
  {
    task: "Clean the dishes",
    id: 001,
    completed: false
  },
  {
    task: "Pick up groceries"
    id: 002,
    completed: false
  },
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
    

  constructor(){
      super();
      this.state = {};
    }

    handleChanges = event => {
      this.setState({ [event.target.name]: event.target.value})
    }

    submitHandler = event => {
      event.preventDefault();

      this.setState([...this.state.todoList,
        {
          task: this.state.newToDo,
          id: Date.now(),
          completed: false
        }
      ]);
    }
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <form>
          <input
          type= "text"
          value= {this.state.newTodo}
          name="newTodo"
          onChange={this.handleChanges}
          />
          <button onClick={this.submitHandler}>Submit</button>
          <button>Clear Completed</button>
        </form>
      </div>

    );
  }
}

export default App;
