import 'bootstrap/dist/css/bootstrap.min.css'
import { useNavigate } from 'react-router-dom'
import Background from '/src/assets/background.png'
import LogoKep from '/src/components/LogoKep.jsx'
import Logo from '/src/assets/logo.png'
import BackButton from '../components/BackButton'
import Back from '../assets/back.png'

export default function DeckPage() {
    const navigate = useNavigate()


    return (
        <div className='d-flex flex-column align-items-center vh-100'>
            <div className="position-fixed top-0 start-0 w-100 h-100"
                style={{ backgroundImage: `url(${Background})`, backgroundSize: 'cover', zIndex: -1 }} />

            {/* Vissza gomb bal fent */}
            <BackButton src={Back} onClick={() => navigate(-1)} />

            {/* Logó felül */}
            <div style={{ display: 'inline-block', cursor: 'pointer' }} onClick={() => navigate('/login-signup')}>
                <LogoKep src={Logo} alt={"logo"} width={25} />
            </div>

            {/* Szöveg doboz */}
            <div className='d-flex flex-column align-items-center justify-content-center flex-grow-1 mb-5' style={{ maxWidth: '700px' }}>

            </div>
        </div>
    )
}