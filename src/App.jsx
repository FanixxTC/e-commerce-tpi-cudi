import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import SignUpPage from './pages/SignUpPage'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import NavBar from './components/NavBar'

const App = () => {
    const userLogin = false
    return (
        <Router>
            <NavBar/>
            <Routes>
               <Route path="/" element={<HomePage/>}/>
               <Route path="/Signup" element={!userLogin ? <SignUpPage/> : <Navigate to="/"/>}/>
               <Route path="/Login" element={!userLogin ? <LoginPage/> : <Navigate to="/"/>}/>
            </Routes>
        </Router>
    )
}

export default App