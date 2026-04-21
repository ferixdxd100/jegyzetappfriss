import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from './Button'
import { logout } from '../services/api'

export default function Navbar({user}) {
    const navigation = useNavigate()
    const isLoggedIn = !!user
    const [open, setOpen] = useState(false)

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary w-100">
            <div className="container-fluid">
                <Link to='/' className="navbar-brand text-dark">Notesed</Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={() => setOpen(o => !o)}
                    aria-label="Menü"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse${open ? ' show' : ''}`}>
                    <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-2">
                        {isLoggedIn && (
                            <li className="nav-item">
                                <Link to='/notes' className="nav-link text-dark" onClick={() => setOpen(false)}>Jegyzeteim</Link>
                            </li>
                        )}
                        {isLoggedIn && (
                            <li className="nav-item">
                                <Link to='/profile' className="nav-link text-dark" onClick={() => setOpen(false)}>Fiókom</Link>
                            </li>
                        )}
                        <li className="nav-item mt-2 mt-lg-0">
                            {isLoggedIn
                                ? <Button content={"Kijelentkezés"} color={'dark'} onClick={async () => {
                                    await logout()
                                    alert('Sikeresen kijelentkeztél!')
                                    navigation('/')
                                    window.location.reload()
                                  }} />
                                : <Button content={"Bejelentkezés"} color={'dark'} onClick={() => { navigation('/login'); setOpen(false) }} />
                            }
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
