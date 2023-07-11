import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/5')
      .then((response) => response.json())
      .then((json) => setTodo(json));
  }, []);

  console.log('App rendered');
  console.log(todo);

  return <div className="App">{todo && <h1>{todo.title}</h1>}</div>;
}

export default App;

// При вызове таких функций как setTodo, реакт выполняет
// ререндеринг компонента, а так же всех его дочерних компонентов.
// Это и называется изменение состояние компонента
