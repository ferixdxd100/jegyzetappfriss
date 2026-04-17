import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getNotes, createNote, updateNote, deleteNote, logout } from '../services/api'
import Button from '../components/Button'
import TextBox from '../components/TextBox'
import Textarea from '../components/Textarea'

export default function Notes({user, onLogout}) {
    const [notes, setNotes] = useState([])
    const [showForm, setShowForm] = useState(false)
    const [currentNote, setCurrentNote] = useState(null)
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const navigation = useNavigate()

    useEffect(() => {
        loadNotes()
    }, [])

    async function loadNotes() {
        const res = await getNotes()
        if (res.result) {
            setNotes(res.notes)
        } else {
            alert(res.message)
        }
    }

    function openForm(note = null) {
        setCurrentNote(note)
        setTitle(note ? note.title : '')
        setContent(note ? note.content : '')
        setShowForm(true)
    }

    function closeForm() {
        setShowForm(false)
        setCurrentNote(null)
        setTitle('')
        setContent('')
    }

    return (
        <div className="container-fluid min-vh-100" style={{backgroundColor: '#F7F4EE'}}>
            <div className="container py-4">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h1 style={{fontFamily: 'cursive', color: '#3D3730'}}>Notesed</h1>
                    <div className="d-flex gap-2">
                        <Button content={"Fiókom"} color={"dark"} onClick={() => navigation('/profile')} />
                        <Button content={"Kijelentkezés"} color={"danger"} onClick={async () => {
                            await logout()
                            onLogout()
                            navigation('/')
                        }} />
                    </div>
                </div>

                <div className="mb-4">
                    <Button content={"+ Új jegyzet"} color={"warning"} onClick={() => openForm()} />
                </div>

                {showForm && (
                    <div className="p-4 rounded shadow mb-4" style={{backgroundColor: '#E8C84A', border: 'none'}}>
                        <h4>{currentNote ? 'Jegyzet szerkesztése' : 'Új jegyzet'}</h4>
                        <TextBox title={"Cím"} type={"text"} placeholder={"Cím..."} value={title} setValue={setTitle} />
                        <Textarea title={"Tartalom"} placeholder={"Tartalom..."} value={content} setValue={setContent} />
                        <div className="d-flex gap-2">
                            <Button content={"Mentés"} color={"success"} onClick={async () => {
                                if (!title || !content) {
                                    alert('Minden mezőt ki kell tölteni!')
                                    return
                                }
                                let res
                                if (currentNote) {
                                    res = await updateNote(currentNote.id, title, content)
                                } else {
                                    res = await createNote(title, content)
                                }
                                if (!res.result) {
                                    alert(res.message)
                                } else {
                                    closeForm()
                                    loadNotes()
                                }
                            }} />
                            <Button content={"Mégse"} color={"secondary"} onClick={closeForm} />
                        </div>
                    </div>
                )}

                <div className="row">
                    {notes.map(note => (
                        <div key={note.id} className="col-12 col-md-6 col-lg-4 mb-3">
                            <div className="card shadow h-100" style={{backgroundColor: '#E8C84A', border: 'none'}}>
                                <div className="card-body">
                                    <h5 className="card-title">{note.title}</h5>
                                    <p className="card-text">{note.content}</p>
                                    <div className="d-flex gap-2">
                                        <Button content={"Szerkesztés"} color={"light"} onClick={() => openForm(note)} />
                                        <Button content={"Törlés"} color={"danger"} onClick={async () => {
                                            if (!confirm('Biztosan törölni szeretnéd ezt a jegyzetet?')) return
                                            const res = await deleteNote(note.id)
                                            if (!res.result) {
                                                alert(res.message)
                                            } else {
                                                loadNotes()
                                            }
                                        }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {notes.length === 0 && !showForm && (
                    <div className="text-center text-muted mt-5">
                        <p>Még nincs jegyzeted. Hozz létre egyet!</p>
                    </div>
                )}
            </div>
        </div>
    )
}
