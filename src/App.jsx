import { Routes, Route } from "react-router-dom"
import './App.css'
import Home from "./components/Home"
import Navbar from './components/shared/Navbar'
import Footer from './components/shared/Footer'
import Singup from "./components/Signup"
import Login from "./components/Login"
import Profile from "./components/Profile"
import NotFound from "./components/error404/NotFound"
function App() {
    return (
        <>
            <Navbar />
            {/* Components Routing */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Singup />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </>
    )
}

export default App