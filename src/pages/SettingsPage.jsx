import 'bootstrap/dist/css/bootstrap.min.css'
import { useNavigate } from 'react-router-dom'
import Background from '/src/assets/background.png'
import BackButton from '../components/BackButton'
import Back from '../assets/back.png'
import DeckBackground from '../assets/deckbackground.png'
import TextBox from '../components/Textbox'
import HomeButtons from '../components/HomeButtons'
import Popup from '../components/Popup'
import { useState } from 'react'
import { ujFelhasznalonev, ujEmail, ujJelszo, fioktorles } from '../api'

export default function SettingsPage() {
    const navigate = useNavigate()
    const [popup, setPopup] = useState("")
    const [navigateTo, setNavigateTo] = useState("")

    const [felhasznalonev, setFelhasznalonev] = useState("")
    const [email, setEmail] = useState("")
    const [regiJelszo, setRegiJelszo] = useState("")
    const [ujJelszo1, setUjJelszo1] = useState("")
    const [ujJelszo2, setUjJelszo2] = useState("")

    return (
        <div className='d-flex flex-column align-items-center vh-100'>
            <Popup message={popup} onClose={() => {
                setPopup("")
                if (navigateTo) navigate(navigateTo)
            }} />

            <div className="position-fixed top-0 start-0 w-100 h-100"
                style={{ backgroundImage: `url(${Background})`, backgroundSize: 'cover', zIndex: -1 }} />

            <BackButton src={Back} onClick={() => navigate(-1)} />

            <div className='d-flex flex-column align-items-center justify-content-center flex-grow-1'>
                <div style={{
                    backgroundImage: `url(${DeckBackground})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    borderRadius: '20px',
                    padding: '30px',
                    border: '3px solid #1a5a9a',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px',
                    minWidth: '420px'
                }}>

                    {/* Edit Username */}
                    <div>
                        <div style={{ color: 'white', fontWeight: 'bold', marginBottom: '6px' }}>Edit Username</div>
                        <div className='d-flex gap-2'>
                            <TextBox title={""} type={"text"} placeholder={"New Username:"} value={felhasznalonev} setvalue={setFelhasznalonev} />
                            <HomeButtons content={"update"} onClick={async () => {
                                const res = await ujFelhasznalonev(felhasznalonev)
                                setPopup(res.message)
                            }} />
                        </div>
                    </div>

                    {/* Edit E-Mail */}
                    <div>
                        <div style={{ color: 'white', fontWeight: 'bold', marginBottom: '6px' }}>Edit E-Mail</div>
                        <div className='d-flex gap-2'>
                            <TextBox title={""} type={"email"} placeholder={"New E-Mail"} value={email} setvalue={setEmail} />
                            <HomeButtons content={"update"} onClick={async () => {
                                const res = await ujEmail(email)
                                setPopup(res.message)
                            }} />
                        </div>
                    </div>

                    {/* Edit Password */}
                    <div>
                        <div style={{ color: 'white', fontWeight: 'bold', marginBottom: '6px' }}>Edit Password</div>
                        <div className='d-flex gap-2 mb-2'>
                            <TextBox title={""} type={"password"} placeholder={"Old password"} value={regiJelszo} setvalue={setRegiJelszo} />
                            <TextBox title={""} type={"password"} placeholder={"New password"} value={ujJelszo1} setvalue={setUjJelszo1} />
                        </div>
                        <div className='d-flex gap-2'>
                            <TextBox title={""} type={"password"} placeholder={"New Password again"} value={ujJelszo2} setvalue={setUjJelszo2} />
                            <HomeButtons content={"update"} onClick={async () => {
                                if (ujJelszo1 !== ujJelszo2) return setPopup("A jelszavak nem egyeznek!")
                                const res = await ujJelszo(ujJelszo1)
                                setPopup(res.message)
                            }} />
                        </div>
                    </div>

                    {/* Fiók törlése */}
                    <div className='d-flex justify-content-center mt-2'>
                        <HomeButtons content={"Fiók törlése"} color="red" onClick={async () => {
                            const res = await fioktorles()
                            if (res.result) {
                                setNavigateTo("/")
                            }
                            setPopup(res.message)
                        }} />
                    </div>

                </div>
            </div>
        </div>
    )
}