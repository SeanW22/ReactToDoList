import React from 'react';
import Todo from '../components/Todo';

const TodoList = ({setTodos, filteredTodos}) => {

    return (
        <div className="todo-container">
            <ul className="todo-list">
               {
                   filteredTodos.map((todo) => (
                       <Todo setTodos={setTodos} todos={filteredTodos} todo={todo} key={todo.id}/>
                   ))
               }
            </ul>
        </div>
    );
}
export default TodoList;