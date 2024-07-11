import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, removeTodo } from './redux/todosSlice';
import './App.css'; // Importa el archivo CSS

const App = () => {
    const [newTodo, setNewTodo] = useState('');
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    const handleAddTodo = () => {
        if (newTodo.trim()) {
            dispatch(addTodo(newTodo));
            setNewTodo('');
        }
    };

    const handleRemoveTodo = (index) => {
        dispatch(removeTodo(index));
    };

    return (
        <div className="todo">
            <h1 className="lista">Lista de Tareas</h1>
            <input className="texto"
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
            />
            <button onClick={handleAddTodo}>Agregar Tarea</button>
            <ul>
                {todos.map((todo, index) => (
                    <li  key={index}>
                        {todo}
                        <button className="texto" onClick={() => handleRemoveTodo(index)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default App;
