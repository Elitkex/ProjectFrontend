import 'bootstrap/dist/css/bootstrap.min.css'
import { Link, useNavigate } from 'react-router-dom'
import Background from '/src/assets/background.png'
import LogoKep from '/src/components/LogoKep.jsx'
import Logo from '/src/assets/logo.png'
import SignupButton from '../components/SignupButton'
import Info from '../assets/info.png'
import InfoButton from '../components/InfoButton'
import TextBox from '../components/Textbox'
import { useState } from 'react'
import { regisztracio } from '../api'
import BackButton from '../components/BackButton'
import Back from '../assets/back.png'
import Popup from '../components/Popup'

export default function RegistrationPage() {
    const navigate = useNavigate()
    const [navigateTo, setNavigateTo] = useState("")


    const [email, setEmail] = useState("")
    const [felhasznalonev, setFelhasznalonev] = useState("")
    const [jelszo1, setjelszo1] = useState("")
    const [jelszo2, setjelszo2] = useState("")
    const [popup, setPopup] = useState("")

    return (
        <div className='d-flex flex-column align-items-center vh-100'>
            <Popup message={popup} onClose={() => {
                setPopup("")
                if (navigateTo) navigate(navigateTo)
            }} />

            <div className="position-fixed top-0 start-0 w-100 h-100"
                style={{ backgroundImage: `url(${Background})`, backgroundSize: 'cover', zIndex: -1 }} />

            <BackButton src={Back} onClick={() => navigate(-1)} />

            <div className='d-flex justify-content-center mt-4'>
                <LogoKep src={Logo} alt={"logo"} width={'500px'} onClick={() => navigate('/login-signup')} />
            </div>

            <div className='d-flex flex-column align-items-center justify-content-center gap-4 flex-grow-1'>
                <div className='d-flex flex-row gap-3 mb-4'>
                    <div className='d-flex flex-column gap-3'>
                        <TextBox title={"Felhasználónév"} type={"text"} placeholder={"username"} value={felhasznalonev} setvalue={setFelhasznalonev} />
                        <TextBox title={"Jelszó"} type={"password"} placeholder={"******"} value={jelszo1} setvalue={setjelszo1} />
                    </div>
                    <div className='d-flex flex-column gap-3'>
                        <TextBox title={"E-mail"} type={"email"} placeholder={"example@example.com"} value={email} setvalue={setEmail} />
                        <TextBox title={"Jelszó megerősítés"} type={"password"} placeholder={"******"} value={jelszo2} setvalue={setjelszo2} />
                    </div>
                </div>

                <SignupButton content={"Regisztráció"} onClick={async () => {
                    if (!email || !felhasznalonev || !jelszo1 || !jelszo2) {
                        return setPopup("Hiányzó adatok!")
                    }
                    if (jelszo1 !== jelszo2) {
                        return setPopup("A jelszavak nem egyeznek!")
                    }
                    const res = await regisztracio(email, felhasznalonev, jelszo1)
                    setPopup(res.message)
                    if (res.result) {
                        setNavigateTo("/login")
                    }
                    setPopup(res.message)
                }} />
            </div>

            <Link to="/login" style={{
                color: 'white',
                textDecoration: 'none',
                fontWeight: 'bold',
                fontSize: '1.1rem',
                textShadow: '0 2px 6px rgba(0,0,0,0.8)',
                background: 'rgba(0,0,0,0.3)',
                padding: '6px 20px',
                borderRadius: '20px',
                marginBottom: '22px',
                transition: 'all 0.2s ease'
            }}
                onMouseEnter={e => {
                    e.target.style.background = 'rgba(255,255,255,0.25)'
                    e.target.style.transform = 'scale(1.05)'
                }}
                onMouseLeave={e => {
                    e.target.style.background = 'rgba(0,0,0,0.3)'
                    e.target.style.transform = 'scale(1)'
                }}
            >
                Van fiókom
            </Link>

            <div className='position-fixed top-1 end-0 m-3'>
                <InfoButton src={Info} onClick={() => navigate("/description")} />
            </div>
        </div>
    )
}