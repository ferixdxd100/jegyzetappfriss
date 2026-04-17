import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { register } from '../services/api'
import TextBox from '../components/TextBox'
import Button from '../components/Button'

export default function Register() {
    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')
    const navigation = useNavigate()

    return (
        <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center"
             style={{backgroundColor: '#F7F4EE'}}>
            <div style={{minWidth: 400}}>
                <h1 className="text-center mb-4" style={{fontFamily: 'cursive', color: '#3D3730'}}>Notesed</h1>
                <div className="p-4 rounded shadow" style={{backgroundColor: '#E8C84A'}}>
                    <div className="text-center fs-4 mb-4">-Regisztráció</div>
                    <TextBox title={"Név"} type={"text"} placeholder={"Teljes név"} value={name} setValue={setName} />
                    <TextBox title={"Felhasználónév"} type={"text"} placeholder={"felhasznalonev"} value={username} setValue={setUsername} />
                    <TextBox title={"Jelszó"} type={"password"} placeholder={"******"} value={password} setValue={setPassword} />
                    <TextBox title={"Jelszó újra"} type={"password"} placeholder={"******"} value={passwordConfirm} setValue={setPasswordConfirm} />
                    <div className="mt-3">
                        <Button content={"Regisztráció"} color={"light"} onClick={async () => {
                            if (!name || !username || !password || !passwordConfirm) {
                                alert('Minden mezőt ki kell tölteni!')
                                return
                            }
                            if (password !== passwordConfirm) {
                                alert('A jelszavak nem egyeznek!')
                                return
                            }
                            const res = await register(name, username, password)
                            alert(res.message)
                            if (res.result) {
                                navigation('/login')
                            }
                        }} />
                    </div>
                    <div className="text-center mt-3">
                        <Link to="/login" className="text-dark text-decoration-none">Már van fiókom</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
