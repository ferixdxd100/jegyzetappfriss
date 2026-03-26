import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'

export default function About() {
    const navigation = useNavigate()

    return (
        <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center"
             style={{backgroundColor: '#f5f5dc'}}>
            <div className="col-12 col-md-8 col-lg-6 mx-auto">
                <h1 className="text-center mb-4" style={{fontFamily: 'cursive'}}>Notesed</h1>
                <div className="p-4 rounded shadow" style={{backgroundColor: '#fff8dc'}}>
                    <div className="text-center fs-4 mb-4">Az alkalmazásról</div>
                    <p className="text-center mb-4">
                        A Notesed alkalmazás minden fontos jegyzet offline
                        és ingyenes módon tesszük lehetővé, hogy
                        elérhetővé, ami csak fontos lehet. Így soha többet
                        nem felejted el, ami csak szükséges lehet!
                    </p>
                    <Button content={"Vissza"} color={"warning"} onClick={() => navigation('/')} />
                </div>
            </div>
        </div>
    )
}
