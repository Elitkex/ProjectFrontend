import 'bootstrap/dist/css/bootstrap.min.css'
import { useNavigate } from 'react-router-dom'
import Background from '/src/assets/background.png'
import LogoKep from '/src/components/LogoKep.jsx'
import Logo from '/src/assets/logo.png'
import DescriptionBox from '../components/DescriptionBox'
import BackButton from '../components/BackButton'
import Back from '../assets/back.png'

export default function DescriptionPage() {
    const navigate = useNavigate()

    const szoveg = `turi dominik lolban gold kis geci amigy nem dolgozik semmit nem csinal semmit Matlag Máténak
    kell megcsinalni az egesz projectet de legalabb nem fog megbukni szoval nem tud mit csinalni mert ha o nem
    akkor mas se fogja helyette megirni es eloadni ezert muszaj egesznap csak neki dolgoznia hogy dominik tudjon
    aludni reggel 8tol 11ig utana meg 1 ora tiktok es mehet is dolgara haza majd enni lolozni es aludni tovabb`

    return (
        <div className='d-flex flex-column align-items-center vh-100'>
            <div className="position-fixed top-0 start-0 w-100 h-100"
                style={{ backgroundImage: `url(${Background})`, backgroundSize: 'cover', zIndex: -1 }} />

            {/* Vissza gomb bal fent */}
            <BackButton src={Back} onClick={() => navigate(-1)} />

            {/* Logó felül */}
            <div className='mt-4'>
                <LogoKep src={Logo} alt={"logo"} width={25} />
            </div>

            {/* Szöveg doboz */}
            <div className='d-flex flex-column align-items-center justify-content-center flex-grow-1 mb-5' style={{ maxWidth: '700px' }}>
                <DescriptionBox szoveg={szoveg} />
            </div>
        </div>
    )
}