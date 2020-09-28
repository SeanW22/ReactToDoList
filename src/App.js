import React, {useState, useEffect} from 'react';
import './App.css';
//Importing components 
import Form from './components/Form';
import TodoList from './components/TodoList'

function App() {

  //State stuff
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);
  
  // functions
  const filterHandler = () => {
    switch(status){
      case 'completed': 
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case 'uncompleted': 
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default: 
        setFilteredTodos(todos);
        break;
    }
  };
    //USE EFFECT
    useEffect(() => {
      filterHandler();
    }, [todos, status]);

  return (
    <div className="App">
      <header>      
        <h1>
          Sean's Todo List
        </h1>
      </header>
      <Form todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText} setStatus={setStatus} />
      <TodoList setTodos={setTodos} filteredTodos={filteredTodos}/>
    </div>
  );
}

export default App;
