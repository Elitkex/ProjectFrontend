import 'bootstrap/dist/css/bootstrap.min.css'
import { useNavigate } from 'react-router-dom'

import Background from '/src/assets/background.png'
import LogoKep from '/src/components/LogoKep.jsx'
import Logo from '/src/assets/logo.png'
import LoginButton from '../components/LoginButton'
import SignupButton from '../components/SignupButton'
import Info from '../assets/info.png'
import InfoButton from '../components/InfoButton'

export default function FirstPage() {
    const navigate = useNavigate()

    return (
        <div className='d-flex flex-column align-items-center vh-100'>
            <div className="position-fixed top-0 start-0 w-100 h-100"
                style={{ backgroundImage: `url(${Background})`, backgroundSize: 'cover', zIndex: -1 }} />

            {/* Logó felül */}
            <div className='mt-4'>
                <LogoKep src={Logo} alt={"logo"} width={25} />
            </div>

            {/* Gombok középen */}
            <div className='d-flex flex-column align-items-center justify-content-center gap-3 flex-grow-1'>
                <SignupButton content={`Sign-up`} onClick={() => navigate("/signup")} />
                <LoginButton content={`Log-in`} onClick={() => navigate("/login")} />
            </div>

            {/* Info gomb bal lent */}
            <div className='position-fixed bottom-0 start-0 m-3'>
                <InfoButton src={Info} onClick={() => navigate("/description")} />
            </div>
        </div>
    )
}