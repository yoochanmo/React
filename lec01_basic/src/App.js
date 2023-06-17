import './App.css';
import Say from './components/Say';
import Title from './components/Title';
import TodoList from './components/TodoList';

function App() {
  var data ={
    title: 'Todo List',
    todos: [
      { id:1, todo: '1st todo....', done: false },
      { id:2, todo: '2nd todo....', done: false },
      { id:3, todo: '3rd todo....', done: true },
      { id:4, todo: '4th todo....', done: false },
      { id:5, todo: '5th todo....', done: false },
    ]
  }

  return (
    <div className="App">
      <Title title={data} />
      <TodoList todos={data.todos} /> 
      <hr />
      <Say />  
      
      
    </div>
  );
}

export default App;
