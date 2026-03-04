import 'bootstrap/dist/css/bootstrap.min.css'
import { useNavigate } from 'react-router-dom'
import Background from '/src/assets/background.png'
import LogoKep from '/src/components/LogoKep.jsx'
import Logo from '/src/assets/logo.png'
import LoginButton from '../components/LoginButton'
import Info from '../assets/info.png'
import InfoButton from '../components/InfoButton'
import TextBox from '../components/Textbox'
import { useState } from 'react'
import RememberMe from '../components/Rememberme'

export default function LoginPage() {
    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [jelszo, setJelszo] = useState("")
    const [rememberMe, setRememberMe] = useState(
        localStorage.getItem('rememberMe') === 'true'
    )

    return (
        <div className='d-flex flex-column align-items-center vh-100'>
            <div className="position-fixed top-0 start-0 w-100 h-100"
                style={{ backgroundImage: `url(${Background})`, backgroundSize: 'cover', zIndex: -1 }} />

            {/* Vissza gomb bal fent */}
            <div className='position-fixed top-0 start-0 m-3'>
                <button onClick={() => navigate("/")} style={{
                    background: 'none',
                    border: 'none',
                    color: 'white',
                    fontSize: '1.8rem',
                    cursor: 'pointer',
                    textShadow: '0 2px 4px rgba(0,0,0,0.5)'
                }}>‹</button>
            </div>

            {/* Info gomb jobb fent */}
            <div className='position-fixed bottom-0 start-0 m-3'>
                <InfoButton src={Info} onClick={() => navigate("/description")} />
            </div>

            {/* Logó felül */}
            <div className='mt-4'>
                <LogoKep src={Logo} alt={"logo"} width={25} />
            </div>

            {/* Mezők + gomb középen */}
            <div className='d-flex flex-column align-items-center justify-content-center gap-3 flex-grow-1'>
                <TextBox title={"E-mail"} type={"email"} placeholder={"example@example.com"} value={email} setvalue={setEmail} />
                <TextBox title={"Password"} type={"password"} placeholder={"******"} value={jelszo} setvalue={setJelszo} />

                {/* Remember me */}
                <RememberMe value={rememberMe} onChange={setRememberMe} />

                <LoginButton content={"Log-in"} onClick={() => navigate("/home")} />
            </div>
        </div >
    )
}