import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import AddUser from './AddUser';
import { userData } from './reducer';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import EditUser from './EditUser';

function App() {

  const dispatch = useDispatch()
  useEffect(()=>
    {
      fetch('http://localhost:1111/users')
      .then(res=>res.json())
      .then(data=>(
        dispatch(userData(data))
      ))
    },[])
  
  return (
    <div className="App">
          <h1 className="text-center my-2">Redux JSON CRUD</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/add' element={<AddUser/>}></Route>
          <Route path='/edit/:id' element={<EditUser/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
