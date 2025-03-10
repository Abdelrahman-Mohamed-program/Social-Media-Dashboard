import { Routes, Route } from "react-router-dom"
import "./styles/index.css"
import Home from "./components/Home"
import Navbar from './components/shared/Navbar'
import Footer from './components/shared/Footer'
import Singup from "./components/Signup"
import Login from "./components/Login"
import About from "./components/About"
import Profile from "./components/Profile"
import Contact from "./components/Profile"
import NotFound from "./components/error404/NotFound"
import AuthProvider from "./services/AuthService"
import { ProtectedRoute } from "./routes/ProtectedRoute"

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
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Route path="/profile" element={<Profile />} />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </AuthProvider>
  )
}

export default App
