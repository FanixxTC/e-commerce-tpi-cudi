import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import SignUpPage from './pages/SignUpPage'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import Navbar from './components/Navbar'
import AuthStatus from './components/AuthStatus'
import Dashboard from './components/Dashboard'


const App = () => {
    const userLogin = false
    return (
        <Router>
            <AuthStatus/>
            <Dashboard/>
            <Navbar/>
            <Routes>
               <Route path="/" element={<HomePage/>}/>
               <Route path="/Signup" element={!userLogin ? <SignUpPage/> : <Navigate to="/"/>}/>
               <Route path="/Login" element={!userLogin ? <LoginPage/> : <Navigate to="/"/>}/>
            </Routes>
        </Router>
    )
}

export default App