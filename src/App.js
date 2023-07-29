import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import UserList from './components/UserList';
import AddUser from './components/AddUser';
import UpdateUser from './components/UpdateUser';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import Store from './Redux/Store';
function App() {
  return (
    <Provider store={Store}> 
    <div className="App">
      <BrowserRouter>
      <div className='header'>
        <Link to='/'>Home</Link>
        <Link to='/user'>user</Link>

      </div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/user' element={<UserList/>}/>
        <Route path='/user/add' element={<AddUser/>}/>
        <Route path='/user/edit/:code' element={<UpdateUser/>}/>
      </Routes>
      </BrowserRouter>
      <ToastContainer position='bottom-right'></ToastContainer>
    </div>
    </Provider>
  );
}

export default App;
