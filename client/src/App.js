import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/Main';
import Navbar from './components/Navbar/Navbar.jsx';
import Form from './components/Form';
import Contact from './components/contact'
import Thankyou from './components/Thankyou'


function App() {
    const user = localStorage.getItem('token');

    return (
        <>
            <Navbar /> 
            <Routes>
+                {user && <Route path="/" exact element={<Main />} />}
                <Route path="/Signup" exact element={<Signup />} />
                <Route path="/Login" exact element={<Login />} />
                <Route path="/Form" exact element={<Form />} />
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/thankyou' element={<Thankyou/>}/>
                <Route path="/" exact element={<Navigate replace to="/" />} />
               
            </Routes>
        </>
    );
}

export default App;
