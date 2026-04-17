import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Button from '../components/Button'
import Modal from '../components/Modal'
import TextBox from '../components/TextBox'
import { adataim, usernameModositas, jelszoModositas, fiokTorlese } from '../services/api'

export default function Profile() {
    const [user, setUser] = useState(null)
    const navigation = useNavigate()

    useEffect(() => {
        (async () => {
            const res = await adataim()
            if (res.result) {
                setUser(res.user)
            } else {
                navigation('/')
            }
        })()
    }, [])

    const [usernameOpen, setUsernameOpen] = useState(false)
    const [ujUsername, setUjUsername] = useState('')
    const [usernameHiba, setUsernameHiba] = useState('')

    const [jelszoOpen, setJelszoOpen] = useState(false)
    const [aktJelszo, setAktJelszo] = useState('')
    const [ujJelszo1, setUjJelszo1] = useState('')
    const [ujJelszo2, setUjJelszo2] = useState('')
    const [jelszoHiba, setJelszoHiba] = useState('')

    const [torlesOpen, setTorlesOpen] = useState(false)
    const [torlesHiba, setTorlesHiba] = useState('')

    return (
        <div className="container-fluid min-vh-100" style={{backgroundColor: '#F7F4EE'}}>
            <div className="container py-4">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h1 style={{fontFamily: 'cursive', color: '#3D3730'}}>Notesed</h1>
                    <Navbar user={user} />
                </div>

                <div className="row justify-content-center mb-4">
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="card shadow" style={{backgroundColor: '#E8C84A', border: 'none'}}>
                            <div className="card-body">
                                <h4 style={{fontFamily: 'cursive', color: '#3D3730'}} className="mb-3">Profilom</h4>
                                <p className="mb-1" style={{color: '#3D3730'}}><strong>Név:</strong> {user?.name}</p>
                                <p className="mb-0" style={{color: '#3D3730'}}><strong>Felhasználónév:</strong> {user?.username}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-12 col-md-6 col-lg-4 d-flex flex-column gap-2">
                        <Button color={'dark'} content={'Felhasználónév módosítása'} onClick={() => setUsernameOpen(true)} />
                        <Button color={'dark'} content={'Jelszó módosítása'} onClick={() => setJelszoOpen(true)} />
                        <Button color={'danger'} content={'Fiók törlése'} onClick={() => setTorlesOpen(true)} />
                    </div>
                </div>
            </div>

            <Modal open={usernameOpen} title={"Felhasználónév módosítása"} submitText={"Módosítás"}
                onClose={() => setUsernameOpen(false)}
                onSubmit={async () => {
                    const res = await usernameModositas(ujUsername)
                    if (!res.result) {
                        setUsernameHiba(res.message)
                    } else {
                        setUsernameHiba('')
                        setUjUsername('')
                        setUsernameOpen(false)
                        const updated = await adataim()
                        if (updated.result) setUser(updated.user)
                    }
                }}>
                {usernameHiba && <div className="alert alert-danger">{usernameHiba}</div>}
                <TextBox title={"Felhasználónév"} type={"text"} placeholder={"John Doe"} value={ujUsername} setValue={setUjUsername} />
            </Modal>

            <Modal open={jelszoOpen} title={"Jelszó módosítása"} submitText={"Módosítás"}
                onClose={() => setJelszoOpen(false)}
                onSubmit={async () => {
                    if (ujJelszo1 !== ujJelszo2) {
                        setJelszoHiba('Az új jelszó és megerősítése nem egyezik')
                        return
                    }
                    const res = await jelszoModositas(aktJelszo, ujJelszo1)
                    if (!res.result) {
                        setJelszoHiba(res.message)
                    } else {
                        setJelszoHiba('')
                        setAktJelszo('')
                        setUjJelszo1('')
                        setUjJelszo2('')
                        setJelszoOpen(false)
                    }
                }}>
                {jelszoHiba && <div className="alert alert-danger">{jelszoHiba}</div>}
                <TextBox title={"Aktuális jelszó"} type={"password"} placeholder={"********"} value={aktJelszo} setValue={setAktJelszo} />
                <TextBox title={"Új jelszó"} type={"password"} placeholder={"********"} value={ujJelszo1} setValue={setUjJelszo1} />
                <TextBox title={"Új jelszó megerősítése"} type={"password"} placeholder={"********"} value={ujJelszo2} setValue={setUjJelszo2} />
            </Modal>

            <Modal open={torlesOpen} title={"Fiók törlése"} submitText={"Törlés"} color={"danger"}
                onClose={() => setTorlesOpen(false)}
                onSubmit={async () => {
                    const res = await fiokTorlese()
                    if (!res.result) {
                        setTorlesHiba(res.message)
                    } else {
                        setTorlesHiba('')
                        setTorlesOpen(false)
                        navigation('/')
                        window.location.reload()
                    }
                }}>
                {torlesHiba && <div className="alert alert-danger">{torlesHiba}</div>}
                <p style={{color: '#3D3730'}}>Gondold át nagyon a döntésedet! A művelet nem vonható vissza!</p>
            </Modal>
        </div>
    )
}
