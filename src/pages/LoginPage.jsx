import 'bootstrap/dist/css/bootstrap.min.css'
import { Link, useNavigate } from 'react-router-dom'
import Background from '/src/assets/background.png'
import LogoKep from '/src/components/LogoKep.jsx'
import Logo from '/src/assets/logo.png'
import LoginButton from '../components/LoginButton'
import Info from '../assets/info.png'
import InfoButton from '../components/InfoButton'
import TextBox from '../components/Textbox'
import { useState } from 'react'
import { belepes } from '../api'
import RememberMe from '../components/Rememberme'
import BackButton from '../components/BackButton'
import Back from '../assets/back.png'
import Popup from '../components/Popup'

export default function LoginPage() {
    const navigate = useNavigate()
    const [navigateTo, setNavigateTo] = useState("")

    const [popup, setPopup] = useState("")

    const [email, setEmail] = useState(
        localStorage.getItem('rememberMe') === 'true' ? localStorage.getItem('savedEmail') || "" : ""
    )
    const [jelszo, setJelszo] = useState(
        localStorage.getItem('rememberMe') === 'true' ? localStorage.getItem('savedJelszo') || "" : ""
    )
    const [rememberMe, setRememberMe] = useState(
        localStorage.getItem('rememberMe') === 'true'
    )

    return (
        <div className='d-flex flex-column align-items-center vh-100'>
            <Popup message={popup} onClose={() => {
                setPopup("")
                if (navigateTo) navigate(navigateTo)
            }} />
            <div className="position-fixed top-0 start-0 w-100 h-100"
                style={{ backgroundImage: `url(${Background})`, backgroundSize: 'cover', zIndex: -1 }} />

            {/* Vissza gomb bal fent */}
            <BackButton src={Back} onClick={() => navigate("/")} />

            {/* Info gomb jobb fent */}
            <div className='position-fixed top-1 end-0 m-3'>
                <InfoButton src={Info} onClick={() => navigate("/description")} />
            </div>

            {/* Logó felül */}
            <div className='d-flex justify-content-center mt-4'>
                <LogoKep src={Logo} alt={"logo"} width={'500px'} onClick={() => navigate('/')} />
            </div>

            {/* Mezők + gomb középen */}
            <div className='d-flex flex-column align-items-center justify-content-center gap-4 flex-grow-1'>
                <TextBox title={"E-mail vagy Felhasználónév"} type={"email"} placeholder={"example@example.com / username"} value={email} setvalue={setEmail} />
                <TextBox title={"Password"} type={"password"} placeholder={"******"} value={jelszo} setvalue={setJelszo} />



                <div className='d-flex flex-column align-items-center gap-2 mt-2'>
                    {/* Remember me */}
                    <RememberMe value={rememberMe} onChange={setRememberMe} />

                    <LoginButton content={"Log-in"} onClick={async () => {
                        if (!email || !jelszo) {
                            return setPopup("Hiányzó adatok!")
                        }
                        const res = await belepes(email, jelszo)
                        setPopup(res.message)
                        if (res.result) {
                            if (rememberMe) {
                                localStorage.setItem('savedEmail', email)
                                localStorage.setItem('savedJelszo', jelszo)
                            } else {
                                localStorage.removeItem('savedEmail')
                                localStorage.removeItem('savedJelszo')
                                localStorage.removeItem('rememberMe')
                            }
                            setNavigateTo("/home")
                            setPopup(res.message)
                        }
                    }} />
                </div>
            </div>
            <Link to="/signup" style={{
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
                Még nincs fiókom
            </Link>
        </div >
    )
}