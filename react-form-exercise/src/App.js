import logo from './logo.svg';
import './App.css';
import { BoxList } from './BoxList';
import { Box } from './Box';
import { NewBoxForm }  from './NewBoxForm';
import { ToDoList } from './ToDoList';
import { NewToDoForm } from './NewToDoForm';
import { ToDo } from './ToDo';


function App() {

return (
  <div className="App" >
   <BoxList />
   
   <ToDoList />
    
  </div>
);



}

export default App;
