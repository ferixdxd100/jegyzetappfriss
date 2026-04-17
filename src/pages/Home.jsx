import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'

export default function Home({user}) {
    const navigation = useNavigate()

    return (
        <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center"
             style={{backgroundColor: '#F7F4EE'}}>
            <div className="row w-100">
                <div className="col-12 col-md-8 col-lg-6 mx-auto">
                    <h1 className="text-center mb-5" style={{fontFamily: 'cursive', fontSize: '3rem', color: '#3D3730'}}>
                        Notesed
                    </h1>
                    <div className="d-flex flex-column flex-md-row justify-content-center gap-3">
                        <div style={{minWidth: '200px', minHeight: '200px'}}>
                            <Button content={"-Bejelentkezés"} color={"warning"} onClick={() => navigation(user ? '/notes' : '/login')} />
                        </div>
                        <div style={{minWidth: '200px', minHeight: '200px'}}>
                            <Button content={"-Regisztráció"} color={"warning"} onClick={() => navigation('/register')} />
                        </div>
                        <div style={{minWidth: '200px', minHeight: '200px'}}>
                            <Button content={"-Az alkalmazásról"} color={"warning"} onClick={() => navigation('/about')} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
