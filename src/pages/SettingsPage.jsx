import 'bootstrap/dist/css/bootstrap.min.css'
import { useNavigate } from 'react-router-dom'
import Background from '/src/assets/background.png'
import BackButton from '../components/BackButton'
import Back from '../assets/back.png'
import DeckBackground from '../assets/deckbackground.png'
import TextBox from '../components/Textbox'
import HomeButtons from '../components/HomeButtons'
import Popup from '../components/Popup'
import { useEffect, useState } from 'react'
import { ujFelhasznalonev, ujEmail, ujJelszo, fioktorles, adataim } from '../api'
import DeletePopup from '../components/DeletePopup'

export default function SettingsPage() {
    const navigate = useNavigate()
    const [popup, setPopup] = useState("")
    const [navigateTo, setNavigateTo] = useState("")

    const [felhasznalonev, setFelhasznalonev] = useState("")
    const [email, setEmail] = useState("")
    const [regiJelszo, setRegiJelszo] = useState("")
    const [ujJelszo1, setUjJelszo1] = useState("")
    const [ujJelszo2, setUjJelszo2] = useState("")

    const [deletePopup, setDeletePopup] = useState(false)

    useEffect(() => {
        adataim().then(res => {
            if (res.result) setFelhasznalo(res.data)
        })
    }, [])

    return (
        <div className='d-flex flex-column align-items-center vh-100'>
            <Popup message={popup} onClose={() => {
                setPopup("")
                if (navigateTo) navigate(navigateTo)
            }} />

            <div className="position-fixed top-0 start-0 w-100 h-100"
                style={{ backgroundImage: `url(${Background})`, backgroundSize: 'cover', zIndex: -1 }} />

            <BackButton src={Back} onClick={() => navigate(-1)} />

            <div >
                <div style={{
                    backgroundImage: `url(${DeckBackground})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    borderRadius: '20px',
                    padding: 'min(30px, 5vw)',
                    border: '3px solid #1a5a9a',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px',
                    marginTop: 10
                }}>
                    <div>
                        

                            {/* Edit Username */}

                            <div style={{ color: 'white', fontWeight: 'bold', marginBottom: '6px' }}>Edit Username</div>
                            <div className="d-flex flex-column flex-lg-row align-items-center gap-2 mb-2">

                                <TextBox title={""} type={"text"} placeholder={"New Username:"} value={felhasznalonev} setvalue={setFelhasznalonev} />

                                <HomeButtons content={"Update"} onClick={async () => {
                                    const res = await ujFelhasznalonev(felhasznalonev)
                                    setPopup(res.message)
                                }}
                                />
                            </div>

                            {/* Edit E-Mail */}
                            <div style={{ color: 'white', fontWeight: 'bold', marginBottom: '6px' }}>Edit E-Mail</div>
                            <div className='d-flex flex-column flex-lg-row align-items-center gap-2 mb-2'>

                                <TextBox title={""} type={"email"} placeholder={"New E-Mail"} value={email} setvalue={setEmail} />

                                <HomeButtons content={"Update"} onClick={async () => {
                                    const res = await ujEmail(email)
                                    setPopup(res.message)
                                }} />
                            </div>


                            <div style={{ color: 'white', fontWeight: 'bold', marginBottom: '6px' }}>Edit Password</div>
                            <div className='d-flex flex-column flex-lg-row align-items-center gap-2 mb-2'>
                                <TextBox title={""} type={"password"} placeholder={"Old password"} value={regiJelszo} setvalue={setRegiJelszo} />
                            </div>


                            {/* Edit Password */}

                            <div className='col-12 col-lg-6 mt-2'>
                                <TextBox title={""} type={"password"} placeholder={"New password"} value={ujJelszo1} setvalue={setUjJelszo1} />
                            </div>

                            <div className='d-flex flex-column flex-lg-row align-items-center gap-2 mb-2 mt-1'>
                                <TextBox title={""} type={"password"} placeholder={"New Password again"} value={ujJelszo2} setvalue={setUjJelszo2} />

                                <HomeButtons content={"Update"} onClick={async () => {
                                    if (ujJelszo1 !== ujJelszo2) return setPopup("A jelszavak nem egyeznek!")
                                    const res = await ujJelszo(ujJelszo1)
                                    setPopup(res.message)
                                }} />
                            </div>

                            {/* Fiók törlése */}
                            <DeletePopup
                                message={deletePopup ? "Biztosan törölni szeretnéd a fiókodat?" : ""}
                                onConfirm={async () => {
                                    setDeletePopup(false)
                                    const res = await fioktorles()
                                    if (res.result) setNavigateTo("/")
                                    setPopup(res.message)
                                }}
                                onCancel={() => setDeletePopup(false)}
                            />
                            {/* Fiók törlése gomb*/}
                            <div className='col-12 mt-1 align-items-center text-center'>
                                <HomeButtons content={"Fiók törlése"} color="red" onClick={() => setDeletePopup(true)} />
                            </div>
                        
                    </div>
                </div >

            </div>
        </div>
    )
}