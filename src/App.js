import './App.css';
import SignUp from './components/SignUp';
import { BrowserRouter, Route, Routes,  } from 'react-router-dom';
import SignIn from './components/SignIn';
import AddBlog from './components/AddBlog';
import ViewAllBlog from './components/ViewAllBlog';

function App() {
  
  return (
    <div>
      
      
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<SignUp/>} />
      <Route path='/signin' element={<SignIn/>} />
      <Route path='/addcomment' element={<AddBlog/>} />
      <Route path='/viewallcomment' element={<ViewAllBlog/>} />



     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
