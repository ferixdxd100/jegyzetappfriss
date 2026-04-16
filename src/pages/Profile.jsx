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

    // felhasználónév modal
    const [usernameOpen, setUsernameOpen] = useState(false)
    const [ujUsername, setUjUsername] = useState('')
    const [usernameHiba, setUsernameHiba] = useState('')

    // jelszó modal
    const [jelszoOpen, setJelszoOpen] = useState(false)
    const [aktJelszo, setAktJelszo] = useState('')
    const [ujJelszo1, setUjJelszo1] = useState('')
    const [ujJelszo2, setUjJelszo2] = useState('')
    const [jelszoHiba, setJelszoHiba] = useState('')

    // fiók törlés modal
    const [torlesOpen, setTorlesOpen] = useState(false)
    const [torlesHiba, setTorlesHiba] = useState('')

    return (
        <div>
            <Navbar user={user} />
            <div className="d-flex justify-content-center mt-5">
                <div>
                    <div className="my-2">
                        <Button color={'dark'} content={'Felhasználónév módosítása'} onClick={() => setUsernameOpen(true)} />
                    </div>
                    <div className="my-2">
                        <Button color={'dark'} content={'Jelszó módosítása'} onClick={() => setJelszoOpen(true)} />
                    </div>
                    <div className="my-2">
                        <Button color={'danger'} content={'Fiók törlése'} onClick={() => setTorlesOpen(true)} />
                    </div>
                </div>
            </div>

            {/* Felhasználónév módosítás */}
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
                    }
                }}>
                {usernameHiba && <div className="alert alert-danger">{usernameHiba}</div>}
                <TextBox title={"Felhasználónév"} type={"text"} placeholder={"John Doe"} value={ujUsername} setValue={setUjUsername} />
            </Modal>

            {/* Jelszó módosítás */}
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

            {/* Fiók törlés */}
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
                Gondold át nagyon a döntésedet! A művelet nem vonható vissza!
            </Modal>
        </div>
    )
}
