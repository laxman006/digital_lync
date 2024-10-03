
// import { Route } from 'express';
import './App.css';
// import {BrowserRouter , Routes , Route} from 'react-router-dom';
import LoginSignup from './Components/LoginSignup/LoginSignup';


function App() {
  return (
    <>
    {/* <BrowserRouter>
      <Routes>
        <Route path='/SignUp_page' element={LoginSignup}> </Route>
        
      </Routes>
    </BrowserRouter> */}
    <LoginSignup/>
    </>
  );
}

export default App;
