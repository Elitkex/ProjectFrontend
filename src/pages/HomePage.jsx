import 'bootstrap/dist/css/bootstrap.min.css'
import { useNavigate } from 'react-router-dom'
import Background from '/src/assets/background.png'
import LogoKep from '/src/components/LogoKep.jsx'
import Logo from '/src/assets/logo.png'
import Info from '../assets/info.png'
import InfoButton from '../components/InfoButton'
import Popup from '../components/Popup'
import { useEffect, useState } from 'react'
import { kijelentkezes } from '../api'
import HomeButtons from '../components/HomeButtons'
import BackButton from '../components/BackButton'
import Back from '../assets/back.png'
import { adataim } from '../api'
import ProfileIcon from '../components/ProfileIcon'

export default function HomePage() {
    const navigate = useNavigate()
    const [popup, setPopup] = useState("")

    const [navigateTo, setNavigateTo] = useState("")

    const [felhasznalo, setFelhasznalo] = useState(null)
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

            <BackButton src={Back} onClick={() => navigate(-1)} />

            <div className="position-fixed top-0 start-0 w-100 h-100"
                style={{ backgroundImage: `url(${Background})`, backgroundSize: 'cover', zIndex: -1 }} />

            {/* Logó felül */}
            <div className='d-flex justify-content-center mt-4'>
                <LogoKep src={Logo} alt={"logo"} width={'500px'} onClick={() => navigate('/')} />
            </div>

            {/* Gombok középen */}
            <div className='d-flex flex-column align-items-center justify-content-center gap-3 flex-grow-1'>
                <HomeButtons content="Deck Builder" onClick={() => navigate("/deck")} />
                <HomeButtons content="Edit Profile" onClick={() => navigate("/settings")} />
                <HomeButtons content="Log-out" color='red' onClick={async () => {
                    const res = await kijelentkezes()
                    if (res.result) {
                        localStorage.removeItem('bejelentkezve')
                        setNavigateTo("/")
                    }
                    setPopup(res.message)
                }} />
            </div>
            <ProfileIcon felhasznalonev={felhasznalo?.felhasznalonev} onClick={() => navigate('/profile')} />

            {/* Info gomb bal lent */}
            <div className='position-fixed top-1 end-0 m-3'>
                <InfoButton src={Info} onClick={() => navigate("/description")} />
            </div>
        </div>
    )
}