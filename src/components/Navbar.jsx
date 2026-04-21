import { Link, useNavigate } from 'react-router-dom'
import Button from './Button'
import { logout } from '../services/api'

export default function Navbar({user}) {
    const navigation = useNavigate()
    const isLoggedIn = !!user

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid d-flex justify-content-between">
                <Link to='/' className="px-3 text-decoration-none py-1 text-dark">Notesed</Link>
                <div className="d-flex align-items-center">
                    {isLoggedIn && (
                        <Link to='/notes' className="px-3 text-decoration-none py-1 text-dark">Jegyzeteim</Link>
                    )}
                    {isLoggedIn && (
                        <Link to='/profile' className="px-3 text-decoration-none py-1 text-dark">Fiókom</Link>
                    )}
                    <div className="mx-3">
                        {isLoggedIn
                            ? <Button content={"Kijelentkezés"} color={'dark'} onClick={async () => {
                                await logout()
                                alert('Sikeresen kijelentkeztél!')
                                navigation('/')
                                window.location.reload()
                              }} />
                            : <Button content={"Bejelentkezés"} color={'dark'} onClick={() => navigation('/login')} />
                        }
                    </div>
                </div>
            </div>
        </nav>
    )
}
