import { useState, useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import About from './pages/About'
import Notes from './pages/Notes'
import { adataim } from './services/api'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function App() {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        (async () => {
            const res = await adataim()
            if (res.result) setUser(res.user)
            setLoading(false)
        })()
    }, [])

    if (loading) return null

    return (
        <Routes>
            <Route path="/" element={<Home user={user} />} />
            <Route path="/login" element={user ? <Navigate to="/notes" /> : <Login onLogin={setUser} />} />
            <Route path="/register" element={user ? <Navigate to="/notes" /> : <Register />} />
            <Route path="/about" element={<About />} />
            <Route path="/notes" element={user ? <Notes user={user} onLogout={() => setUser(null)} /> : <Navigate to="/login" />} />
        </Routes>
    )
}
