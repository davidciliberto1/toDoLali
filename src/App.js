import React, { useState, Component } from "react";
import toDoForm from "./components/toDoForma";
import toDoList from './components/toDoList';

 
function App2() {
  const [ToDos, setTodos] = useState([]);
  function addToDo(toDo) {
    setTodos([toDo, ...ToDos]);
  }
}

function App3() {
  const [tareas, setTarea] = useState([]);
  function AgregaTarea(tarea) {
    setTarea([tarea, ...tareas]);
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
      list: [],
    };
  }

  // borra el item de la lista

  deleteItem(id) {
    const list = [...this.state.list];
    const updatedList = list.filter((item) => item.id !== id);

    this.setState({ list: updatedList });
  }

  // Actualiza el state
  updateInput(key, value) {
    this.setState({
      [key]: value,
    });
  }
  // Crea el item
  addItem() {
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice(),
    };
    // Copia lista actual de items

    const list = [...this.state.list];

    // Agrega nuevo item a la lista

    list.push(newItem);

    // actualiza el state con el nuevo item en la lista y borra el campo de input

    this.setState({
      list,
      newItem: "",
    });
  }
  render() {
    return (
      <div className="App">
        <div>
          Add an item...
          <br />
          <input
            type="text"
            placeholder="Type item here..."
            value={this.state.newItem}
            onChange={(e) => this.updateInput("newItem", e.target.value)}
          />
          <button onClick={() => this.addItem()}>Add</button>
          <br />
          <ul>
            {this.state.list.map((item) => {
              return (
                <li key={item.id}>
                  {item.value}
                  <button onClick={() => this.deleteItem(item.id)}>
                    Borra el item
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
