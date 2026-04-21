import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { login, adataim } from '../services/api'
import TextBox from '../components/TextBox'
import Button from '../components/Button'

export default function Login({onLogin}) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigation = useNavigate()

    return (
        <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center"
             style={{backgroundColor: '#F7F4EE'}}>
            <div className="w-100 px-3" style={{maxWidth: 420}}>
                <h1 className="text-center mb-4" style={{fontFamily: 'cursive', color: '#3D3730'}}>Notesed</h1>
                <div className="p-4 rounded shadow" style={{backgroundColor: '#E8C84A'}}>
                    <div className="text-center fs-4 mb-4">-Bejelentkezés</div>
                    <TextBox title={"Felhasználónév"} type={"text"} placeholder={"felhasznalonev"} value={username} setValue={setUsername} />
                    <TextBox title={"Jelszó"} type={"password"} placeholder={"******"} value={password} setValue={setPassword} />
                    <div className="mt-3">
                        <Button content={"Bejelentkezés"} color={"light"} onClick={async () => {
                            if (!username || !password) {
                                alert('Minden mezőt ki kell tölteni!')
                                return
                            }
                            const res = await login(username, password)
                            if (!res.result) {
                                alert(res.message)
                            } else {
                                const me = await adataim()
                                if (me.result) onLogin(me.user)
                                navigation('/notes')
                            }
                        }} />
                    </div>
                    <div className="text-center mt-3">
                        <Link to="/register" className="text-dark text-decoration-none">Még nincs fiókom</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
