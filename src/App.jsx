import { Routes, Route } from "react-router-dom"
import "./styles/index.css"
import Home from "./components/Home"
import Navbar from './components/shared/Navbar'
import Footer from './components/shared/Footer'
import Singup from "./components/Signup"
import Login from "./components/Login"
import About from "./components/About"
import Profile from "./components/Profile"
import Contact from "./components/Contact"
import NotFound from "./components/error404/NotFound"
import AuthProvider from "./services/AuthService"
import { ProtectedRoute } from "./routes/ProtectedRoute"
import Dashboard from "./components/Dashboard"
import Platforms from "./components/Platforms"

function App() {
    return (
        <AuthProvider>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Singup />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route element={<ProtectedRoute />}>
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/platforms" element={<Platforms />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </AuthProvider>
    )
}

export default App
